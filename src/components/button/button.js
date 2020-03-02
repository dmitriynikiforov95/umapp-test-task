import React from "react";

import s from './button.module.css';

const Button = ({text}) => {

  return (
    <button type="button" className={s.btn} >
      <span className={s.btnText}>{text}</span>
    </button>
  );
};

export default Button;