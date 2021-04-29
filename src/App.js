import React,{useState} from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Header from './components/Header';
import {createBrowserHistory} from "history"

// const history = createBrowserHistory();

function App() {
  const [title, updateTitle] = useState(null);
  const [errorMessage, updateErrorMessage] = useState(null);
  return (
    <>
      <Router>
        {/* <Navbar />
        <Switch>
          <Route path='/' />
        </Switch> */}
          <Navbar />  
          <Redirect from='/' to='/Signup'/> 
          <Switch>
            <div className="App">
              <Route path='/Signup' component = {() => <Signup showError = {updateErrorMessage} updateTitle={updateTitle} />}/>
              <Route path='/Login' component = {() => <Login showError = {updateErrorMessage} updateTitle={updateTitle} />}/>
            </div>
          </Switch>
      </Router>
    </>
  );
}

export default App;
