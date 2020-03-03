import React from "react";
import StarRating from "../star-rating/";
import s from "./review.module.css"

const Review = ({ review }) => {
  const {author, date, message, selectedStarsQuantity } = review;
  return (
    <li>
      <div className={s.container}>
        <div className={s.wrapper}>
          <b className={s.author}>{author}</b>
          <span className={s.date}>{date}</span>
        </div>
        <StarRating selectedStarsQuantity={selectedStarsQuantity}/>
        <p className={s.message}>
          {message}
        </p>
      </div>
    </li>
  );
};

export default Review;
