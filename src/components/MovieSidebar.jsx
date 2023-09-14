import { NavLink } from "react-router-dom";

export default function MovieSidebar({id}) {
  return (
    <>
      <div className="absolute left-0 h-screen">
        <div className="flex flex-cols gap-6">
          <div>
            <img src={tv} alt="tv-logo" className="w-8 h-8 md:hidden" />
            <img src={logo} alt="moviebox" className="hidden md:block" />
          </div>
          <div className="hidden sm:flex flex-cols">
            <NavLink to={"/movie"} title="Home" className="">
              Home
            </NavLink>
            <NavLink to={`/movie/${id}`} title="Movies" className="">
              Movies
            </NavLink>
            <NavLink to={"/tv-shows"} title="TV Shows" className="">
              TV Shows
            </NavLink>
            <NavLink to={"/upcoming"} title="Upcoming" className="">
              Upcoming
            </NavLink>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}
