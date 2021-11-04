import React from "react";
import "./Movie.css";
function Movie(params) {
  return (
    <React.Fragment>
      <div className="tamaño">
        <img
          className="img_fondo"
          src="https://itsmybehaviour.com/wp-content/uploads/2021/10/dune_denis_villeneuve_2.jpg"
          alt=""
        />
        <div className="contenedor_info">
          <div className="info">
            <div>
              <img
                className="img_info"
                src="https://itsmybehaviour.com/wp-content/uploads/2021/10/dune_denis_villeneuve_2.jpg"
                alt=""
              />
            </div>
            <div className="text_info">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
                voluptatibus asperiores hic nulla. Doloribus quo harum placeat
                eum beatae esse corrupti officia illo iste officiis, laboriosam
                sed voluptatem ut. Error!
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Movie;
