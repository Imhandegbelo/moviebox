import { useState, useEffect } from "react";
import MovieGrid from "../components/MovieGrid";
import axios from "axios";
import { Loading } from "./Loading";
import { HeroSection } from "../components/HeroSection";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [genre, setGenre] = useState(null);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  const apiKey = "2c580b58c9354d8e7393cfd454223f73";
  useEffect(() => {
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&primary_release_year=2023&sort_by=vote_average.desc&vote_count.gte=1000`;
    axios
      .get(apiUrl)
      .then((res) => {
        setMovies(res.data.results);
        console.log(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        const errorMessage = err;
        // setError(errorMessage);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const topRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;
    axios
      .get(topRated)
      .then((res) => {
        setTopRatedMovies(res.data.results);
      })
      .catch((err) => console.error("Error fetching top rated movies", err));
  }, []);

  useEffect(() => {
    const genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`;
    axios
      .get(genreUrl)
      .then((res) => {
        const genreArray = {};
        res.data.genres.forEach((genre) => {
          genreArray[genre.id] = genre.name;
        });
        setGenre(genreArray);
      })
      .catch((err) => {
        console.log("An error occured", err);
      });
  }, []);

  return (
    <div className="">
      <HeroSection moviesArray={topRatedMovies} />
      {loading ? (
        <div>
          <Loading text={"fetching data"} />
        </div>
      ) : (
        <div>
          <MovieGrid genres={genre} movies={movies} />
        </div>
      )}
    </div>
  );
}
