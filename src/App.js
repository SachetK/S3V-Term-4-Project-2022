import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListPersonComponent from './components/ListPersonComponent';
import HomeComponent from './components/HomeComponent';
import HeaderComponent from './components/HeaderComponent';
import HelpComponent from './components/HelpComponent';
import { Container } from 'react-bootstrap';
import ProtectedRoute from './auth/protected-route';
import useRedirectToHttps from './auth/useRedirectToHTTPS';

function App() {
  useRedirectToHttps();
  return (
    <Router>
        <HeaderComponent />
        <Container>
          <Switch>
            <Route exact path = "/" component = {HomeComponent}></Route>
            <Route path = "/login" component = {HomeComponent}></Route>
            <ProtectedRoute path = "/students" component = {ListPersonComponent}></ProtectedRoute>
            <Route path = "/help" component = {HelpComponent}></Route>
            <HomeComponent />
          </Switch>
        </Container>
    </Router>
  );
}

export default App;
