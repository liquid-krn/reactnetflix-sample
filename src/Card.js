import React from "react";
import IMG from "./img"; 
import './card.css';

function Card(props) {
    return (
        <div>
            <div className="card" >
                <img src={props.image || IMG} className="card-img-top" alt={props.altText || "Card image"} />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                    <a href={props.link} className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
}

export default Card;


// import React, { useState, useEffect } from 'react';

// const App = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   return (
//     <div>
//       <h1>Fetched Posts</h1>
//       <ul>
//         {data.map(post => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;

