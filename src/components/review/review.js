import React from "react";
import StarRating from "../star-rating/";
import s from "./review.module.css"

const Review = ({ review }) => {
  const { id, author, date, reviewMessage, selectedStarsQuantity } = review;
  return (
    <li key={id}>
      <div className={s.container}>
        <div className={s.wrapper}>
          <b className={s.author}>{author}</b>
          <span className={s.date}>{date}</span>
        </div>
        <StarRating selectedStarsQuantity={selectedStarsQuantity}  published={true}/>
        <p className={s.message}>
          {reviewMessage}
        </p>
      </div>
    </li>
  );
};

export default Review;
