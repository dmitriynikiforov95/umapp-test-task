import React from "react";
import { Switch, Route } from "react-router-dom";
import ReviewsPage from "../pages/reviews-page"

import "./app.css";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={ReviewsPage} />
    </Switch>
  );
};

export default App;
