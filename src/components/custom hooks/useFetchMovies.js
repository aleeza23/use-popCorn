import {useEffect, useState} from "react";
const KEY = "ed9b3922";

export const useFetchMovies = (query) => {
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");
  const [moviesData, setmoviesData] = useState([]);

  //data fetching
  useEffect(() => {
    seterror("");
    async function fetchMovieData() {
      try {
        setloading(true);
        seterror("");

        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
        );

        if (!response.ok)
          throw new Error("Something went wrong with fetching movies");

        const data = await response.json();
        if (data.Response === "False") throw new Error("Movie not found");

        setmoviesData(data.Search);
        seterror("");
        // console.log(data);
      } catch (err) {
        console.log(err);
        seterror(err.message);
      } finally {
        setloading(false);
        // seterror("");
      }
    }

    if (query.length === 0) {
      setmoviesData([]);
      seterror("");
      return;
    }
    // handleCloseMovieDetails();
    fetchMovieData();
  }, [query]);

  return [moviesData, loading, error]
};
