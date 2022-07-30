import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Home from "./store/reducer/Home";
import Auth from "./store/reducer/Auth";
import { BrowserRouter } from "react-router-dom";
import user_profile from "./store/reducer/Userprofile";

const rootReducer = combineReducers({
  home: Home,
  auth: Auth,
  userprofile: user_profile,
});

const logger = (store) => {
  return (next) => {
    return (action) => {
      // console.log("[Middleware]", action);
      const result = next(action);
      // console.log("[Middleware] next state", store.getState());
    };
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>

  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
