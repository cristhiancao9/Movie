const initialState = {
  moviesLoaded: [],
};
function rootReducer(state = initialState, action) {
  if (action.type === "GET_MOVIES") {
    return {
      ...state,
      moviesLoaded: action.payload.Search,
    };
  }
  return state;
}
export default rootReducer;
