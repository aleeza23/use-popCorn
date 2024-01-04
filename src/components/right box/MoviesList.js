import React from "react";

const MoviesList = ({moviesData,onAddMovie,error}) => {
  

  return (
    <>
    
      { error ? <p className="text-dark text-center fw-bold fs-4 mt-5">⛔️{error}</p> : moviesData?.map((currElm) => {
        return (          
          <div className='movies-list text-dark my-3 ' key={currElm?.imdbID} onClick={() => onAddMovie(currElm.imdbID)}>
            <img className="poster" src={currElm?.Poster} alt='' />
            <div className='ms-2'>
              <strong>{currElm?.Title}</strong>
              <p>📅{currElm?.Year}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MoviesList;
