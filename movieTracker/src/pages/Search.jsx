import { useContext, useEffect, useState } from "react";
import { Context } from "../context/context";
import { Movies } from "../components/Movies";
import { getMovies } from "../services/moviesService";
import { getPageArray } from "../utils/getPageArray";
import { Loarding } from "../components/Loarding";
import PagesArray from "../components/PagesArray";

export function Search() {
  const { search, movies, setMovies } = useContext(Context);
  const [page, setPage] = useState(1);
  const [pagesArray, setPagesArray] = useState([]);
  const [isLoading, setIsLoarding] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      setIsLoarding(true);

      const data = await getMovies(search, page);
      setMovies(data);

      setPagesArray(getPageArray(data.total_pages));
      setIsLoarding(false);
    }
    fetchMovies();
  }, [search, page]);

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
