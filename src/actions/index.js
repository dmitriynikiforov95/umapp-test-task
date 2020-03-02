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

export {
    getReviews,
    changeCurrentReviewAuthor,
    changeCurrentReviewMessage
}