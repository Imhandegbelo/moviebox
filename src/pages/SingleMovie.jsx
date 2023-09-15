import { Loading } from "./Loading";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import star from "../assets/images/Star.png";
import ticket from "../assets/images/Two Tickets.png";
import list from "../assets/images/List.png";
import Button from "../components/SingleMovieButtons";
import MovieSidebar from "../components/MovieSidebar";

export function SingleMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [genre, setGenre] = useState(null);

  const apiKey = "2c580b58c9354d8e7393cfd454223f73";
  useEffect(() => {
    const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
    axios
      .get(apiUrl)
      .then((res) => {
        console.log(res.data);
        setMovie(res.data);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      });
  }, [id]);

  useEffect(() => {
    const genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`;
    axios
      .get(genreUrl)
      .then((res) => {
        const genreArray = [];
        res.data.genres.forEach((genre) => {
          genreArray[genre.id] = genre.name;
        });
        setGenre(genreArray);
        console.log("Genre is: ", genreArray);
      })
      .catch((err) => {
        console.log("An error occured", err);
      });
  }, []);

  const releaseDate = new Date(movie?.release_date);
  const movieGenre = movie?.genre;
  console.log(movieGenre);
  return (
    <>
      <div className="flex font-['Poppins']">
        <div className="w-full basis-1/12 md:basis-2/12">
          <MovieSidebar id={id} />
        </div>
        {!movie ? (
          <div className="basis-11/12 md:basis-10/12">
            <Loading text={"Loading"} />
          </div>
        ) : (
          <div className="p-2 basis-11/12 md:basis-10/12 sm:mx-14 my-9">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
              alt={movie?.title}
              className="rounded-3xl h-[450px] w-full object-cover object-center"
            />
            <div className="m-2 sm:m-4 flex flex-col gap-6">
              <div className="flex justify-between text-xl sm:text-2xl text-stone-700  font-bold">
                <div className="flex flex-wrap lg:no-wrap gap-2">
                  <h2 data-testid="movie-title" className="">
                    {movie?.title}
                  </h2>
                  <span className="text-xl sm:text-2xl hidden lg:inline-block">
                    .
                  </span>
                  <p data-testid="movie-release-date" className="">
                    {" "}
                    {releaseDate.toUTCString().slice(5, 16)}
                  </p>
                  <span className="text-xl sm:text-2xl hidden lg:inline-block">
                    .
                  </span>
                  <p data-testid="movie-runtime" className="">
                    {`${movie?.runtime}mins`}
                  </p>
                </div>
                <div className="flex justify-between gap-2 item-center">
                  <img src={star} alt="star" className="w-6 h-6 md:w-7 h-7" />{" "}
                  <p className="text-">
                    {movie?.vote_average.toFixed(1)}{" "}
                    <span className="">| {movie?.vote_count}</span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex md:flex-row gap-4 md:gap-2">
                <div className="flex flex-col gap-4 w-full md:w-2/3">
                  <p
                    data-testid="movie-overview"
                    className="text-zinc-800 text-xl font-normal"
                  >
                    {movie?.overview}
                  </p>
                  <p className="text-xl">Director: </p>
                  <p className="text-xl">Writers: </p>
                </div>
                <div className="flex flex-col w-full md:w-1/3 gap-4">
                  <Button title="See Showtimes" icon={ticket} type="primary" />
                  <Button
                    title="More watch options"
                    icon={list}
                    type="secondary"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
