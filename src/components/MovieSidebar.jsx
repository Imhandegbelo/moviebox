import { NavLink } from "react-router-dom";
import tv from "../assets/images/tv.png";
// import logo from "../assets/images/Logo.png";
import home from "../assets/images/Home.png";
import tvshows from "../assets/images/TV Show.png";
import calender from "../assets/images/Calendar.png";
import projector from "../assets/images/projector.png";
import logout from "../assets/images/Logout.png";

export default function MovieSidebar({ id }) {
  return (
    <>
      <div className="fixed hidden md:block md:w-2/12 rounded-r-[2.5rem] py-4 left-0 border-r-2 border-rose-500 h-screen">
        <div className="flex flex-col gap-6">
          <div className="ml-4">
            <div className="inline-flex gap-4 items-center">
              <img src={tv} alt="tv-logo" className="w-8 h-8" />
              <h2 className="text-xl text-slate-900 font-bold hidden lg:flex">
                Moviebox
              </h2>
            </div>
          </div>
          <div className="hidden sm:flex flex-col text-neutral-600">
            <NavLink
              to={"/"}
              title="Home"
              className="inline-flex items-center md:gap-3 lg:gap-4 pl-6 lg:pl-6 py-3 hover:bg-rose-100 hover:border-r-4 hover:border-rose-500"
            >
              <img src={home} alt="home" className="" />{" "}
              <p className="hidden lg:block">Home</p>
            </NavLink>
            <NavLink
              to={`#`}
              title="Movies"
              className="inline-flex items-center py-3 md:gap-3 lg:gap-4 pl-6 bg-rose-100 border-r-4 border-rose-500"
            >
              <img src={projector} alt="projector" />
              <p className="hidden lg:block">Movies</p>
            </NavLink>
            <NavLink
              to={"#"}
              title="TV Shows"
              className="inline-flex items-center py-3 md:gap-3 lg:gap-4 pl-1 md:pl-6 hover:bg-rose-100 hover:border-r-4 hover:border-rose-500"
            >
              <img src={tvshows} alt="tvshows" />{" "}
              <p className="hidden lg:block">TV Shows</p>
            </NavLink>
            <NavLink
              to={"#"}
              title="Upcoming"
              className="inline-flex items-center py-3 md:gap-3 lg:gap-4 pl-6 hover:bg-rose-100 hover:border-r-4 hover:border-rose-500"
            >
              <img src={calender} alt="calender" />{" "}
              <p className="hidden lg:block">Upcoming</p>
            </NavLink>
          </div>
          <div className="hidden lg:flex flex-col gap-4 border border-rose-500 bg-rose-50/50 md:w-4/5 py-6 px-4 mx-auto rounded-3xl">
            <h3 className="text-zinc-800/80 text-base leading-none font-semibold">
              Play movie quizes and earn free tickets
            </h3>
            <p className="text-stone-500 text-xs leading-tight font-medium">
              50k people are playing now
            </p>
            <button className="flex justify-center text-xs text-rose-700 font-medium bg-rose-100 rounded-[30px] px-4 py-1">
              Start playing
            </button>
          </div>
          <NavLink
            to={"/"}
            className="inline-flex items-center pl-6 py-4 hover:bg-rose-100 hover:border-r-4 hover:border-rose-500"
          >
            <img src={logout} alt="logout" />{" "}
            <p className="hidden lg:block">Logout</p>
          </NavLink>
        </div>
      </div>
    </>
  );
}
