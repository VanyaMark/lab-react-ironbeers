import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import Beers from "./pages/Beers";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";
import HomePage from "./pages/HomePage";
import SingleBeer from "./pages/SingleBeer";
import SearchBeer from "./pages/SearchBeer";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/beers/:id" element={<SingleBeer />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/search-beer" element={<SearchBeer />} />
      </Routes>
    </div>
  );
}

export default App;
