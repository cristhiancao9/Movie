import React from "react";
import { useState } from "react";
import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";
import { useEffect } from "react";
import "./Trailers.css";
function Trailers({ hola }) {
  /*  const [video, setVideo] = useState(`${hola}`); */

  const [videoURL, setVideoURL] = useState("");
  useEffect(() => {
    movieTrailer(`${hola}`).then((res) => {
      setVideoURL(res);
    });
  }, [hola]);

  return (
    <div className="contenedor-trailer">
      <p className="dimension-titulo">Trailer</p>
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url={videoURL}
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}

export default Trailers;
