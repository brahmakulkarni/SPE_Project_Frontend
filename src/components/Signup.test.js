import {BrowserRouter as Router} from 'react-router-dom'
import { render, screen } from "@testing-library/react";
import Signup from "./Signup";

test("renders app title element", () => {
  <Router>
      render(<Signup />);
      const titleElement = screen.getByText(/Signup/i);
      expect(titleElement).toBeInTheDocument();
  </Router>
});