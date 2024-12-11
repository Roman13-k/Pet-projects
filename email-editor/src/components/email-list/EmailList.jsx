import { useQuery } from "@tanstack/react-query";
import styles from "./EmailList.module.css";
import { emailService } from "../../services/email.service";
import parse from "html-react-parser";
import { Trash } from "lucide-react";
import axios from "axios";

export function EmailList() {
  const { data, refetch } = useQuery({
    queryKey: ["email list"],
    queryFn: () => emailService.getEmails(),
  });
  const deleteEmail = async (id) => {
    await axios.delete(`http://localhost:3000/emails/${id}`);
  };
  const handleDelete = async (id) => {
    await deleteEmail(id);
    refetch();
  };

  return (
    <div className={styles.list}>
      {data?.map((email) => (
        <div className={styles.div} key={email.text}>
          {parse(email.text)}
          <button
            className={styles.delete__button}
            onClick={() => handleDelete(email.id)}>
            <Trash />
          </button>
        </div>
      ))}
    </div>
  );
}
