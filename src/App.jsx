import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Footer from "./components/Footer";
import { SingleMovie } from "./pages/SingleMovie";
import { ErrorPage } from "./pages/ErrorPage";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/movie" exact element={<Home />} />
        <Route path="/movie/movie" element={<SingleMovie />} />
        <Route path="/movie/movie/:id" element={<SingleMovie />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
