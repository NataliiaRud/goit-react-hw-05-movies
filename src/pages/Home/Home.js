import { useState, useEffect } from 'react';
import { fetchTrendings } from 'services/api';
import MovieList from 'components/MovieList/MovieList';
import { Container, Title } from './Home.styled';

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
    <Container>
      <div>
        <Title>Trending today</Title>
      </div>
      <div>
        <MovieList movies={movies} />
      </div>
    </Container>
  );
};
export default Home;
