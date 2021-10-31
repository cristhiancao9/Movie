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
      homes: action.payload
        .map((mov) => mov.Search)
        .flat()
        .filter((e) => e.Year >= "2015"),
    };
  }

  return state;
}
export default rootReducer;
