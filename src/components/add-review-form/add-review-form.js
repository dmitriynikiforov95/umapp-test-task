import React, { useState, useEffect, useRef } from "react";
import { withRouter } from "react-router-dom";
import StarRating from "../star-rating/";
import Button from "../button";
import classNames from "classnames/bind";
import s from "./add-review-form.module.css";

const AddReviewForm = ({ reviews, addNewReview, history }) => {
  const [currentReview, setCurrentReview] = useState({
    author: "",
    review: "",
  });

  const [disabled, setDisabled] = useState({
    isAuthorFieldDisabled: true,
    isReviewFieldDisabled: true,
  });

  const [selectedStarsQuantity, setSelectedStarsQuantity] = useState(null);

  const isFirstRender = useRef(true);

  const { author, review } = currentReview;
  const { isAuthorFieldDisabled, isReviewFieldDisabled } = disabled;

  const isFormDisabled = Object.values(disabled).includes(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    setDisabled(formValidation());
  }, [author, review]);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;

    setCurrentReview((currentReview) => {
      return {
        ...currentReview,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormDisabled) {
      return;
    }

    const currentDate = new Date().getTime();

    const newReview = {
      ...currentReview,
      author: author.trim(),
      message: review.trim(),
      selectedStarsQuantity,
      date: currentDate,
    };
    const newReviews = [newReview, ...reviews];

    localStorage.setItem("reviews", JSON.stringify(newReviews));
    addNewReview(newReviews);

    history.push("/umapp");
  };

  const formValidation = () => {
    const disabled = {};

    if (author.trim() === "") {
      disabled.isAuthorFieldDisabled = true;
    } else if (author.trim().length >= 1 && author.trim().length >= 20) {
      disabled.isAuthorFieldDisabled = true;
    } else {
      disabled.isAuthorFieldDisabled = false;
    }

    if (review.trim() === "") {
      disabled.isReviewFieldDisabled = true;
    } else if (review.trim().length <= 20 || review.trim().length >= 500) {
      disabled.isReviewFieldDisabled = true;
    } else {
      disabled.isReviewFieldDisabled = false;
    }

    return disabled;
  };

  const cx = classNames.bind(s);

  return (
    <form name="form1" action="" method="post" onSubmit={handleSubmit}>
      <StarRating
        selectedStarsQuantity={selectedStarsQuantity}
        isInsideReviewForm={true}
        changeCurrentReviewSelectedStarsQuantity={setSelectedStarsQuantity}
      />
      <p className={s.fieldWrapper}>
        <input
          name="author"
          type="text"
          placeholder="Укажите вам никнейм"
          value={author}
          className={cx({
            field: true,
            valid: !isAuthorFieldDisabled,
            invalid: isAuthorFieldDisabled,
          })}
          onChange={(e) => handleInputChange(e)}
        />
        <span
          className={cx({
            fieldHint: true,
            hintHidden: author.length,
          })}
        >
          От 1 до 20 симолов
        </span>
      </p>
      <div className={s.fieldWrapper}>
        <textarea
          name="review"
          value={review}
          placeholder="Расскажите, что можно улучшить?"
          className={cx({
            field: true,
            reviewTextField: true,
            valid: !isReviewFieldDisabled,
            invalid: isReviewFieldDisabled,
          })}
          onChange={(e) => handleInputChange(e)}
        ></textarea>
        <span
          className={cx({
            fieldHint: true,
            hintHidden: review.length,
          })}
        >
          От 20 до 500 симолов
        </span>
      </div>
      <Button
        text="Отправить"
        isInsideReviewForm={true}
        isDisabled={isFormDisabled}
      />
    </form>
  );
};

export default withRouter(AddReviewForm);
