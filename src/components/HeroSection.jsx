import DescriptionBox from "../components/DescriptionBox";
import hero1 from "../assets/images/Poster.png";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function HeroSection({ moviesArray }) {
  const [movieIndex, setMovieIndex] = useState(0);
  const hero_movies = moviesArray.slice(0, 5);

  useEffect(() => {
    const timer_update = setTimeout(() => {
      setMovieIndex((prevIndex) => (prevIndex + 1) % hero_movies.length);
      // setMovieIndex((prevIndex) => prevIndex + 1);
    }, 5000);

    return () => clearTimeout(timer_update);
  }, [movieIndex, hero_movies]);

  return (
    // <div
    //   className="h-37.5"
    //   style={{ backgroundImage: `url(${hero1})` }}
    // >
    //   <Navbar />
    //   <div className="max-w-full h-[37.5rem]">
    // <DescriptionBox
    //   title={hero_movies.title}
    //   description={hero_movies.overview}
    //   />
    //       {/* imdb_rating={imdb_rating}
    //       rotten_tomato_rating={rotten_tomato_rating} */}
    //     <img
    //       data-testid="movie-poster"
    //       src={`https://image.tmdb.org/t/p/original${hero_movies[movieIndex]?.poster_path}`}
    //       className="h-37.5 object-cover object-center w-full"
    //       alt={hero_movies[movieIndex]?.title}
    //     />
    //   </div>
    // </div>

    /* <IMDBRating>
                  {movies[movieIndex]?.vote_average}
                </IMDBRating> */
    <header className="h-[600px] relative">
      <div className="absolute top-0 left-0 right-0 bottom-0 transition-opacity duration-500 ease-in-out">
        {hero_movies.length > 0 && (
          <div className="relative">
            <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-[600px] bg-black bg-opacity-70"></div>
            <div className="absolute border-white h-full flex items-end sm:items-center p-6 lg:pl-24">
              {/* <div className="text-white min-w-[220px] w-[90%] sm:w-[300px] md:w-[400px] flex flex-col gap-4">
                
                <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold md:leading-[56px]">
                  {hero_movies[movieIndex]?.title}
                </h1>
                

                <p className="text-white text-xs md:text-sm font-medium leading-[18px]">
                  {hero_movies[movieIndex]?.overview}
                </p>
                <Link
                  to={`/movie/${hero_movies[movieIndex]?.id}`}
                  className="hover:cursor-pointer select-none px-4 py-1.5 bg-rose-700 rounded-md justify-start items-center gap-2 flex w-max hover:bg-rose-500 hover:scale-105 transition-all"
                >
                  <div className="w-5 h-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9.5547 7.16795C9.24784 6.96338 8.8533 6.94431 8.52814 7.11833C8.20298 7.29235 8 7.63121 8 8V12C8 12.3688 8.20298 12.7077 8.52814 12.8817C8.8533 13.0557 9.24784 13.0366 9.5547 12.8321L12.5547 10.8321C12.8329 10.6466 13 10.3344 13 10C13 9.66565 12.8329 9.35342 12.5547 9.16795L9.5547 7.16795Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="text-white text-sm font-bold uppercase leading-normal">
                    Watch trailer
                  </div>
                </Link>
              </div> */}
              <DescriptionBox
                title={hero_movies[movieIndex]?.title}
                description={hero_movies[movieIndex]?.overview}
                link={`/movie/${hero_movies[movieIndex]?.id}`}
              />
            </div>
            <img
              data-testid="movie-poster"
              src={`https://image.tmdb.org/t/p/original${hero_movies[movieIndex].backdrop_path}`}
              className="h-[600px] w-full object-cover object-center"
              alt={hero_movies[movieIndex].title}
            />
          </div>
        )}
        <div className="absolute top-0 right-10 hidden sm:flex h-full ">
          <div className="flex flex-col gap-2 justify-center items-end w-10">
            {hero_movies.slice(0, 6).map((_, index) => (
              <div
                className="cursor-pointer text-white flex items-center gap-2 justify-start"
                key={index}
                onClick={() => handleIndicatorClick(index)}
              >
                <div
                  className={` bg-white rounded-md transition-all ${
                    index === movieIndex ? "w-5 h-[3px] border" : ""
                  }`}
                />
                <p
                  className={`items-center hover:text-white hover:text-base transition-all duration-300 ${
                    index === movieIndex
                      ? "text-base font-bold leading-[14px]"
                      : "text-gray-400 text-xs font-bold leading-[14px]"
                  }`}
                >
                  {index + 1}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
