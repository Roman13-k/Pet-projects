import React, { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Loarding } from "../components/Loarding";
import { useObserver } from "../hooks/useObserver";
import { useInfiniteQuery } from "@tanstack/react-query";
import { movieService } from "../services/movie.service";

export function Recommendations() {
  const params = useParams();
  const navigate = useNavigate();
  const lastElement = useRef(null);

  const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["rec", params],
      queryFn: ({ pageParam = 1 }) => movieService.getRec(params, pageParam),
      getNextPageParam: (lastPage) =>
        lastPage.page <= lastPage.total_pages ? lastPage.page + 1 : false,
    });
  const allRec = data?.pages.flatMap((page) => page.results) || [];

  useObserver(lastElement, fetchNextPage, isFetchingNextPage, hasNextPage);

  return (
    <>
      <h2 className='font-bold text-3xl mt-5'>Recommendations:</h2>
      <ul className='flex flex-wrap mb-20'>
        {allRec.map((allR) => {
          return (
            <li
              onClick={() => navigate(`/search/${allR.id}`)}
              key={allR.id}
              className='relative w-[140px] h-[200px] m-3 transition-transform duration-300 hover:scale-110'>
              <img
                className=' object-cover rounded-[20px] '
                src={`https://image.tmdb.org/t/p/w200/${allR.poster_path}`}
                alt='Image not found'
              />
              <p className='absolute top-[10px] left-[8px] text-white font-semibold'>
                ⭐ {allR?.vote_average.toFixed(1)}
              </p>
            </li>
          );
        })}
      </ul>
      {isLoading && <Loarding />}
      <div ref={lastElement} className='h-5 w-full mt-20' />
    </>
  );
}
