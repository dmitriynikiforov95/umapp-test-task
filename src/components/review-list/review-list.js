import React from "react";
import Review from "../review";

import s from "./review-list.module.css";

const ReviewList = ({ reviews }) =>
  !reviews.length ? (
    <p>Напишите, пожалуйста, первый отзыв! </p>
  ) : (
    <ul className={s.list}>
      {reviews.map((item, idx) => (
        <Review review={item} key={idx} />
      ))}
    </ul>
  );

export default ReviewList;
