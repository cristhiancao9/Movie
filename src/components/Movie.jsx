import React from "react";
import "./Movie.css";
import { useEffect } from "react";
import { useParams } from "react-router";
import { getDetail } from "../actions/index";
import { connect } from "react-redux";
function Movie(props) {
  const params = useParams();

  useEffect(() => {
    document.body.style.background = " #131314";
    props.getDetail(params.id);
  }, [props, params.id]);

  return (
    <React.Fragment>
      <div className="tamaño">
        <img
          className="img_fondo"
          src={props.m.Poster && props.m.Poster.replace("_SX300", "")}
          alt=""
        />
        {/*         <div
          style={{
            display: "flex",
            justifyContent: "center",
            background: ` url(
              "${props.m.Poster}")no-repeat center center /cover`,
            width: "100%",
            height: "45vh",
            backgroundSize: "cover",
          }}
        ></div> */}

        <div className="contenedor_info">
          <div className="info">
            {/*    <div
              style={{
                margin: "1rem",
                background: ` url(
                "${props.m.Poster}")no-repeat center center  `,
                width: "60vh",
                height: "40vh",
                borderRadius: "20px",
              }}
            ></div> */}
            <div className="contenedor_img">
              <img
                className="img_info"
                src={props.m.Poster && props.m.Poster.replace("_SX300", "")}
                alt=""
              />
            </div>
            <div className="text_info">
              <div className="title_info">
                <h1>{props.m.Title}</h1>
              </div>
              <div className="second_div_info">
                <div className="first_column_info">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-star"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="#ffffff"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                  </svg>
                  <h2>{props.m.imdbRating}</h2>
                </div>
                <div className="second_column_info">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-movie"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#ffffff"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <line x1="8" y1="4" x2="8" y2="20" />
                    <line x1="16" y1="4" x2="16" y2="20" />
                    <line x1="4" y1="8" x2="8" y2="8" />
                    <line x1="4" y1="16" x2="8" y2="16" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="16" y1="8" x2="20" y2="8" />
                    <line x1="16" y1="16" x2="20" y2="16" />
                  </svg>
                  <h2>{props.m.Genre}</h2>
                </div>

                <div className="three_column_info">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-clock"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#ffffff"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="12" cy="12" r="9" />
                    <polyline points="12 7 12 12 15 15" />
                  </svg>
                  <h2>{props.m.Runtime}</h2>
                </div>
              </div>
              <div className="three_div_info">
                <p>{props.m.Plot}</p>
              </div>
              <div className="four_div_info">
                <div className="first_column_four_div">
                  <h3>Director</h3>
                  <h3>Actors</h3>
                  <h3>Released</h3>
                </div>
                <div className="second_column_four_div">
                  <h4>{props.m.Director}</h4>
                  <h4>{props.m.Actors}</h4>
                  <h4>{props.m.Released}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    getDetail: (id) => dispatch(getDetail(id)),
  };
}
const mapStateToProps = (state) => ({
  m: state.m,
});
export default connect(mapStateToProps, mapDispatchToProps)(Movie);
