import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@nextui-org/react";
import { getThousandRev } from "../utils/getThousandRev";
import { detailsService } from "../services/detailsService";
import { Loarding } from "../components/Loarding";
import { WatchListIcon } from "../UI/WatchlistIcon";

export function MovieId() {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoarding] = useState(false);
  const [videos, setVideos] = useState({ results: [] });
  const params = useParams();

  useEffect(() => {
    async function fetchDetails() {
      setIsLoarding(true);
      const data = await detailsService(params);
      setMovie(data);

      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=7007ca9b2bc5adef6a986e615ee42fcd&language=en-US`,
      );
      setVideos(response.data);
      setIsLoarding(false);
    }
    fetchDetails();
  }, [params]);

  if (isLoading) return <Loarding />;

  const trailer =
    videos.results?.find((video) => video.official == true)?.key || "";
  return (
    <section className='mt-10'>
      <div className='flex justify-between mb-7'>
        <h2 className='font-bold text-4xl'>{movie.title}</h2>
        <Button startContent={<WatchListIcon />}>Add to Watchlist</Button>
      </div>
      <div className='flex gap-5'>
        <img
          className=' object-cover rounded-[20px] max-w-[190px] max-h-[290px] '
          src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
          alt='Image not found'
        />
        <div className='flex flex-col max-w-[413px] pt-5 pb-5'>
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
          <p className='text-[16px] font-medium leading-tight mt-5'>
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
        </div>
        <iframe
          className='rounded-[20px] ml-auto'
          width='480'
          height='280'
          src={`https://www.youtube.com/embed/${trailer}}`}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen></iframe>
      </div>
    </section>
  );
}
