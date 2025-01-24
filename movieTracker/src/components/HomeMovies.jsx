import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Loarding } from "./Loarding";
import { MoviesNoWrap } from "./MoviesNoWrap";

export function HomeMovies({ getMovie, text }) {
  const { data: category, isLoading } = useQuery({
    queryKey: [text],
    queryFn: () => getMovie(),
  });

  if (isLoading) return <Loarding />;

  return (
    <section>
      <h2 className='font-semibold text-xl'>{text}</h2>
      <MoviesNoWrap movies={category} />
    </section>
  );
}
