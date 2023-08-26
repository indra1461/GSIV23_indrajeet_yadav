import React from "react";
import { Link } from "react-router-dom";
const imgUrl = "https://image.tmdb.org/t/p/w500";

export default function MoviesList(props) {
  console.log("movies", props.movies);
  return (
    <>
      <div className="row container mt-4">
        {props.movies?.map((item, index) => (
          <div className="col-md-5-cols .col-xs-5-cols pt-4" key={index}>
            <div className="card">
              <Link to={`/movie/getMovie/${item.id}`}>
                <img
                  className="card-img-top"
                  src={`${imgUrl}${item.poster_path}`}
                  alt="Cardcap"
                />
              </Link>
              <div className="card-body">
                <Link to={`/movie/getMovie/${item.id}`}>
                  <span className="card-title">{item.title}</span>
                </Link>
                <span className="rating float-right">
                  {item.vote_average}/10
                </span>
                <p className="card-text">{`${item.overview.substring(
                  0,
                  60
                )}...`}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
