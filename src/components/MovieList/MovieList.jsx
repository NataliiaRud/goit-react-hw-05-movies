import PropTypes from 'prop-types';
import { useLocation } from "react-router-dom";
import { Container, MoviesLink } from './MovieList.styled';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <Container>
      {movies.map(({ id, name, title }) => (
        <li key={id}>
          <MoviesLink state={{ from: location }} to={`/movies/${id}`}>
            {title || name}
          </MoviesLink>
        </li>
      ))}
    </Container>
  );
};

MovieList.propTypes = { movies: PropTypes.array };

export default MovieList;