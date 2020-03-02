const initialState = {
    reviews: [],
    currentReview: {
      author:"",
      message:"",
      date:"",
      selectedStarsQuantity:null,
    }
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "REVIEWS_GETTED":
        return {
          ...state,
          reviews: action.payload
        };
        case "CURRENT_REVIEW_AUTHOR_CHANGED":
        return {
          ...state,
          currentReview: {
            ...state.currentReview,
            author:action.payload
          }
        };
        case "CURRENT_REVIEW_MESSAGE_CHANGED":
        return {
          ...state,
          currentReview: {
            ...state.currentReview,
            message:action.payload
          }
        }
      default:
        return state;
    }
  };

export default reducer;
  
 