import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Movie() {
  const { id } = useParams();
  console.log("aaa", id);
  const [movie, setMovie] = useState({});
  const imgUrl = "https://image.tmdb.org/t/p/w500";
  const APIURL = `https://api.themoviedb.org/3/movie/${id}?api_key=49b378c0fb9a8bd3ba61a705155cd305`;

  console.log("apisingle", APIURL);
  const homeUrl = require("../assets/img/home.png");

  const url = "/";
  useEffect(() => {
    fetch(APIURL)
      .then((response) => {
        return response.json();
        console.log("res", response.data.results);
      })
      .then((data) => {
        console.log("data", data);
        setMovie(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <>
      <div className="row container-fluid searchBar">
        <div className="col-md-6">
          <h4>Movie Details</h4>
        </div>
        <div className="col-md-6 ">
          <Link to={url}>
            <img
              src={homeUrl}
              alt="MyImg"
              width={40}
              className="icon float-right"
            />
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-3 movie-img">
            <img
              className="card-img-top float-right"
              src={`${imgUrl}${movie.poster_path}`}
              alt="CardImg"
            />
          </div>
          <div className="col-md-9 movie-desc">
            <div className="movie-title">
              {movie.title}
              <span className="rating">{movie.vote_average}/10</span>
            </div>
            <div className="movie-subtitle">
              Release Date: <span className="1">{movie.release_date}</span> |
              Popularity: <span className="1"> {movie.popularity}</span>{" "}
            </div>
            <div className="overview">{movie.overview}</div>
          </div>
        </div>
      </div>
    </>
  );
}
