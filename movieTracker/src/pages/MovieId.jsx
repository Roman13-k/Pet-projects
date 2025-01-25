import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loarding } from "../components/Loarding";
import { MovieCard } from "../components/MovieCard";
import { MovieVideo } from "../components/MovieVideo";
import { MovieRec } from "../components/MovieRec";
import { movieService } from "../services/movie.service";
import { MovieBtn } from "../components/MovieBtn";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { homeService } from "../services/homepage.service";

export function MovieId() {
  const params = useParams();

  const { data: movie, isLoading: isMovieLoading } = useQuery({
    queryKey: ["movie", params],
    queryFn: () => movieService.getDetails(params),
  });
  const { data: videos, isLoading: isVideosLoading } = useQuery({
    queryKey: ["videos", params],
    queryFn: () => movieService.getVideos(params),
  });
  const { data: rec, isLoading: isRecLoading } = useQuery({
    queryKey: ["recommendations", params],
    queryFn: () => movieService.getRec(params),
  });

  const queryClient = useQueryClient();
  const postPrevWatched = useMutation({
    mutationFn: () => homeService.postPrevWatched(movie.id, movie),
    onSuccess: () => queryClient.invalidateQueries(["prevWatched", movie.id]),
  });
  useEffect(() => {
    if (movie) {
      postPrevWatched.mutate();
    }
  }, [movie]);

  const isLoading = isMovieLoading || isVideosLoading || isRecLoading;
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
