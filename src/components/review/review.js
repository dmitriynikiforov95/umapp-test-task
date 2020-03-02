import React from "react";
import StarRating from "../star-rating/";
import s from "./review.module.css"

const Review = () => {
  return (
    <li>
      <div className={s.container}>
        <div className={s.wrapper}>
          <b className={s.author}>Nickname</b>
          <span className={s.date}>24.09.2019</span>
        </div>
        <StarRating starsSelectedQuantity={5}/>
        <p className={s.message}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
        </p>
      </div>
    </li>
  );
};

export default Review;
