import {MovieCard} from "./MovieCard";
import right_arrow from "../assets/images/ArrowRight.svg";

export default function MovieGrid({ movies, genres }) {
  return (
    <div className="my-[70px] px-4 md:px-24">
      <div className="flex justify-between items-center mb-[44px]">
        <h2 className="text-black text-2xl sm:text-4xl font-bold">
          Featured Movie
        </h2>
        <a
          href="#"
          className="text-rose-700 text-lg font-normal leading-normal items-center hidden sm:flex gap-2 hover:underline"
        >
          View All
          <span>
            <img src={right_arrow} alt="arrow" />
          </span>
        </a>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 sm:gap-x-20 gap-y-10">
        {movies.slice(0, 10).map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            releaseDate={new Date(`${movie.release_date}`).getTime()}
            posterUrl={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            voteAverage={movie.vote_average}
            genres={genres}
            movies={movies}
          />
        ))}
      </div>
    </div>
  );
}

// export default MovieGrid;