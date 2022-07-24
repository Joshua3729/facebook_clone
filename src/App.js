import React, { useEffect, useState } from "react";
import classes from "./App.module.css";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Pages/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import User_profile from "./Pages/User_Profile/User_profile";
import AuthPage from "./Pages/AuthPage/AuthPage";
import Footer from "./Components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import * as HomeActions from "./store/actionTypes/index";

function App() {
  let isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();
  useEffect(() => {
    const session_data = JSON.parse(localStorage.getItem("session_data"));

    if (!session_data?.token) {
      return;
    }
    if (new Date(session_data?.xpiryDate) <= new Date()) {
      dispatch(HomeActions.onLogout());

      return;
    }

    const remainingMilliseconds =
      new Date(session_data?.expiryDate).getTime() - new Date().getTime();
    setAutoLogout(remainingMilliseconds);

    if (session_data?.user_data.user_id) {
      isAuth = true;
    }
    dispatch(
      HomeActions.setSessionData(
        isAuth,
        session_data.token,
        session_data.user_data
      )
    );
  }, []);

  const setAutoLogout = (milliseconds) => {
    setTimeout(() => {
      dispatch(HomeActions.onLogout());
    }, milliseconds);
  };

  let route = (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/:username" exact element={<User_profile />} />
      </Routes>
    </Router>
  );
  if (!isAuth) {
    route = (
      <Router>
        <Routes>
          <Route path="/" exact element={<AuthPage />} />
        </Routes>
      </Router>
    );
  }
  return (
    <div className={classes.App}>
      {isAuth && <Navigation />}
      {route}
    </div>
  );
}

export default App;
