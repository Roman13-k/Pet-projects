import { useState } from "react";

export function Home() {
  const [prevWatched, setPrevWatched] = useState([]);
  const [popular, setPopular] = useState([]);
  const [rated, setRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  return (
    <div className='mb-10 mt-10 mr-16 ml-16'>
      <section>
        <h2>Previously Watched</h2>
        <div>{prevWatched}</div>
      </section>
      <section>
        <h2>Popular</h2>
        <div>{popular}</div>
      </section>
      <section>
        <h2>Top Rated</h2>
        <div>{rated}</div>
      </section>
      <section>
        <h2>Upcoming</h2>
        <div>{upcoming}</div>
      </section>
    </div>
  );
}
