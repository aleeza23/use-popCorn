import React, {useEffect} from "react";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Main from "./components/Main";
import Box from "./components/Box";
import MoviesList from "./components/right box/MoviesList";
import WatchedMovies from "./components/left box/WatchedLists";
import SearchQuery from "./components/SearchQuery";
import ResultsFound from "./components/ResultsFound";
import {useState} from "react";
import MovieDetails from "./components/left box/MovieDetails";
import WatchedSummary from "./components/left box/WatchedSummary";
import StarRating from "./components/StarRating";
import { useFetchMovies } from "./components/custom hooks/useFetchMovies";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const App = () => {

  const [watchedMovies, setwatchedMovies] = useState([]);
  const [selectedID, setselectedID] = useState(null);
 
  const [query, setquery] = useState("");


const [moviesData,  error] =useFetchMovies(query)

  //handle close movie details
  const handleCloseMovieDetails = () => {
    setselectedID(null);
  };

  //add to watch list
  const handleAddWatch = (watchedMovie) => {
    setwatchedMovies((prev) => [...prev, watchedMovie]);

    handleCloseMovieDetails();
  };
  return (
    <>
      <Layout>
        <Header>
          <SearchQuery query={query} setquery={setquery} />
          <ResultsFound results={moviesData?.length} />
        </Header>

        <Main>
          <Box>
            <MoviesList
              error={error}
              moviesData={moviesData}
              onAddMovie={setselectedID}
            />
          </Box>

          <Box>
            {selectedID ? (
              <MovieDetails
                selectedID={selectedID}
                onCloseDetails={handleCloseMovieDetails}
                onAddToWatch={handleAddWatch}
                watchedMovies={watchedMovies}
              />
            ) : (
              <>
                {!selectedID && (
                  <WatchedSummary watchedMovie={watchedMovies} />
                )}
                {watchedMovies.length !== 0 && (
                  <WatchedMovies watchedMovies={watchedMovies} />
                )}
              </>
            )}
          </Box>
        </Main>
      </Layout>
    </>
  );
};

export default App;
