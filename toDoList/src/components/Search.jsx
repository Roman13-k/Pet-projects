import { useState } from "react";
import styles from "../styles/Search.module.css";
import { Theme } from "./Theme";
import { useEffect } from "react";

export function Search({ tasks, setFilteredTasks }) {
  const [search, setSearch] = useState("");

  useEffect(() => {
    setFilteredTasks(
      tasks.filter((item) =>
        item.note.toLowerCase().includes(search.toLowerCase()),
      ),
    );
  }, [tasks, search]);

  const selectedSort = (sort) => {
    if (sort == "Complete") {
      setFilteredTasks(tasks.filter((item) => item.checked));
    } else if (sort == "Incomplete") {
      setFilteredTasks(tasks.filter((item) => !item.checked));
    } else {
      setFilteredTasks(tasks);
    }
  };

  return (
    <section className='flex gap-4'>
      <div className='relative'>
        <input
          className='w-[595px] h-[38px];'
          type='text'
          role='search'
          placeholder='Search note...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className='absolute w-5 h-5 bg-transparent right-4 top-1/4 active:bg-transparent'>
          <img src='../../public/search.svg' />
        </button>
      </div>
      <select
        onChange={(e) => selectedSort(e.target.value)}
        className={styles.select}>
        <option>All</option>
        <option>Complete</option>
        <option>Incomplete</option>
      </select>
      <Theme />
    </section>
  );
}
