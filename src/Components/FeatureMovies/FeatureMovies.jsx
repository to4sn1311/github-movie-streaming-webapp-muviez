import PageIndicator from "./PageIndicator";
import Movie from "./Movie";
import { useEffect, useState } from "react";
const tokenAPI =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MjZkOTc0MTRkMzhiN2UyZTFhMThiYmEzNzI1MDIyOSIsIm5iZiI6MTcyMTc1NTMyOC4yNTM1MzEsInN1YiI6IjY2OWZlNDBhMzc3ZTRiZTUyZDUyNzVlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nt7oairpxeoseKFPtX1gn3a5YXo3_tjOxBENBqXXrKo";

const FeatureMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      Authorization: `Bearer ${tokenAPI}`,
    };
    fetch("https://api.themoviedb.org/3/tv/popular", options).then(
      async (res) => {
        const data = await res.json();
        setMovies(data.results);
      },
    );
  }, []);

  // console.log(movies);

  return (
    <div>
      <div className="relative text-white">
        <Movie data={movies[19]} />
        <PageIndicator />
      </div>
    </div>
  );
};
export default FeatureMovies;
