import React from "react";
import { Link } from "react-router-dom";
import { getThousandRev } from "../utils/getThousandRev";

export function MovieCard({ movie, params }) {
  return (
    <div className='flex flex-col max-w-[413px] pt-2 pb-2'>
      <ul className='flex gap-5 items-center'>
        {movie.genres &&
          movie.genres.map((genr) => (
            <li
              className='text-[18px] border border-black p-2 rounded-[20px]'
              key={genr.id}>
              {genr.name}
            </li>
          ))}
      </ul>
      <p className='text-[16px] font-medium leading-tight mt-3'>
        {movie.overview}
      </p>
      <div className='mt-auto flex gap-4 items-center'>
        <p className='leading-snug'>
          TMDB Rating <br />⭐ {movie?.vote_average?.toFixed(1)}
          <span className='text-[#636363]'>/10</span>
        </p>
        <p className='text-[#636363] text-[14px]'>
          {getThousandRev(movie.vote_count)}k Reviews
        </p>
      </div>
      <Link
        className='mt-2 text-yellow-600 cursor-pointer italic underline'
        to={`/search/${params.id}/comments`}>
        comments
      </Link>
    </div>
  );
}
