import PropTypes from 'prop-types';
import {  Outlet } from "react-router-dom";
import { AddList, AddLink, Poster, AddInfo } from './MovieCard.styled';

const MovieCard = ({ movie }) => {
    
  const { poster_path, original_title, overview, genres } = movie;
  const year = parseInt(movie.release_date).toString();
    
  const rating = Math.floor(movie.vote_average * 10);
  return (
        
    <div>
      <div>
        <Poster
          alt={original_title}
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          width="200"
        />
      </div>
      <div>
        <h2>{original_title} ({year})</h2>
                
        <p>User Score: {rating}%</p>
            
        <h3>Overwiev</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres &&
          genres.length > 0 &&
          genres.map(genre => genre.name).join(', ')}</p>
      </div>
      <AddInfo>
        Additional information
      </AddInfo>
      <AddList>
        <li>
          <AddLink to="cast">Cast</AddLink>
        </li>
        <li>
          <AddLink to="reviews">Reviews</AddLink>
        </li>
      </AddList>
      <Outlet />
    </div>
  )
    
    
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({ name: PropTypes.string.isRequired })
    ),
  }).isRequired,
};





export default MovieCard;