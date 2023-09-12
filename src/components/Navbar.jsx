import logo from "../assets/images/logo.png";
import tv from "../assets/images/tv.png";
import menu from "../assets/images/menu.svg";
import { SearchBar } from "./SearchBar";

export default function Navbar() {
  return (
    <nav className="flex justify-between text-white py-6 w-full h-20 items-center">
      <img src={tv} alt="tv-logo" className="sm:hidden" />
      <img src={logo} alt="moviebox" className="hidden sm:block" />

      <SearchBar />
      <div className="flex gap-6">
        <button className="text-base font-bold items-center hidden sm:block">Sign in</button>
        <div className="flex w-8 h-8 bg-rose-700 rounded-full items-center">
          <img src={menu} alt="menu" className="h-6 w-6 mx-auto" />
        </div>
      </div>
    </nav>
  );
}