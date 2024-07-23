import { faMagnifyingGlass, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div>
      <header className="flex h-14 items-center justify-between bg-slate-950 px-8 text-white">
        <div className="flex items-center gap-4">
          <img className="w-16 sm:w-28" src="./netflix.png" alt="" />
          <a href="">Movies</a>
          <a href="">TV Shows</a>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="cursor-pointer"
          />
        </div>
      </header>
      <div className="relative text-white">
        <img
          className="aspect-video brightness-50"
          src="https://image.tmdb.org/t/p/original/xg27NrXi7VXCGUr7MG75UqLl6Vg.jpg"
          alt=""
        />
        <div className="absolute bottom-[10%] left-8 w-1/2 sm:w-1/3">
          <p className="mb-2 font-bold sm:text-[2vw]">Inside out 2</p>
          <div>
            <p className="mb-1 inline-block border border-gray-400 p-1 text-gray-400">
              PG-13
            </p>
            <p className="text=[1.2vw]">2024-06-11</p>
          </div>
          <div className="text=[1.2vw] mt-4 hidden sm:block">
            <p className="mb-2 font-bold">Overview</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              fuga, vitae at reiciendis, ducimus rerum quo, rem optio sapiente
              dolore autem tenetur impedit esse iusto explicabo magni animi quos
              ad!
            </p>
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
        <div className="absolute bottom-[10%] right-8">
          <ul className="flex gap-1">
            <li className="h-1 w-6 cursor-pointer bg-slate-100"></li>
            <li className="h-1 w-6 cursor-pointer bg-slate-600"></li>
            <li className="h-1 w-6 cursor-pointer bg-slate-600"></li>
            <li className="h-1 w-6 cursor-pointer bg-slate-600"></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
