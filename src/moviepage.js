import React, { useState, useEffect } from 'react';
import './movie.css';
import IMG from './img';
import './card.css';
import Navbar from './navbar';

function Moviepage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState(''); 

  const API_KEY = 'b75a6a9e8e8adb9669416063eb4ad37c'; //store in DS when done 
  const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  
  const handleSearch = (e) => {
    setSearchTerm(e.target.value); 
  };
  
 
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div className="loader"></div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <Navbar value={searchTerm} oc={handleSearch} navbrand="Movie DB" />

      <div className="movie-page">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <div key={movie.id} className="movie-card grow">
              <IMG
                s={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                c="rounded-4 card-img"
              />
              <p className="card-text">{movie.title}</p>
            </div>
          ))
        ) : (
          <p>No movies found.</p>
        )}
      </div>
    </>
  );
}

export default Moviepage;
