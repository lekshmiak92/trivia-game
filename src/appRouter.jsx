import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./homePage";
import Profile from "./profile";
import App from "./App";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact component={HomePage} />
        <Route path="/game/" component={App} />
        <Route path="/profile/" component={Profile} />
      </div>
    </Router>
  );
};

export default AppRouter;
