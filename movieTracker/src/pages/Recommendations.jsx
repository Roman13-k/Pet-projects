import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getRec } from "../services/moviesService";
import { Loarding } from "../components/Loarding";
import { useObserver } from "../hooks/useObserver";

export function Recommendations() {
  const [recLoading, setRecLoading] = useState(false);
  const [allRec, setAllRec] = useState({ results: [] });
  const [page, setPage] = useState(1);
  const params = useParams();
  const navigate = useNavigate();
  const lastElement = useRef(null);

  useEffect(() => {
    async function fetchAllRec() {
      setRecLoading(true);
      const data = await getRec(params, page);
      setAllRec((prevState) => {
        if (page == 1) {
          return data;
        }
        return {
          ...data,
          results: [...prevState.results, ...data.results],
        };
      });
      setRecLoading(false);
    }
    fetchAllRec();
  }, [page]);

  useObserver(
    lastElement,
    () => setPage(page + 1),
    recLoading,
    page < allRec.total_pages,
  );

  return (
    <>
      <h2 className='font-bold text-3xl mt-5'>Recommendations:</h2>
      <ul className='flex flex-wrap mb-20'>
        {allRec.results?.map((allR) => {
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
      {recLoading && <Loarding />}
      <div ref={lastElement} className='h-5 w-full mt-20' />
    </>
  );
}
