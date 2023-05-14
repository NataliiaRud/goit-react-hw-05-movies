import PropTypes from 'prop-types';
import { Link, useLocation } from "react-router-dom";

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(({ id, name, title }) => (
        <li key={id}>
          <Link state={{ from: location }} to={`/movies/${id}`}>
            {title || name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = { movies: PropTypes.array };

export default MovieList;