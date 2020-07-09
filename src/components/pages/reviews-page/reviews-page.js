import React from "react";
import { Link } from "react-router-dom";

import Button from "../../button";
import ReviewList from "../../review-list";
import s from "./reviews-page.module.css";

const ReviewsPage = ({ reviews }) => (
  <div className={s.container}>
    <h2 className={s.title}>Отзывы магазина</h2>
    <Link to="/umapp/add-review-page">
      <Button text="Написать отзыв" />
    </Link>
    <ReviewList reviews={reviews} />
  </div>
);

export default ReviewsPage;
