import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import Login from "./components/login";
import SignUp from "./components/signUp";
import RegisterForm from "./components/registerForm";
import HomePage from "./components/homePage";
import registered from './components/registeredForm';

function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>Schooling System </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link" to={"/aboutUs"}>About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/register"}>Register Student</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/registered" component={registered} />
            <Route path="/aboutUs" component={HomePage} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;