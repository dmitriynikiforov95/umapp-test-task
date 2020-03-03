const getReviews = (newReviews) => {
    return {
        type: "REVIEWS_GETTED",
        payload:newReviews
    }
}

const changeCurrentReviewAuthor = (author) => {
    return {
        type: "CURRENT_REVIEW_AUTHOR_CHANGED",
        payload:author
    }
}

const changeCurrentReviewMessage = (message) => {
    return {
        type: "CURRENT_REVIEW_MESSAGE_CHANGED",
        payload:message
    }
}

const changeCurrentReviewSelectedStarsQuantity = (selectedStarsQuantity) => {
    return {
        type: "CURRENT_REVIEW_SELECTED_STARS_QUANTITY_CHANGED",
        payload:selectedStarsQuantity
    }
}

const addNewReview = (newReview) => {
    return {
        type: "NEW_REVIEW_ADDED",
        payload:newReview
    }
}

const clearAddReviewFormFields = () => {
    return {
        type: "SELECTED-PAGE_CHANGED",
    }
}

export {
    getReviews,
    
    changeCurrentReviewAuthor,
    changeCurrentReviewMessage,
    changeCurrentReviewSelectedStarsQuantity,

    addNewReview,
    clearAddReviewFormFields
}