import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import { SingleMovie } from "./pages/SingleMovie";
import { ErrorPage } from "./pages/ErrorPage";

function App() {
  return (
    <div className="w-full">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/movies/:id" element={<SingleMovie />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

// { "routes": [{ "src": "/[^.]+", "dest": "/", "status": 200 }] }
export default App;
