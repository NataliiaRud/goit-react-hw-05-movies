import { useState, useEffect } from "react";
import { fetchMovieCast } from "services/api";
import Loader from "components/Loader/Loader";
import { useParams } from "react-router-dom";

const Cast = () => {
    const [cast, setCast] = useState([])
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { movieId } = useParams();

   useEffect(() => {
    setIsLoading(true);
    const fetchData = async movieId => {
      try {
        const res = await fetchMovieCast(movieId);
        setCast(res.cast);
      } catch (error) {
        setError(error.name);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData(movieId);
  }, [movieId]);

    return (
        <div>
            {isLoading && <Loader />}
            {error && <div>{error}</div>}
            <ul>
                {cast.map(({id, name, character, profile_path})=>
                <li key={id}><img alt={name} src={`https://image.tmdb.org/t/p/original/${profile_path}`} width="100" />
            <h3>{name}</h3>
                        <p>Character: {character}</p>
                    </li>)}
            </ul>
        </div>
    )
}
export default Cast;