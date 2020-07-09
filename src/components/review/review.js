import React, { useMemo } from "react";
import { formatDate } from "../../helpers";
import StarRating from "../star-rating/";
import s from "./review.module.css";

const Review = ({ review }) => {
  const { author, date, message, selectedStarsQuantity } = review;

  const memoizedFormatedDate = useMemo(() => formatDate(date), [date]);

  return (
    <li>
      <div className={s.container}>
        <p className={s.header}>
          <b>{author}</b>
          <span className={s.date}>{memoizedFormatedDate}</span>
        </p>
        <StarRating selectedStarsQuantity={selectedStarsQuantity} />
        <p className={s.message}>{message}</p>
      </div>
    </li>
  );
};

export default Review;
