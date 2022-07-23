import React, { useState } from "react";
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

function App() {
  const isAuth = useSelector((state) => state.auth.isAuth);

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
