import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const Movie = (props) => {
  if (!props.data) return null;
  const {
    data: { name, overview, first_air_date, backdrop_path },
  } = props;

  return (
    <>
      <img
        className="aspect-video brightness-50"
        src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
        alt=""
      />
      <div className="absolute bottom-[10%] left-8 w-1/2 sm:w-1/3">
        <p className="mb-2 font-bold sm:text-[2vw]">{name}</p>
        <div>
          <p className="text-[1.2vw]">{first_air_date}</p>
        </div>
        <div className="mt-4 hidden text-[1.2vw] sm:block">
          <p className="mb-2 font-bold">Overview</p>
          <p>{overview}</p>
        </div>
        <div className="mt-4">
          <button className="mr-2 rounded bg-white px-4 py-2 text-[10px] text-black lg:text-lg">
            <FontAwesomeIcon icon={faPlay} /> Trailer
          </button>
          <button className="rounded bg-slate-300/35 px-4 py-2 text-[10px] text-white/70 lg:text-lg">
            View Details
          </button>
        </div>
      </div>
    </>
  );
};

Movie.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    first_air_date: PropTypes.string.isRequired,
    backdrop_path: PropTypes.string.isRequired,
  }),
};

export default Movie;
