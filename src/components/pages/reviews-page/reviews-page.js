import React from "react";
import {Link} from 'react-router-dom';
import Button from "../../button";
import ReviewsList from "../../reviews-list";
import s from "./reviews-page.module.css";

const ReviewsPage = () => {
  return (
    <div className={s.container}>
      <div className={s.contentContainer}>
        <h2 className={s.title}>Отзывы магазина</h2>
        <Link to="/add-review-page">
        <Button text="Написать отзыв" />
        </Link>
        <ReviewsList />
      </div>
    </div>
  );
};

export default ReviewsPage;
