import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getReviews } from "../../actions";
import Spinner from "../../components/spinner";
import ReviewList from "../../components/review-list";
import withReviewsApiService from "../../components/hoc/with-reviews-api-service";


const ReviewListContainer = ({ reviews, isReviewsLoading, reviewsApiService, getReviews }) => {

    useEffect(() => {
        reviewsApiService.getRewiews().then(res => getReviews(res));
    }, [])

    const content = reviews.length !== 0 ? <ReviewList reviews={reviews} /> : <p>Напишите первый отзыв!</p>;
    if (isReviewsLoading) return <Spinner />;

    return (
        <React.Fragment>
            {content}
        </React.Fragment>
    );
}

const mapStateToProps = ({ reviews, isReviewsLoading }) => {
    return {
        reviews,
        isReviewsLoading,
    };
};

const mapDispatchToProps = {
    getReviews
};

export default withReviewsApiService(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(ReviewListContainer)
);
