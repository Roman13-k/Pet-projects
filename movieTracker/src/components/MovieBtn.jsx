import React, { useEffect, useState } from "react";
import { WatchListIcon } from "../UI/WatchlistIcon";
import { Button } from "@nextui-org/react";
import axios from "axios";

export function MovieBtn({ movie }) {
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    async function fetchWatchlistStatus() {
      try {
        const responce = await axios.get(
          `http://localhost:3000/watchlist/${movie.id}`,
        );
        setIsAdded(responce.status == 200);
      } catch {
        setIsAdded(false);
      }
    }
    fetchWatchlistStatus();
  }, []);

  const handleTogleWhatchlist = async () => {
    setIsAdded((prevState) => !prevState);

    if (isAdded) {
      await axios.delete(`http://localhost:3000/watchlist/${movie.id}`);
    } else {
      await axios.post("http://localhost:3000/watchlist", {
        id: String(movie.id),
        movie,
      });
    }
  };

  return (
    <Button
      onPress={() => handleTogleWhatchlist()}
      className='cursor-pointer'
      startContent={<WatchListIcon fill={isAdded ? "#32C75B" : "none"} />}>
      {isAdded ? "Added" : "Add"} to Watchlist
    </Button>
  );
}
