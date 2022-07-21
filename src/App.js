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

function App() {
  const [auth, setAuth] = useState(true);
  const setAuthHandler = (auth) => {
    setAuth(auth);
  };
  console.log("once");
  let route = (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/:username" exact element={<User_profile />} />
      </Routes>
    </Router>
  );
  if (!auth) {
    route = (
      <Router>
        <Routes>
          <Route
            path="/"
            exact
            element={<AuthPage setAuthHandler={setAuthHandler} />}
          />
        </Routes>
      </Router>
    );
  }
  return (
    <div className={classes.App}>
      {auth && <Navigation />}
      {route}
    </div>
  );
}

export default App;
