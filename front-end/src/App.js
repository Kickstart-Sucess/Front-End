import React from 'react';
import logo from './logo.svg';
import { Switch, Link, Route } from "react-router-dom"
import PrivateRoute from "./api/privateRoute"
import './App.css';

import Header from "./components/Header/Header"
import Dashboard from "./components/Dashboard/Dashboard"
import LogIn from "./components/LogIn/LogIn"

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <PrivateRoute exact path="/Dashboard" component={Dashboard} />
        <Route exact path="/" component={LogIn} />
      </Switch>
    </div>
  );
}

export default App;
