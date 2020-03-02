import React, { Component } from "react";
import { connect } from "react-redux";
import { getReviews } from "../../actions";
import Review from "../review";
import withReviewsApiService from "../hoc/with-reviews-api-service";
import s from "./reviews-list.module.css";

class ReviewsList extends Component {
  componentDidMount() {
    const { reviewsApiService, getReviews } = this.props;
    reviewsApiService.getRewiews().then(res => getReviews(res));
  }
  render() {
    const { reviews } = this.props;
    if (reviews.length === 0) return <p>...Loading</p>;
    return (
      <ul className={s.list}>
        {reviews.map((item, idx) => (
          <Review review={item} />
        ))}
      </ul>
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
    )(ReviewsList)
  );
  
  