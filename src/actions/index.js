import data from "../components/data.js";

const movie = [];
data.home.forEach((mov, i) => {
  movie.push(
    fetch(
      `https://www.omdbapi.com/?apikey=2b9c4287&s=${data.home[i]}&type=movie`
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
const nKids = [];
data.kids.forEach((mov, i) => {
  nKids.push(
    fetch(
      `https://www.omdbapi.com/?apikey=2b9c4287&s=${data.kids[i]}&type=movie`
    ).then((response) => response.json())
  );
});
export function getKids() {
  return function (dispatch) {
    Promise.all(nKids)
      .then((value1) => {
        dispatch({ type: "KIDS", payload: value1 });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
const nComics = [];
data.comics.forEach((mov, i) => {
  nComics.push(
    fetch(
      `https://www.omdbapi.com/?apikey=2b9c4287&s=${data.comics[i]}&type=movie`
    ).then((response) => response.json())
  );
});
export function getComics() {
  return function (dispatch) {
    Promise.all(nComics)
      .then((value2) => {
        dispatch({ type: "COMICS", payload: value2 });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
export function getMovie(titulo) {
  return function (dispatch) {
    return fetch(
      `https://www.omdbapi.com/?apikey=2b9c4287&s=${titulo}&type=movie`
    )
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "GET_MOVIES", payload: json });
      });
  };
}
export function getDetail(id) {
  return function (dispatch) {
    return fetch(`https://www.omdbapi.com/?apikey=2b9c4287&i=${id}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "D", payload: json });
      });
  };
}
