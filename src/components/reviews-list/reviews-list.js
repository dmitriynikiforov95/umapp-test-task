import React, { Component } from "react";
import { connect } from "react-redux";

import Review from "../review";
import withReviewsApiService from "../hoc/with-reviews-api-service";
import s from "./reviews-list.module.css";

class ReviewsList extends Component {

  render() {
    const { reviews } = this.props;
    if (reviews.length === 0) return <p>...Loading</p>;
    return (
      <ul className={s.list}>
        {reviews.map((item, idx) => (
          <Review review={item} key={idx} />
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

export default withReviewsApiService(
  connect(
    mapStateToProps
  )(ReviewsList)
);
