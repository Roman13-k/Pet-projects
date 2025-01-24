import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loarding } from "../components/Loarding";
import { MovieCard } from "../components/MovieCard";
import { MovieVideo } from "../components/MovieVideo";
import { MovieRec } from "../components/MovieRec";
import { getDetails, getRec, getVideos } from "../services/moviesService";
import { MovieBtn } from "../components/MovieBtn";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { homeService } from "../services/homepage.service";

export function MovieId() {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoarding] = useState(false);
  const [videos, setVideos] = useState({ results: [] });
  const [rec, setRec] = useState({ results: [] });
  const params = useParams();

  const queryClient = useQueryClient();
  const postPrevWatched = useMutation({
    mutationFn: () => homeService.postPrevWatched(movie.id, movie),
    onSuccess: () => queryClient.invalidateQueries(["prevWatched", movie.id]),
  });

  useEffect(() => {
    async function fetchDetails() {
      setIsLoarding(true);
      const data = await getDetails(params);
      setMovie(data);

      const video = await getVideos(params);
      setVideos(video);

      const recommendations = await getRec(params);
      setRec(recommendations);

      postPrevWatched.mutate();
      setIsLoarding(false);
    }
    fetchDetails();
  }, [params]);

  if (isLoading) return <Loarding />;

  return (
    <section className='mt-5'>
      <div className='flex justify-between mb-4'>
        <h2 className='font-bold text-3xl'>{movie?.title}</h2>
        <MovieBtn movie={movie} />
      </div>
      <div className='flex gap-5'>
        <img
          className=' object-cover rounded-[20px] max-w-[190px] max-h-[290px] '
          src={`https://image.tmdb.org/t/p/w200/${movie?.poster_path}`}
          alt='Image not found'
        />
        <MovieCard movie={movie} params={params} />
        <MovieVideo videos={videos} />
      </div>
      <MovieRec params={params} rec={rec} />
    </section>
  );
}
