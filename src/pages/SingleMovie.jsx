import Loading from "./Loading"
export function SingleMovie({id}) {
  return (
    <>
      <div className="flex">
        {/* <MovieSidebar id={id} /> */}
        {!movie ? (
          <div className="w-full">
            <Loading text={"Loading"}/>
          </div>
        ) : (
          <div className="mx-4 sm:mx-14 my-9">
            <img
              src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
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
                  {releaseDateUTC}
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
