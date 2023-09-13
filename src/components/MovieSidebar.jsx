import { NavLink } from "react-router-dom";

export default function MovieSidebar() {
  return (
    <>
      <div className="flex">
        <div className="flex flex-cols gap-6">
          <div>
            <img src={tv} alt="tv-logo" className="w-8 h-8 md:hidden" />
            <img src={logo} alt="moviebox" className="hidden md:block" />
          </div>
          <div>
            <NavLink></NavLink>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}
