import React from "react";
import StarRating from "../star-rating/";
import { connect } from "react-redux";

import { withRouter} from "react-router-dom";

import {
  changeCurrentReviewAuthor,
  changeCurrentReviewMessage,
  changeCurrentReviewSelectedStarsQuantity,
  addNewReview
} from "../../actions";

import Button from "../button";
import s from "./add-review-form.module.css";


const AddReviewForm = ({
  currentReview,
  changeCurrentReviewAuthor,
  changeCurrentReviewMessage,
  changeCurrentReviewSelectedStarsQuantity,
  addNewReview,
  history
}) => {
  const { author, message, selectedStarsQuantity } = currentReview;

  const toSubmit = e => {
    e.preventDefault();

    let currentDate = new Date();

    function formatDate(date) {
      let dd = date.getDate();
      if (dd < 10) dd = "0" + dd;

      let mm = date.getMonth() + 1;
      if (mm < 10) mm = "0" + mm;

      let yy = date.getFullYear() % 100;
      if (yy < 10) yy = "0" + yy;

      return dd + "." + mm + "." + yy + yy;
    }

    const newReview = {
      selectedStarsQuantity,
      date: formatDate(currentDate),
      author,
      message
    };

    addNewReview(newReview);
    history.push('/');
  };

  return (
    <form name="form1" action="" method="post" onSubmit={toSubmit}>
      <StarRating
        selectedStarsQuantity={selectedStarsQuantity}
        isInsideReviewForm={true}
        changeCurrentReviewSelectedStarsQuantity={
          changeCurrentReviewSelectedStarsQuantity
        }
      />
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

const mapStateToProps = ({ currentReview }) => {
  return {
    currentReview
  };
};

const mapDispatchToProps = {
  changeCurrentReviewAuthor,
  changeCurrentReviewMessage,
  changeCurrentReviewSelectedStarsQuantity,
  addNewReview
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AddReviewForm));
