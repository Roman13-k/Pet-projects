import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function MovieId() {
  const [movie, setMovie] = useState({});
  const params = useParams();

  useEffect(() => {
    async function fetchData() {
      const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${params.id}`,
        params: { language: "en-US" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDA3Y2E5YjJiYzVhZGVmNmE5ODZlNjE1ZWU0MmZjZCIsIm5iZiI6MTczNjcxMDY4NC42ODksInN1YiI6IjY3ODQxYTFjYmQ3OTNjMDM1NDRlYWJhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ga9Mu5A7S1lyKUZ4yumDAcic3bibAwAl8mJeg64kDXU",
        },
      };
      const responce = await axios.request(options);
      setMovie(responce.data);
    }
    fetchData();
  });

  return (
    <>
      <div className='relative max-w-[160px] max-h-[240px] m-2 transition-transform duration-300 hover:scale-110'>
        <img
          className=' object-cover rounded-[20px] '
          src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
          alt='Image not found'
        />
        <p className='absolute top-[10px] left-[8px] text-white font-semibold'>
          ⭐ {movie?.vote_average?.toFixed(1)}
        </p>
      </div>
      <h2>{movie.title}</h2>
    </>
  );
}
