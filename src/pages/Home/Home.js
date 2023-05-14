import { useState, useEffect } from 'react';
import { fetchTrendings } from 'services/api';
import MovieList from 'components/MovieList/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchTrendings();
      setMovies(response.results);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Trending today</h1>
      <div>
        <MovieList movies={movies} />
      </div>
    </div>
  );
};
export default Home;
