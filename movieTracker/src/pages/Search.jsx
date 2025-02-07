import { useContext, useEffect, useState } from "react";
import { Context } from "../context/context";
import { Movies } from "../components/Movies";
import { getPageArray } from "../utils/getPageArray";
import { Loarding } from "../components/Loarding";
import PagesArray from "../components/PagesArray";
import { useQuery } from "@tanstack/react-query";
import { movieService } from "../services/movie.service";

export function Search() {
  const { search } = useContext(Context);
  const [page, setPage] = useState(1);
  const [pagesArray, setPagesArray] = useState([]);

  const { data: movies, isLoading } = useQuery({
    queryKey: ["movies", search, page],
    queryFn: () => movieService.getMovies(search, page),
  });
  useEffect(() => setPagesArray(getPageArray(movies?.total_pages)), [movies]);

  return (
    <div className=' bg-custom'>
      <p className='mb-6 text-sm'>
        Showing search results for:{" "}
        <span className='text-[#7d7d7d] text-lg'>{search}</span>
      </p>
      {isLoading ? (
        <Loarding />
      ) : movies.total_results != 0 ? (
        <>
          <Movies movies={movies} />
          <PagesArray pagesArray={pagesArray} page={page} setPage={setPage} />
        </>
      ) : (
        <h2 className='text-5xl font-semibold text-center'>No Such Films...</h2>
      )}
    </div>
  );
}
