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
import LoadingPage from "./Pages/LoadingPage/LoadingPage";

function App() {
  let isAuth = useSelector((state) => state.auth.isAuth);
  let authLoading = useSelector((state) => state.auth.authLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    const session_data = JSON.parse(localStorage.getItem("session_data"));
    dispatch(HomeActions.setAuthLoad(true));
    if (!session_data?.token) {
      dispatch(HomeActions.setAuthLoad(false));
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
    dispatch(HomeActions.setAuthLoad(false));
  }, []);

  const setAutoLogout = (milliseconds) => {
    setTimeout(() => {
      dispatch(HomeActions.onLogout());
    }, milliseconds);
  };

  let route = (
    <Router>
      <Routes>
        <Route path="/" exact element={<LoadingPage />} />
      </Routes>
    </Router>
  );

  if (!isAuth && !authLoading) {
    route = (
      <Router>
        <Routes>
          <Route path="/" exact element={<AuthPage />} />
        </Routes>
      </Router>
    );
  } else if (isAuth && !authLoading) {
    route = (
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/:username" exact element={<User_profile />} />
        </Routes>
      </Router>
    );
  }
  return (
    <div className={classes.App}>
      {isAuth && !authLoading && <Navigation />}
      {route}
    </div>
  );
}

export default App;
