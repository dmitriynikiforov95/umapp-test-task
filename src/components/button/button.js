import React from "react";

import s from './button.module.css';

const Button = ({text, isDisabled, submit }) => {

  const btnClazz = !isDisabled ? s.btn : s.btn + " " + s.btnDisabled;
  const textClazz = !isDisabled ? s.btnText : s.btnText + " " + s.btnTextDisabled;
  
  return (
    <button type={submit ? "submit" : "button"} className={btnClazz} disabled={isDisabled}>
      <span className={textClazz}>{text}</span>
    </button>
  );
};

export default Button;