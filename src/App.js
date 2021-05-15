import React,{useState} from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Header from './components/Header';
import {createBrowserHistory} from "history"
import Profile from './components/Profile';
import Editprofile from './components/Editprofile';
import Customroute from './utils/Customroute';

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
          <Navbar showError = {updateErrorMessage} updateTitle={updateTitle} />
          {/* <Redirect from='/' to='/Login'/> */}
          <Switch>
            <div className="App">
              <Route path='/Signup' component = {() => <Signup showError = {updateErrorMessage} updateTitle={updateTitle} />}/>
              <Route path='/Login' component = {() => <Login showError = {updateErrorMessage} updateTitle={updateTitle} />}/>
              <Customroute path='/Home' component = {() => <Home showError = {updateErrorMessage} updateTitle={updateTitle} />}/>
              <Customroute path='/Profile' component = {() => <Profile showError = {updateErrorMessage} updateTitle={updateTitle} />}/>
              <Customroute path='/Editprofile' component = {() => <Editprofile showError = {updateErrorMessage} updateTitle={updateTitle} />}/>
            </div>
          </Switch>
      </Router>
    </>
  );
}

export default App;
