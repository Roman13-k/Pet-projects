import { useQuery } from "@tanstack/react-query";
import styles from "./EmailList.module.css";
import { emailService } from "../../services/email.service";
import parse from "html-react-parser";
import { Trash, Search } from "lucide-react";
import { useState, useEffect } from "react";

export function EmailList() {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);
  const { data, refetch } = useQuery({
    queryKey: ["email list"],
    queryFn: () => emailService.getEmails(),
  });

  const handleDelete = async (id) => {
    await emailService.deleteEmail(id);
    refetch();
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (data) {
      setFiltered(
        data.filter((email) =>
          email.email.toLowerCase().includes(search.toLowerCase()),
        ),
      );
    }
  }, [search, data]);

  return (
    <>
      <div role='search' className={styles.search}>
        <input
          className={styles.searchInput}
          type='email'
          placeholder='search emails'
          value={search}
          onChange={handleSearchChange}
        />
        <Search className={styles.icon} />
      </div>
      <div className={styles.list}>
        {filtered.map((email) => (
          <div className={styles.div} key={email.id}>
            <h5 className={styles.email}>{email.email}</h5>
            {parse(email.text)} <p className={styles.date}>{email.date}</p>
            <button
              className={styles.delete__button}
              onClick={() => handleDelete(email.id)}>
              <Trash />
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
