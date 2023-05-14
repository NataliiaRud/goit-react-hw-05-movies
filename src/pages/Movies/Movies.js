import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieList from 'components/MovieList/MovieList';
import { fetchMovieSearch } from 'services/api';
import Loader from 'components/Loader/Loader';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      try {
        const res = await fetchMovieSearch(query);
        setMovies(res.results);
      } catch (error) {
        setError(error.name);
      } finally {
        setIsLoading(false);
        setIsDownloaded(true);
      }
    };

    fetchData(query);
  }, [query]);

  const onSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.input.value });
    form.reset();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" autoComplete="off" name="input" autoFocus />
        <button type="submit">Search</button>
      </form>
      <div>
        {isLoading && <Loader />}
        {error && { error }}
        {movies.length === 0 && isDownloaded && (
          <div>Nothing here. Try again!</div>
        )}
        <MovieList movies={movies} />
      </div>
    </div>
  );
};
export default Movies;
