import React from 'react';
import logo from './logo.svg';
import { Switch, Link, Route } from "react-router-dom";
import PrivateRoute from "./components/api/privateRoute"
import './App.css';

import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <PrivateRoute exact path="/Dashboard" component={Dashboard} />
        <Route exact path="/" component={Login} />
        <Route exact path="/Signup" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
