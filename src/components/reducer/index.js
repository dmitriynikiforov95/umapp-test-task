const initialState = {
  reviews: [],
  currentReview: {
    author: "",
    message: "",
    selectedStarsQuantity: null
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "REVIEWS_GETTED":
      return {
        ...state,
        reviews: action.payload
      };
      // refactoring
    case "CURRENT_REVIEW_AUTHOR_CHANGED":
      return {
        ...state,
        currentReview: {
          ...state.currentReview,
          author: action.payload
        }
      };
    case "CURRENT_REVIEW_MESSAGE_CHANGED":
      return {
        ...state,
        currentReview: {
          ...state.currentReview,
          message: action.payload
        }
      };
    case "CURRENT_REVIEW_SELECTED_STARS_QUANTITY_CHANGED":
      return {
        ...state,
        currentReview: {
          ...state.currentReview,
          selectedStarsQuantity: action.payload
        }
      };
    case "NEW_REVIEW_ADDED":
      return {
        ...state,
        reviews: [action.payload, ...state.reviews]
      };
      case "SELECTED-PAGE_CHANGED":
      return {
        ...state,
        currentReview: {
          author: "",
          message: "",
          selectedStarsQuantity: null
        }
      };
    default:
      return state;
  }
};

export default reducer;
