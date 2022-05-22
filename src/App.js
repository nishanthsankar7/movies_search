import { useEffect, useState } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard.jsx";

const API_KEY = 'http://www.omdbapi.com/?i=tt3896198&apikey=7813671a';

const App = () => {

    const [movies, setMovies] = useState([]);
    const [movieName, setmovieName] = useState("");

    const searchMovies = async (title) => {
        const response = await fetch(`${API_KEY}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies();
    }, []);

    return (
      <div className="app">
        <h1>MovieRockerzz</h1>
        <div className="search">
          <input
            placeholder="Search for Movies"
            value={movieName}
            onChange={(e) => setmovieName(e.target.value)}
          ></input>
          <img
            src={SearchIcon}
            alt="search"
            onClick={() => searchMovies(movieName)}
          />
        </div>
        {movies.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h3>no movies found</h3>
          </div>
        )}
      </div>
    );
}

export default App;