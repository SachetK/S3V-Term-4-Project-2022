import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListPersonComponent from './components/ListPersonComponent';
import LoginComponent from './components/LoginComponent';
import Login from './components/Login';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  const [token, setToken] = useState();
  if(!token) {
    <LoginComponent setToken = {setToken} />
  }
  return (
    <div>
      <Router>
          <HeaderComponent />
          <div className = "container">
            <Switch>
              <Route exact path = "/" component = {LoginComponent}></Route>
              <Route path = "/login" component = {Login}></Route>
              <Route path = "/students" component = {ListPersonComponent}></Route>
              <LoginComponent />
            </Switch>
          </div>
          <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
