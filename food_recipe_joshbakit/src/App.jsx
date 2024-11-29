import "./App.css";
import Navbar from "./components/Navbar";
import Favorite from "./pages/favorites/Favorite";
import Details from "./pages/details/Details";
import Home from "./pages/home/Home";
import NotFound from "./components/NotFound";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorite />} />
          <Route path="/recipe-item/:id" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
