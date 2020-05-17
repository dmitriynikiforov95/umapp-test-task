import { formatDate } from "../helpers";

const initialState = {
  reviews: [],
  isReviewsLoading: true,
};

const addReviewToLocalStorage = (state, newReview) => {

  let reviews = localStorage.getItem('reviews') ? JSON.parse(localStorage.getItem('reviews')) : [];
  reviews.unshift(newReview);
  localStorage.setItem('reviews', JSON.stringify(reviews))

  return {
    ...state,
    reviews,
  };

}
// отформатируем таймстамп в формат DD.MM.YYYY  
const transformReviews = (state, reviews) => {
  const newReviews = reviews.map((item) => {
    return {
      ...item,
      date:formatDate(item.date)
    }
  });

  return {
    ...state,
    isReviewsLoading: false,
    reviews: newReviews
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "REVIEWS_GETTED":
      return transformReviews(state, action.payload)
    case "NEW_REVIEW_ADDED":
      return addReviewToLocalStorage(state, action.payload);
    default:
      return state;
  }
};

export default reducer;
