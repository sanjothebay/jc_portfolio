import React from "react";
import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import ContactmePage from "./pages/contactme";

const App = () => {
  return (
    <Router>
      <Router basename="/jc_portfolio"></Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contactme" component={ContactmePage} />
      </Switch>
    </Router>
  );
};

export default App;
