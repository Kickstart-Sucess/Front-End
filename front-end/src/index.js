import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import {BrowserRouter as Router} from "react-router-dom"
import { logger } from "redux-logger"
import { campaignReducer } from "./Redux/reducers/campaignReducer"
import { userReducer } from "./Redux/reducers/userReducer"

import App from "./App";

import "./index.css"

const rootReducer = combineReducers({
  campaignReducer,
  userReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk));




ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
