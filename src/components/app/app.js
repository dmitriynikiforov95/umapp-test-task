import React from "react";
import { Switch, Route } from "react-router-dom";
import ReviewsPage from "../pages/reviews-page"
import AddReviewPage from "../pages/add-review-page";

import "./app.css";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={ReviewsPage} />
      <Route path="/add-review-page" exact component={AddReviewPage} />
    </Switch>
  );
};

export default App;
