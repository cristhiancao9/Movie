export function getMovie(titulo) {
  return function (dispatch) {
    return fetch(
      `http://www.omdbapi.com/?apikey=2b9c4287&s=${titulo}&type=movie`
    )
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "GET_MOVIES", payload: json });
      });
  };
}
