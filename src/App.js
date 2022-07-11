import React from "react";
import classes from "./App.module.css";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  let route = (
    <Router>
      <Route path="/" exact render={(props) => <Home />} />
    </Router>
  );
  return (
    <div className={classes.App}>
      <Navigation />
      {route}
    </div>
  );
}

export default App;
