import { Link, useNavigate } from "react-router-dom";

export function MovieRec({ params, rec }) {
  const navigate = useNavigate();

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
      <div className='flex flex-nowrap bg-custom overflow-x-auto'>
        {rec.results.map((r) => (
          <div
            onClick={() => navigate(`/search/${r.id}`)}
            key={r.id}
            className='relative min-w-[140px] min-h-[200px] m-3 transition-transform duration-300 hover:scale-110'>
            <img
              className=' object-cover rounded-[20px] '
              src={`https://image.tmdb.org/t/p/w200/${r.poster_path}`}
              alt='Image not found'
            />
            <p className='absolute top-[10px] left-[8px] text-white font-semibold'>
              ⭐ {r?.vote_average.toFixed(1)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
