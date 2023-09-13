import { Link } from "react-router-dom";
import imdb from "../assets/images/imdb.png";
import rot_tomato from "../assets/images/rotten_tomato.png";

export function MovieCard({ id, title, releaseDate, posterUrl }) {
  return (
    <Link to={`/movie/${id}`} className="w-full max-w-[250px]">
      <div
        data-testid="movie-card"
        className="flex flex-col justify-center gap-3"
      >
        <img data-testid="movie-poster" src={posterUrl} alt={title} className="w-full h-auto" />
        <p
          data-testid="movie-release-date"
          className="text-xs font-bold text-gray-400"
        >
          {releaseDate}
        </p>
        <h2
          data-testid="movie-title"
          className="text-lg font-bold text-gray-900"
        >
          {title}
        </h2>
        <div className="inline-flex justify-between">
          <div className="flex gap-2.5 items-center">
            <img src={imdb} alt="imdb" className="h-4" />
            <small className="font-normal text-xs text-gray-900">
              86.0 / 100
            </small>
          </div>
          <div className="flex gap-2.5 items-center">
            <img src={rot_tomato} alt="rotten_tomato" className="h-4" />
            <small className="font-normal text-xs text-gray-900">97%</small>
          </div>
        </div>
      </div>
    </Link>
  );
}
