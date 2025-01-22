import React, { useEffect, useState } from "react";
import { getComments } from "../services/moviesService";
import { useParams } from "react-router-dom";
import { Loarding } from "../components/Loarding";

export default function Comments() {
  const params = useParams();
  const [ComLoading, setComLoading] = useState(false);
  const [comments, setComments] = useState({ results: [] });

  useEffect(() => {
    async function fetchComms() {
      setComLoading(true);
      const data = await getComments(params);
      setComments(data);
      setComLoading(false);
    }
    fetchComms();
  }, []);

  if (ComLoading) return <Loarding />;

  return (
    <div>
      <h2 className='text-4xl font-semibold mt-5 mb-6'>Comments</h2>
      <ul>
        {comments.results.map((comm) => {
          return (
            <li
              key={comm.id}
              className='border-1 border-black rounded-3xl m-4 p-3'>
              <h3>{comm.author}</h3>
              <p>{comm.content}</p>
              <time>{comm.created_at}</time>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
