import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieList from "../components/MovieList";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const homeUrl = require("../assets/img/home.png");
  const url = "/";
  const searchData = (event) => {
    console.log("data", event.target.value);
    setSearch(() => event.target.value);
  };

  const APIURL =
    "https://api.themoviedb.org/3/movie/upcoming?api_key=49b378c0fb9a8bd3ba61a705155cd305";
  const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=49b378c0fb9a8bd3ba61a705155cd305&query=";

  console.log(APIURL);
  const getAllMovies = () => {
    fetch(APIURL)
      .then((response) => {
        return response.json();
        console.log("res", response.data.results);
      })
      .then((data) => {
        setMovies(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getSearchMovies = () => {
    console.log("search", SEARCHAPI + search);
    fetch(SEARCHAPI + search)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMovies(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (search === "") {
      getAllMovies();
    } else {
      getSearchMovies();
    }
  }, [search]);
  return (
    <div>
      <div className="row container-fluid searchBar">
        <div className="col-md-6">
          <form className="">
            <i className="fa fa-search" aria-hidden="true"></i>
            <input
              type="search"
              className="form-control searchInput"
              placeholder="Search"
              value={search}
              onChange={searchData}
            />
          </form>
        </div>
        <div className="col-md-6">
          <Link to={url}>
            <img
              src={homeUrl}
              alt="Mimg"
              width={40}
              className="icon float-right"
            />
          </Link>
        </div>
      </div>
      <MovieList movies={movies} />
    </div>
  );
}
