import { Loading } from "./Loading";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ConvertToUTC from "../utils/ConvertToUTC";
import axios from "axios";

export function SingleMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [genre, setGenre] = useState(null);

  const apiKey = "2c580b58c9354d8e7393cfd454223f73";
  useEffect(() => {
    const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
    axios
      .get(apiUrl)
      .then((response) => {
        console.log(response.data);
        setMovie(response.data);
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
        response.data.genres.forEach((genre) => {
          genreArray[genre.id] = genre.name;
        });
        setGenre(genreArray);
      })
      .catch((err) => {
        console.log("An error occured", err);
      });
  }, []);

  // const releaseDateUTC = ConvertToUTC(movie.release_date)
  return (
    <>
      <div className="flex">
        {/* <MovieSidebar id={id} /> */}
        {!movie ? (
          <div className="w-full">
            <Loading text={"Loading"} />
          </div>
        ) : (
          <div className="mx-4 sm:mx-14 my-9">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
              alt={movie?.title}
              className="rounded-3xl h-[450px] w-full object-cover object-center"
            />
            <div className="m-2 sm:m-4 flex flex-col gap-6">
              <div className="lg:flex gap-2 text-[20px] text-neutral-700  font-bold">
                <h2 data-testid="movie-title" className="">
                  {movie?.title}
                </h2>
                <span className=" text-[23px] hidden lg:inline-block">•</span>
                <p data-testid="movie-release-date" className="">
                  {" "}
                  {/* {releaseDateUTC} */}
                </p>
                <span className=" text-[23px] hidden lg:inline-block">•</span>
                <p data-testid="movie-runtime" className="">
                  {`${movie?.runtime}mins`}
                </p>
              </div>
              <p
                data-testid="movie-overview"
                className="text-zinc-800 text-xl font-normal"
              >
                Overview: {movie?.overview}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
