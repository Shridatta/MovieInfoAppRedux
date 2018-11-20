import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import thunk from "redux-thunk";
import logger from "redux-logger";
import App from "./components/app";
import reducers from "./reducers";

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const createStoreWithMiddleware = createStore(
  reducers,
  reduxDevTools,
  applyMiddleware(ReduxPromise, thunk, logger)
);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware}>
    <App />
  </Provider>,
  document.querySelector(".container")
);
