const getReviews = (newReviews) => {
    return {
        type: "REVIEWS_GETTED",
        payload:newReviews
    }
}

export {
    getReviews
}