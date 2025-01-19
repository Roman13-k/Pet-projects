import React from "react";
import { useNavigate } from "react-router-dom";

export function Movies({ movies }) {
  const navigate = useNavigate();

  return (
    <section className='flex flex-wrap bg-custom'>
      {movies.results.map((movie) => (
        <div
          onClick={() => navigate(`/search/${movie.id}`)}
          key={movie.id}
          className='relative w-[160px] h-[240px] m-3 transition-transform duration-300 hover:scale-110'>
          <img
            className=' object-cover rounded-[20px] '
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt='Image not found'
          />
          <p className='absolute top-[10px] left-[8px] text-white font-semibold'>
            ⭐ {movie?.vote_average.toFixed(1)}
          </p>
        </div>
      ))}
    </section>
  );
}
