import React from "react";
import { WatchListIcon } from "../UI/WatchlistIcon";
import { Button } from "@nextui-org/react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { watchListService } from "../services/watchlist.service";

export function MovieBtn({ movie }) {
  const queryClient = useQueryClient();
  const { data: isAdded } = useQuery({
    queryKey: ["watchlist", movie.id],
    queryFn: () => watchListService.getMovieById(movie.id),
    initialData: false,
  });

  const addToWatchList = useMutation({
    mutationFn: () => watchListService.postToWatchList(movie.id, movie),
    onSuccess: () => {
      queryClient.invalidateQueries(["watchlist", movie.id]);
    },
  });
  const deleteFromWatchList = useMutation({
    mutationFn: () => watchListService.deleteFromWatchList(movie.id),
    onSuccess: () => {
      queryClient.invalidateQueries(["watchlist", movie.id]);
    },
  });

  const handleTogleWhatchlist = async () => {
    if (isAdded) deleteFromWatchList.mutate();
    else addToWatchList.mutate();
  };

  return (
    <Button
      onPress={() => handleTogleWhatchlist}
      className='cursor-pointer'
      startContent={<WatchListIcon fill={isAdded ? "#32C75B" : "none"} />}>
      {isAdded ? "Added" : "Add"} to Watchlist
    </Button>
  );
}
