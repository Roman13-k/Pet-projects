import { Link } from "react-router-dom";
import { MoviesNoWrap } from "./MoviesNoWrap";

export function MovieRec({ params, rec }) {
  return (
    <section className='mt-4'>
      <div className='flex justify-between'>
        <h3 className='text-xl font-semibold'>Recommendations</h3>
        <Link
          className='mt-2 text-yellow-600 cursor-pointer italic underline'
          to={`/search/${params.id}/recommendations`}>
          see all
        </Link>
      </div>
      <MoviesNoWrap movies={rec} />
    </section>
  );
}
