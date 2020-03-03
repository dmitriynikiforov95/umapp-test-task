import React from "react";
import {Link} from 'react-router-dom';
import {connect} from "react-redux";

import { clearAddReviewFormFields } from "../../../actions";
import Button from "../../button";
import ReviewsList from "../../reviews-list";
import s from "./reviews-page.module.css";

const ReviewsPage = ({clearAddReviewFormFields}) => {
  return (
    <div className={s.container}>
      <div className={s.contentContainer}>
        <h2 className={s.title}>Отзывы магазина</h2>
        <Link to="/add-review-page"  onClick={clearAddReviewFormFields}>
        <Button text="Написать отзыв"/>
        </Link>
        <ReviewsList />
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  clearAddReviewFormFields
};

export default connect(
  null,
  mapDispatchToProps
)(ReviewsPage);