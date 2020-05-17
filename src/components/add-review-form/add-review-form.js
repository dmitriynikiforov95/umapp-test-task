import React from "react";
import StarRating from "../star-rating/";

import Button from "../button";
import s from "./add-review-form.module.css";


const AddReviewForm = ({
  handleSubmit, currentReview, handleInputChange, selectedStarsQuantity, setSelectedStarsQuantity
}) => {
  const { author, message } = currentReview;
  return (
    <form name="form1" action="" method="post" onSubmit={handleSubmit}>
      <StarRating
        selectedStarsQuantity={selectedStarsQuantity}
        isInsideReviewForm={true}
        changeCurrentReviewSelectedStarsQuantity={
          setSelectedStarsQuantity
        }
      />
      <p>
        <input
          name="author"
          type="text"
          placeholder="Укажите вам никнейм"
          value={author}
          className={s.nickNameField}
          onChange={e => handleInputChange(e)}
        />
      </p>
      <div className={s.reviewTextFieldWrapper}>
        <textarea
          name="message"
          value={message}
          placeholder="Расскажите, что можно улучшить?"
          className={s.reviewTextField}
          onChange={e => handleInputChange(e)}
        ></textarea>
        {message.length === 0 ? (
          <span className={s.reviewTextFieldHint}>Минимум 20 символов</span>
        ) : null}
      </div>
      <Button
        text="Отправить"
        submit={true}
        isDisabled={message.length <= 20 ? true : false}
      />
    </form>
  );
};

export default AddReviewForm;
