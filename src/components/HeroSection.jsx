import DescriptionBox from "../components/DescriptionBox";
import hero1 from "../assets/images/Poster.png";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";

export function HeroSection({ movies }) {
  const [movieIndex, setMovieIndex] = useState(0);
  const hero_movies = movies.slice(0, 5);

  useEffect(() => {
    const timer_update = setTimeout(() => {
      //   setMovieIndex((prevIndex) => (prevIndex + 1) % movies.length);
      setMovieIndex((prevIndex) => prevIndex + 1);
    }, 5000);

    return () => clearTimeout(timer_update);
  }, [movieIndex, hero_movies]);

  return (
    <div
      className="px-4 sm:px-12 lg:px-24 bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${hero1})` }}
    >
      <Navbar />
      <div className="max-w-full h-[37.5rem]">
        <DescriptionBox
          title={hero_movies.title}
          description={hero_movies.overview}
          
          />
          {/* imdb_rating={imdb_rating}
          rotten_tomato_rating={rotten_tomato_rating} */}
        <img
          data-testid="movie-poster"
          src={`https://image.tmdb.org/t/p/original${movies[movieIndex].poster_path}`}
          className="h-37.5 object-cover object-center w-full"
          alt={movies[movieIndex].title}
        />
      </div>
    </div>
  );
}
