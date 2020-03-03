import React, {Component} from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import ReviewsPage from "../components/pages/reviews-page";
import AddReviewPage from "../components/pages/add-review-page";
import { getReviews } from "../actions";
import withReviewsApiService from "../components/hoc/with-reviews-api-service";

class DataGettingContainer extends Component {
  componentDidMount() {
    const { reviewsApiService, getReviews } = this.props;
    reviewsApiService.getRewiews().then(res => getReviews(res));
  }

  render() {
    return (
      <Switch>
        <Route path="/" exact component={ReviewsPage} />
        <Route path="/add-review-page" component={AddReviewPage} />
      </Switch>
    );
  }
}

const mapStateToProps = ({ reviews }) => {
  return {
    reviews
  };
};

const mapDispatchToProps = {
  getReviews
};

export default withReviewsApiService(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(DataGettingContainer)
);
