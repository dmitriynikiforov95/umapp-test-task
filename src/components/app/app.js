import React, {useState} from "react";
import { Switch, Route } from "react-router-dom";
import ReviewsPage from "../pages/reviews-page";
import AddReviewPage from "../pages/add-review-page";

import "./app.css";

const App = () => {
  const [reviews, setReviews] = useState(() => localStorage.getItem("reviews") ? JSON.parse(localStorage.getItem("reviews")) : [])

  return (
    <Switch>
      <Route path="/umapp" exact render={() => <ReviewsPage 
      reviews={reviews}
      />} />
      <Route path="/umapp/add-review-page" render={() => <AddReviewPage 
      reviews={reviews}
      addNewReview={setReviews}/>} />
    </Switch>
  );
};

export default App;
