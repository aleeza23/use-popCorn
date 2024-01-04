import React, {useEffect, useState} from "react";
import StarRating from "../StarRating";
import { useKey } from "../custom hooks/useKey";

const MovieDetails = ({
  selectedID,
  watchedMovies,
  onCloseDetails,
  onAddToWatch,
}) => {
  const [movieDetail, setmovieDetail] = useState({});
  const [userRating, setuserRating] = useState("");

  const KEY = "ed9b3922";

useKey('Escape' , onCloseDetails)

  //check if movie is rated

  const isRated = watchedMovies
    ?.map((currElm) => currElm?.imdbID)
    .includes(selectedID);

  //data fetching
  useEffect(() => {
    async function fetchSingleMovie() {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedID}`
      );
      const data = await response.json();
      setmovieDetail({...data, userRating});
      // console.log(movieDetail);
    }

    fetchSingleMovie();
  }, [selectedID, userRating]);

  //effect to change movie title
  useEffect(() => {
    if (!movieDetail?.Title) return;
    document.title = `Movie | ${movieDetail?.Title}`;

    //clean up funtion
    return () => {
      document.title = "usePopcorn";
    };
  }, [movieDetail?.Title]);


  return (
    <>
      <div key={movieDetail?.imdbID}>
        <div className='movie-Details position-relative rounded  shadow  '>
          <button
            className='bg-white px-2 py-1 shadow position-absolute border-0 rounded-pill'
            onClick={onCloseDetails}
          >
            ⬅
          </button>
          <img className='details-poster  ' src={movieDetail?.Poster} alt='' />
          <div className=' desc ms-3'>
            <h2>{movieDetail?.Title}</h2>
            <small className='text-center '>
              ⭐ {movieDetail?.imdbRating} IMDb rating
            </small>
            <small className='text-center'>
              {movieDetail?.Released} &bull; {movieDetail?.Runtime}
            </small>
            <small className='text-center'>{movieDetail?.Genre}</small>
          </div>
        </div>
        <div className='px-5 mt-5 '>
          {/* rating box */}

          <div className='rating-box mb-3 shadow p-4 rounded'>
            {!isRated ? (
              <>
                {" "}
                <StarRating
                  ratingLength={10}
                  size={30}
                  onSetRating={setuserRating}
                  key={movieDetail?.imdbID}
                />
                {userRating > 0 && (
                  <button
                    className='bg-white px-2 w-100 py-2 border-0 rounded-pill fw-bold'
                    onClick={() => onAddToWatch(movieDetail)}
                  >
                    Add to watched
                  </button>
                )}
              </>
            ) : (
              <p className='fw-bold fs-5'>
                You already rated this movie {userRating} ⭐
              </p>
            )}
          </div>
          <i className='text-dark'>
            {movieDetail?.Plot}
            <br />
            <br />

            <p>Starring {movieDetail?.Actors}</p>
            <small>Directed by {movieDetail?.Director}</small>
          </i>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
