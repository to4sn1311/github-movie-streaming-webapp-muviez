import PageIndicator from "./PageIndicator";
import Movie from "./Movie";
import { useEffect, useState } from "react";
const tokenAPI =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MjZkOTc0MTRkMzhiN2UyZTFhMThiYmEzNzI1MDIyOSIsIm5iZiI6MTcyMTc3MjE2MS43NzI3MDgsInN1YiI6IjY2OWZlNDBhMzc3ZTRiZTUyZDUyNzVlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MMu5Rh47MtyFoV6B6LG1-uNtThidCyEhXXQEtYdnCjs";

const FeatureMovies = () => {
  const [movies, setMovies] = useState([]);
  const [activeMovieId, setActiveMovieId] = useState();

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${tokenAPI}`,
      },
    };
    fetch("https://api.themoviedb.org/3/tv/popular", options).then(
      async (res) => {
        const data = await res.json();
        const popularMovies = data.results.slice(0, 4);
        setMovies(popularMovies);
        setActiveMovieId(popularMovies[0].id);
      },
    );
  }, []);

  // console.log(movies);

  return (
    <div>
      <div className="relative text-white transition-transform duration-500 ease-in-out">
        {movies
          .filter((movie) => activeMovieId === movie.id)
          .map((movie) => (
            <Movie key={movie.id} data={movie} />
          ))}

        <PageIndicator
          movies={movies}
          activeMovieId={activeMovieId}
          setActiveMovieId={setActiveMovieId}
        />
      </div>
    </div>
  );
};
export default FeatureMovies;
