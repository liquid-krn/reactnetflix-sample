import React from "react";
// import Card from "./Card";
import './home.css'

function Moviepage(){
    return<div>
        <div className="home">
            <p>fjiohoi</p>
        </div>
    </div>
}
export default Moviepage


// import React, { useState, useEffect } from 'react';

// const MovieApp = () => {
//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const API_KEY = 'YOUR_API_KEY'; // Replace with your TMDb API key
//   const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const response = await fetch(API_URL);
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setMovies(data.results);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMovies();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   return (
//     <div>
//       <h1>Popular Movies</h1>
//       <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
//         {movies.map(movie => (
//           <div key={movie.id} style={{ width: '200px' }}>
//             <img
//               src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//               alt={movie.title}
//               style={{ width: '100%', borderRadius: '10px' }}
//             />
//             <h3>{movie.title}</h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MovieApp;
