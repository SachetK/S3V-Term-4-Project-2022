import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import HeaderComponent from './components/HeaderComponent';
import HelpComponent from './components/HelpComponent';
import { Container } from 'react-bootstrap';
import ProtectedRoute from './auth/protected-route.jsx';
import ListPersonComponent from './components/studentsList/ListPersonComponent';
import ListLogsComponent from './components/logsList/ListLogsComponent';

function App() {
  return (
      <>
        <HeaderComponent />
        <Container>
          <Routes>
            <Route path = "/" element = {<HomeComponent />}></Route>
            <Route path = "/login" element = {<HomeComponent />}></Route>
            <Route path = "/students" element = {<ProtectedRoute component = {ListPersonComponent} />}></Route>
            <Route path = "/logs" element = {<ProtectedRoute component = {ListLogsComponent} />}></Route>
            <Route path = "/help" element = {<HelpComponent />}></Route>
          </Routes>
        </Container>
    </>
  );
}

export default App;
