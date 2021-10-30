const initialState = {
  moviesLoaded: [],
  homes: [],
  kids: [],
};
function rootReducer(state = initialState, action) {
  if (action.type === "GET_MOVIES") {
    return {
      ...state,
      moviesLoaded: action.payload.Search,
    };
  }
  if (action.type === "HOMES") {
    return {
      ...state,
      homes: action.payload.map((mov) => mov.Search).flat(),
    };
  }

  return state;
}
export default rootReducer;
