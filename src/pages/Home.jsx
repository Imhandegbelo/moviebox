
import { useState, useEffect } from "react";
import MovieGrid from "../components/MovieGrid";
import axios from "axios";
import { HeroSection } from "../components/HeroSection";

export default function Home() {
  let title = "John Wick 3 : Parabellum";
  let imdb_rating = "86.0";
  let rotten_tomato_rating = "90";
  let description =
    "John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.";

    const [movies, setMovies] = useState([]);
    const [Loading, setLoading] =useState(true)
    useEffect(() => {
      const apiKey = "2c580b58c9354d8e7393cfd454223f73";
      const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&primary_release_year=2023&sort_by=vote_average.desc&vote_count.gte=1000`;
  
      axios
        .get(apiUrl)
        .then((res) => {
          setMovies(res.data.results);
          console.log(res.data.results)
          setLoading(false);
        })
        .catch((err) => {
          const errorMessage = err;
          setError(errorMessage);
          console.error("Error fetching movie data:", err);
        });
    }, []);

  return (
    <div className="">
      {/* <HeroSection movies={movies}/> */}
      <MovieGrid movies={movies} />

      <div className=""></div>
    </div>
  );
}
