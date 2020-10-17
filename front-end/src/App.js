import React from 'react';
import logo from './logo.svg';
import { Switch, Link, Route } from "react-router-dom";
import './App.css';

import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/SignUp/Login";


function App() {
  return (
    <div className="App">
      <Header /> 
      <Route exact path='/' component={Dashboard} />
      <Route path='/signup' component={SignUp} />
      <Route path='/login' component={Login} />
    </div>
  );
}

export default App;
