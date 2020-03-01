import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { ReviewsApiProvider } from "./components/reviews-api-context";
import ReviewsApiService from "./services/reviews-api-service";
import App from "./components/app/app";
import ErrorBoundry from "./components/error-boundry"
import store from "./store";

const reviewsApiService = new ReviewsApiService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <ReviewsApiProvider value={reviewsApiService}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ReviewsApiProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById("root"))