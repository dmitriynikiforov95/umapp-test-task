import React from "react";
import {Link} from 'react-router-dom';
import AddReviewForm from "../../add-review-form";
import s from "./add-review-page.module.css";

const AddReviewPage = () => {
  return (
    <div className={s.container}>
      <div className={s.contentContainer}>
      <div className={s.wrapper}>
          <Link to="/">
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.41421 10L10.7071 16.2929L9.29289 17.7071L0.585785 9L9.29289 0.292892L10.7071 1.70711L4.41421 8H19V10H4.41421Z"
                fill="black"
              />
            </svg>
          </Link>
          <h2 className={s.title}>Оценить</h2>
          </div>
        <AddReviewForm />
      </div>
    </div>
  );
};

export default AddReviewPage;
