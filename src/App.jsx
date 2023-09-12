import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
