import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Home from "./pages";
import ContactmePage from "./pages/contactme";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route Path="/" component={Home} />
        <Route Path="/contactme" component={ContactmePage} />
      </Switch>
    </Router>
  );
};

export default App;
