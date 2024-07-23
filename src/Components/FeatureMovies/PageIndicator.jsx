import PropTypes from "prop-types";
import { useEffect } from "react";

const PageIndicator = ({ movies, activeMovieId, setActiveMovieId }) => {
  useEffect(() => {
    if (movies.length > 0) {
      const intervalId = setInterval(() => {
        setActiveMovieId((prevId) => {
          const currentIndex = movies.findIndex((movie) => movie.id === prevId);
          const nextIndex = (currentIndex + 1) % movies.length;
          return movies[nextIndex].id;
        });
      }, 5000);

      return () => clearInterval(intervalId);
    }
  }, [movies, setActiveMovieId]);
  return (
    <div>
      <div className="absolute bottom-[10%] right-8">
        <ul className="flex gap-1">
          {movies.map((movie) => (
            <li
              key={movie.id}
              className={`h-1 w-6 cursor-pointer ${activeMovieId === movie.id ? "bg-slate-100" : "bg-slate-600"} `}
              onClick={() => {
                setActiveMovieId(movie.id);
              }}
            ></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

PageIndicator.propTypes = {
  movies: PropTypes.array,
  activeMovieId: PropTypes.number,
  setActiveMovieId: PropTypes.func,
};

export default PageIndicator;
