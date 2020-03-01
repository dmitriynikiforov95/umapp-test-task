import React from 'react';
import { ReviewsApiConsumer } from '../reviews-api-context/reviews-api-context';

const withReviewsApiService = Wrapped => {
    return props => {
        return (
            <ReviewsApiConsumer>
                {
                    reviewsApiService => {
                        return <Wrapped {...props} reviewsApiService={reviewsApiService} />;
                    }
                }
            </ReviewsApiConsumer>
        )
    }
}

export default withReviewsApiService;