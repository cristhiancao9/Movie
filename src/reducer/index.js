const initialState = {
  moviesLoaded: [],
  homes: [],
  kid: [],
  comics: [],
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
  if (action.type === "KIDS") {
    return {
      ...state,
      kid: action.payload
        .map((mov) => mov.Search)
        .flat()
        .filter((e) => e.Year >= "2000"),
    };
  }
  if (action.type === "COMICS") {
    return {
      ...state,
      comics: action.payload
        .map((mov) => mov.Search)
        .flat()
        .filter((e) => e.Year >= "2012"),
    };
  }
  return state;
}
export default rootReducer;
