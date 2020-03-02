import React from "react";
import StarRating from "../star-rating/";
import { connect } from "react-redux";

import {
  changeCurrentReviewAuthor,
  changeCurrentReviewMessage
} from "../../actions";

import Button from "../button";
import s from "./add-review-form.module.css";

const AddReviewForm = ({
  currentReview,
  changeCurrentReviewAuthor,
  changeCurrentReviewMessage
}) => {
  const { author, message, date, selectedStarsQuantity } = currentReview;

  return (
    <form>
      <StarRating selectedStarsQuantity={0} isInsideReviewForm={true}/>
      <p>
        <input
          type="text"
          placeholder="Укажите вам никнейм"
          value={author}
          className={s.nickNameField}
          onChange={e => changeCurrentReviewAuthor(e.target.value)}
        />
      </p>
      <div className={s.reviewTextFieldWrapper}>
        <textarea
          value={message}
          placeholder="Расскажите, что можно улучшить?"
          className={s.reviewTextField}
          onChange={e => changeCurrentReviewMessage(e.target.value)}
        ></textarea>
        {message.length == 0 ? (
          <span className={s.reviewTextFieldHint}>Минимум 20 символов</span>
        ) : null}
      </div>
      <Button text="Отправить" submit={true}
        isDisabled ={(message.length <= 20) ? true : false}/>
    </form>
  );
};

const mapStateToProps = ({ currentReview }) => {
  return {
    currentReview
  };
};

const mapDispatchToProps = {
  changeCurrentReviewAuthor,
  changeCurrentReviewMessage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddReviewForm);
