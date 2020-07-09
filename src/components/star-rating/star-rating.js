import React from "react";
import classNames from "classnames/bind";
import s from "./star-rating.module.css";

const StarRating = ({
  selectedStarsQuantity,
  isInsideReviewForm,
  changeCurrentReviewSelectedStarsQuantity,
}) => {
  const starsQuantity = 5;

  const cx = classNames.bind(s);

  return (
    <ul
      className={cx({
        list: true,
        listInsideForm: isInsideReviewForm,
      })}
    >
      {[...new Array(starsQuantity)].map((item, idx) => (
        <li
          className={s.star}
          key={idx}
          onClick={
            isInsideReviewForm
              ? () => changeCurrentReviewSelectedStarsQuantity(idx + 1)
              : null
          }
        >
          <svg
            width={isInsideReviewForm ? "36" : "20"}
            height={isInsideReviewForm ? "36" : "20"}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={
                idx + 1 <= selectedStarsQuantity ? s.active : s.nonActive
              }
              d="M9.07668 1.21993C9.41827 0.398635 10.5817 0.398636 10.9233 1.21993L12.9395 6.06735C13.0835 6.41358 13.4091 6.65015 13.7829 6.68012L19.0161 7.09966C19.9027 7.17074 20.2623 8.27725 19.5867 8.85592L15.5996 12.2713C15.3148 12.5153 15.1904 12.8981 15.2774 13.2628L16.4956 18.3695C16.702 19.2348 15.7607 19.9186 15.0016 19.455L10.5213 16.7184C10.2012 16.5229 9.79876 16.5229 9.47875 16.7184L4.9984 19.455C4.2393 19.9186 3.29805 19.2348 3.50444 18.3695L4.72257 13.2628C4.80958 12.8981 4.68521 12.5153 4.40042 12.2713L0.413277 8.85592C-0.26226 8.27725 0.0972674 7.17074 0.983922 7.09966L6.21712 6.68012C6.59091 6.65015 6.91652 6.41358 7.06052 6.06735L9.07668 1.21993Z"
            />
          </svg>
        </li>
      ))}
    </ul>
  );
};
export default StarRating;
