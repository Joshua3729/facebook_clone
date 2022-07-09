import React from "react";
import classes from "./App.module.css";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className={classes.App}>
      <Navigation />
      <Home />
    </div>
  );
}

export default App;
