import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import {BrowserRouter as Router} from "react-router-dom"
import { logger } from "redux-logger"

import App from "./App";

import "./index.css"

// const store = createStore(Reducer, applyMiddleware(thunk));




ReactDOM.render(
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
