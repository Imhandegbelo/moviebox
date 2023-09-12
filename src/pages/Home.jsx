import DescriptionBox from "../components/DescriptionBox";
import hero1 from "../assets/images/Poster.png";
import right_arrow from "../assets/images/ArrowRight.svg"
import Navbar from "../components/Navbar";
import { MovieCard } from "../components/MovieCard";

export default function Home() {
  // const data = [
  //   {
  //     title: "John Wick 3 : Parabellum",
  //     imdb_rating: "86.0",
  //     rotten_tomato_rating: "90",
  //     description:
  //       "John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.",
  //   }
  // ];

  let title = "John Wick 3 : Parabellum";
  let imdb_rating = "86.0";
  let rotten_tomato_rating = "90";
  let description =
    "John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.";

  return (
    <div className="">
      <div
        className="px-24 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${hero1})` }}
      >
        <Navbar />
        <div className="max-w-full h-[37.5rem]">
          <DescriptionBox
            title={title}
            imdb_rating={imdb_rating}
            rotten_tomato_rating={rotten_tomato_rating}
            description={description}
            className="w-1/2"
          />
        </div>
      </div>

      

      <div className=""></div>
    </div>
  );
}
