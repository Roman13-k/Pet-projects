import axios from "axios";
import { useEffect, useState } from "react";
import { Loarding } from "../components/Loarding.jsx";
import { useNavigate } from "react-router-dom";
import { SortWatchList } from "../components/SortWatchList.jsx";

export function WatchList() {
  const [watchlist, setWatchlist] = useState([]);
  const [isListLoarding, setIsListLoasrding] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchWatchlist() {
      setIsListLoasrding(true);
      try {
        const responce = await axios.get("http://localhost:3000/watchlist");
        setWatchlist(responce.data);
      } catch (error) {
        console.log(error);
      }
      setIsListLoasrding(false);
    }
    fetchWatchlist();
  }, []);

  if (isListLoarding) return <Loarding />;

  return (
    <div className='mb-10 mt-10 mr-16 ml-16'>
      <h2 className='font-semibold text-3xl text-center m-5'>WatchList</h2>
      <SortWatchList watchlist={watchlist} />
      <section className='flex flex-wrap bg-custom'>
        {watchlist.map((movie) => (
          <div
            onClick={() => navigate(`/search/${movie.id}`)}
            key={movie.id}
            className='relative w-[160px] h-[240px] m-3 transition-transform duration-300 hover:scale-110'>
            <img
              className=' object-cover rounded-[20px] '
              src={`https://image.tmdb.org/t/p/w200/${movie.movie.poster_path}`}
              alt='Image not found'
            />
            <p className='absolute top-[10px] left-[8px] text-white font-semibold'>
              ⭐ {movie.movie.vote_average.toFixed(1)}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
