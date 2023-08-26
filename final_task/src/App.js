import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movie from "./pages/Movie";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App1">
      <div className="main-wrapper">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/getMovie/:id" element={<Movie />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
