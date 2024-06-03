import React, { useEffect, useState } from 'react';


const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getMovies();
      setMovies(data);
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Available Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
