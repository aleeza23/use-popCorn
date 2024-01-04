import React from "react";

const WatchedMovies = ({watchedMovies}) => {
  return (
    <>
    {watchedMovies?.map((currElm ) => {
   return <>  <div className='movies-list my-2 text-dark' key={currElm?.imdbID}>
        <img className='poster' src={currElm?.Poster} alt='' />
        <strong className="ms-2">{currElm?.Title}</strong>

        <div className=' watched-details w-100  '>
        
            <p>
              <span>⭐️</span>
              <span>{currElm?.imdbRating} rating</span>
            </p>
            <p>
              <span>🌟</span>
              <span>{currElm?.userRating}</span>
            </p>
            <p>
              <span>⏳</span>
              <span>{currElm?.Runtime} </span>
            </p>

            <button className='bg-transparent text-danger border-0'>X</button>
          </div>
          
      </div>
      <hr />
     </>
    }) }
     
    </>
  );
};

export default WatchedMovies;
