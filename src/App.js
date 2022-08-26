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
  Navigate,
} from "react-router-dom";
import User_profile from "./Pages/User_Profile/User_profile";
import AuthPage from "./Pages/AuthPage/AuthPage";
import Footer from "./Components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import * as HomeActions from "./store/actionTypes/index";
import LoadingPage from "./Pages/LoadingPage/LoadingPage";
import { setAutoLogout } from "./Utils/AutoLogout";
import MessengerPage from "./Pages/MessengerPage/Messenger";

function App() {
  let isAuth = useSelector((state) => state.auth.isAuth);
  // let authLoading = useSelector((state) => state.auth.authLoading);
  const dispatch = useDispatch();
  const [authLoading, setAuthLoading] = useState(true);
  useEffect(() => {
    const session_data = JSON.parse(localStorage.getItem("session_data"));
    if (!session_data?.token) {
      setAuthLoading(false);
      return;
    }
    if (new Date(session_data?.xpiryDate) <= new Date()) {
      dispatch(HomeActions.onLogout());

      return;
    }

    const remainingMilliseconds =
      new Date(session_data?.expiryDate).getTime() - new Date().getTime();
    setAutoLogout(remainingMilliseconds, dispatch);

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
    setAuthLoading(false);
  }, []);

  console.log("isAuth: " + isAuth + " " + "authLoading: " + authLoading);
  let route = (
    <Routes>
      <Route path="/" exact element={<LoadingPage />} />
    </Routes>
  );

  if (isAuth && !authLoading) {
    route = (
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/user/:user_id" exact element={<User_profile />} />
        <Route path="/messages/:user_id" exact element={<MessengerPage />} />
        <Route path="/messages/" exact element={<MessengerPage />} />
      </Routes>
    );
  } else if (!isAuth && !authLoading) {
    route = (
      <Routes>
        <Route path="/" exact element={<AuthPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    );
  }
  return <div className={classes.App}>{route}</div>;
}

export default App;
