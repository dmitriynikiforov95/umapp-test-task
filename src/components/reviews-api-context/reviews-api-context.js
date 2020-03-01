import React from 'react';

const {Provider: ReviewsApiProvider,
Consumer: ReviewsApiConsumer} = React.createContext();

export {
    ReviewsApiProvider,
    ReviewsApiConsumer
}