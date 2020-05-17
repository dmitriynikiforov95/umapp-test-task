import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
    addNewReview
} from "../../actions";

import AddReviewForm from "../../components/add-review-form";

const AddReviewFormContainer = ({
    addNewReview,
    history
}) => {

    const [currentReview, setCurrentReview] =  useState({
        author: "",
        message: ""
    });

    const [selectedStarsQuantity, setSelectedStarsQuantity] = useState(null)

    const handleInputChange = ({target}) => {
    const {name, value} = target;
    
        setCurrentReview((currentReview) => {
           return {
            ...currentReview,
            [name]: value
           } 
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        let currentDate = new Date().getTime();

        const newReview = {
            ...currentReview,
            selectedStarsQuantity,
            date: currentDate,
        };
        addNewReview(newReview);
        history.push('/');
    };

    return (
    <AddReviewForm 
    currentReview={currentReview}
    handleInputChange={handleInputChange}
    selectedStarsQuantity={selectedStarsQuantity}
    setSelectedStarsQuantity={setSelectedStarsQuantity}
    handleSubmit={handleSubmit} />
   )

};

const mapDispatchToProps = {
    addNewReview
};

export default withRouter(connect(
    null,
    mapDispatchToProps
)(AddReviewFormContainer));


