const getReviews = (newReviews) => {
    return {
        type: "REVIEWS_GETTED",
        payload:newReviews
    }
}

const addNewReview = (newReview) => {
    return {
        type: "NEW_REVIEW_ADDED",
        payload:newReview
    }
}


export {
    getReviews,
    addNewReview,
}