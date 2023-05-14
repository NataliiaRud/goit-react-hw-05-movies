import { useState, useEffect } from "react";
import { fetchMovieReviews } from "services/api";
import Loader from "components/Loader/Loader";
import { useParams } from "react-router-dom";
import { ReviewsListItem, ReviewsList } from "./Reviews.styled";

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isDownloaded, setIsDownloaded] = useState(false);
    const { movieId } = useParams();

   useEffect(() => {
    setIsLoading(true);
    const fetchData = async movieId => {
      try {
        const response = await fetchMovieReviews(movieId);
        setReviews(response.results);
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
            {isLoading && <Loader />}
            {error && <div>{error}</div>}
            {isDownloaded && reviews.length === 0 ? (
        <p>We don't have any reviews for this movie</p>):
            (<ReviewsList>
                {reviews.map(({id, author, content})=>
                <ReviewsListItem key={id}>
            <h3>{author}</h3>
                        <p>{content}</p>
                    </ReviewsListItem>)}
            </ReviewsList>)}
        </div>
    )
}
export default Reviews;