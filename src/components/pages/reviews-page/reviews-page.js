import React from "react";
import {Link} from 'react-router-dom';

import Button from "../../button";
import ReviewListContainer from "../../../containers/review-list-container";
import s from "./reviews-page.module.css";

const ReviewsPage = (props) => {

  return (
    <div className={s.container}>
      <div className={s.contentContainer}>
        <h2 className={s.title}>Отзывы магазина</h2>
        <Link to="/add-review-page">
        <Button text="Написать отзыв"/>
        </Link>
        <ReviewListContainer />
      </div>
    </div>
  );
};

export default ReviewsPage;