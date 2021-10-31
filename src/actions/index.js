import data from "../components/data.js";

const movie = [];
data.home.forEach((mov, i) => {
  movie.push(
    fetch(
      `http://www.omdbapi.com/?apikey=2b9c4287&s=${data.home[i]}&type=movie`
    ).then((response) => response.json())
  );
});
export function getHome() {
  return function (dispatch) {
    Promise.all(movie)
      .then((value) => {
        dispatch({ type: "HOMES", payload: value });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
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
