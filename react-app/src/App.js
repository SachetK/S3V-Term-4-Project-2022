import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListPersonComponent from './components/ListPersonComponent';
import LoginComponent from './components/LoginComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
          <div className = "container">
            <Switch>
              <Route exact path = "/" component = {LoginComponent}></Route>
              <Route path = "/login" component = {LoginComponent}></Route>
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
