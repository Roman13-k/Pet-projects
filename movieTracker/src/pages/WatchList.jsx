import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { watchListService } from "../services/watchlist.service";
import { Loarding } from "../components/Loarding.jsx";
import { SortWatchList } from "../components/SortWatchList.jsx";
import { useEffect, useState } from "react";

export function WatchList() {
  const navigate = useNavigate();
  const { data: watchlist, isLoading } = useQuery({
    queryKey: ["watchList"],
    queryFn: () => watchListService.getWatchlist(),
  });
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    if (Array.isArray(watchlist)) {
      setFilteredList(watchlist);
    }
  }, [watchlist]);

  if (isLoading) return <Loarding />;

  return (
    <div className='mb-10 mt-10 mr-16 ml-16'>
      <h2 className='font-semibold text-3xl text-center m-5'>WatchList</h2>
      <SortWatchList
        filteredList={filteredList}
        setFilteredList={setFilteredList}
      />
      <section className='flex flex-wrap bg-custom'>
        {filteredList.map((movie) => (
          <div
            onClick={() => navigate(`/search/${movie.id}`)}
            key={movie.id}
            className='relative w-[160px] h-[240px] m-3 transition-transform duration-300 hover:scale-110'>
            <img
              className='object-cover rounded-[20px]'
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
