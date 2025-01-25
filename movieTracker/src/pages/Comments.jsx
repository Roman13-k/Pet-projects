import { useParams } from "react-router-dom";
import { Loarding } from "../components/Loarding";
import { getUtcDate } from "../utils/getUtcDate";
import { ComParag } from "../components/ComParag";
import { useQuery } from "@tanstack/react-query";
import { movieService } from "../services/movie.service";

export default function Comments() {
  const params = useParams();

  const { data: comments, isLoading } = useQuery({
    queryKey: ["comments"],
    queryFn: () => movieService.getComments(params),
  });

  if (isLoading) return <Loarding />;

  return (
    <div>
      <h2 className='text-4xl font-semibold mt-5 mb-6'>Comments</h2>
      <ul>
        {comments.results.map((comm) => {
          return (
            <li
              key={comm.id}
              className='border-1 border-black rounded-3xl m-4 p-3'>
              <h3 className='text-xl font-semibold m-2'>{comm.author}</h3>
              <ComParag comm={comm.content} />
              <time className='flex italic font-medium justify-end'>
                {getUtcDate(comm.created_at)}
              </time>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
