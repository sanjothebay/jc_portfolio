import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages";
import ContactmePage from "./pages/contactme";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route Path="/" component={Home} exact />
        <Route Path="/contactme" component={ContactmePage} exact />
      </Switch>
    </Router>
  );
};

export default App;
