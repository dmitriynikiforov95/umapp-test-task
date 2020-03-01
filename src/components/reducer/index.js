const initialState = {
    reviews: []
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "REVIEWS_GETTED":
        return {
          ...state,
          reviews: action.payload
        };
      default:
        return state;
    }
  };

export default reducer;
  
 