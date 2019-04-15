import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./homePage";
import Profile from "./profile";
import App from "./App";
import Instructions from "./instructions";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact component={HomePage} />
        <Route path="/game/" component={App} />
        <Route path="/profile/" component={Profile} />
        <Route path="/howToPlay/" component={Instructions} />
      </div>
    </Router>
  );
};

export default AppRouter;
