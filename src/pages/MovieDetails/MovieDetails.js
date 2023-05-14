import { useState, useEffect, useRef } from 'react';
import { fetchMovieId } from 'services/api';
import { useParams, useLocation, Link } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import MovieCard from 'components/MovieCard/MovieCard';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isDownloaded, setIsDownloaded] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async movieId => {
      try {
        const response = await fetchMovieId(movieId);

        setMovie(response);
      } catch (error) {
        setError(error.name);
      } finally {
        setIsLoading(false);
        setIsDownloaded(true);
      }
    };

    fetchData(movieId);
  }, [movieId]);
  return (
    <div>
      <Link to={backLinkRef.current} state={{ from: 'MovieDetails' }}>
        Go back
      </Link>

      <div>
        {isLoading && <Loader />}
        {error && { error }}

        {isDownloaded && <MovieCard movie={movie} />}
      </div>
    </div>
  );
};
export default MovieDetails;
