import React from "react";
import styles from "../styles/page.module.css";

export default function PagesArray({ pagesArray, page, setPage }) {
  return (
    <div className='flex mt-5 min-h-40 justify-center'>
      {pagesArray.map((p) => (
        <span
          onClick={() => setPage(p)}
          key={p}
          className={page == p ? styles.cur_page : styles.page}>
          {p}
        </span>
      ))}
    </div>
  );
}
