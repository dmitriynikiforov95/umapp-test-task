import React, { Component } from "react";
import Review from "../review";
import s from "./reviews-list.module.css";

export default class ReviewsList extends Component {
    render() {
      return (
        <ul className={s.list}>
            <Review />
        </ul>
      );
    }
  }

  