import React from "react";

const WatchedSummary = ({watchedMovie}) => {
  // console.log(watchedMovie, 'watched summry');
  const avrage = (array) => {
   return array?.reduce((acc, curr) => acc + curr , 0)
  } 

 const userRating = avrage(watchedMovie?.map((movie) => movie?.userRating))
 const runTime = avrage(watchedMovie?.map((movie) => +movie?.Runtime))
 const imdbRating = avrage(watchedMovie?.map((movie) => +movie?.imdbRating))
//  console.log(runTime, imdbRating);

  return <>
     
    <div className="summary-box bg-danger px-4 py-4 ">
      <h2 >Movies you watched</h2>
      <div className="summary-details mt-4">
        <p>
          <span>#️⃣</span>
          <span className="ms-2">{watchedMovie?.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{imdbRating?.toFixed(2) }</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{userRating?.toFixed(2) }</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{runTime} min</span>
        </p>
      </div>
    </div>
 
  </>;
};

export default WatchedSummary;
