import { HomeMovies } from "../components/HomeMovies";
import { Loarding } from "../components/Loarding";
import { homeService } from "../services/homepage.service";
import { useQuery } from "@tanstack/react-query";

export function Home() {
  const { data: prevWatched, isLoading } = useQuery({
    queryKey: ["prevWatched"],
    queryFn: () => homeService.getPrevWatched(),
  });

  if (isLoading) return <Loarding />;

  return (
    <div className='flex flex-col gap-10 mb-10 mt-10 mr-16 ml-16'>
      <section>
        <h2 className='font-semibold text-xl'>Previously Watched</h2>
        <div className='flex flex-wrap bg-custom'>
          {prevWatched.map((movie) => (
            <div
              onClick={() => navigate(`/search/${movie.id}`)}
              key={movie.id}
              className='relative max-w-[140px] max-h-[200px] m-3 transition-transform duration-300 hover:scale-110'>
              <img
                className='object-cover rounded-[20px]'
                src={`https://image.tmdb.org/t/p/w200/${movie.movie.poster_path}`}
                alt='Image not found'
              />
              <p className='absolute top-[10px] left-[8px] text-white font-semibold'>
                ⭐ {movie.movie.vote_average.toFixed(1)}
              </p>
            </div>
          ))}
        </div>
      </section>
      <HomeMovies getMovie={homeService.getTopRated} text={"TopRated"} />
      <HomeMovies getMovie={homeService.getPopular} text={"Popular"} />
      <HomeMovies getMovie={homeService.getUpcoming} text={"Upcoming"} />
    </div>
  );
}
