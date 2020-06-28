import React from "react";
import classNames from "classnames/bind";
import s from "./button.module.css";

const Button = ({ text, isDisabled, isInsideReviewForm }) => {
  const cx = classNames.bind(s);

  return (
    <button
      type={isInsideReviewForm ? "submit" : "button"}
      className={cx({
        btn: true,
        btnDisabled: isDisabled && isInsideReviewForm,
      })}
      disabled={isDisabled}
    >
      <span
        className={cx({
          btnText: true,
          btnTextDisabled: isDisabled && isInsideReviewForm,
        })}
      >
        {text}
      </span>
    </button>
  );
};

export default Button;
