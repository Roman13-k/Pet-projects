import { useEffect } from "react";
import styles from "../styles/tasks.module.css";
import axios from "axios";
import { Trash2, Pencil } from "lucide-react";

export function Tasks({ tasks, setTasks, isNewNode }) {
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:3000/tasks");
        setTasks(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTasks();
  }, [isNewNode, setTasks]);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/tasks/${id}`);
    setTasks((prevTasks) => prevTasks.filter((value) => value.id != id));
  };

  return (
    <section className={styles.tasks}>
      {!tasks ? (
        <>
          <img
            className='max-w-56 max-h-44'
            src='../../public/empty.png'
            alt=''
          />
          <h2 className='mt-7 '>Empty...</h2>
        </>
      ) : (
        <ul>
          {tasks.map((item) => (
            <li className='flex flex-col' key={item.id}>
              <div className='flex items-center gap-6'>
                <input
                  className='h-6 w-6 border-1 border-purple'
                  type='checkbox'
                />
                <p className='mr-auto'>{item.note}</p>
                <div className='flex gap-3'>
                  <button className='bg-transparent active:bg-transparent '>
                    <Pencil className='h-5 w-5 opacity-50 transition-all ease-in hover:stroke-purple hover:opacity-100' />
                  </button>
                  <button
                    className='bg-transparent active:bg-transparent '
                    onClick={() => handleDelete(item.id)}>
                    <Trash2 className='h-5 w-5 opacity-50 transition-all ease-in hover:stroke-red-500 hover:opacity-100' />
                  </button>
                </div>
              </div>
              <span className='min-w-96 h-4 mb-5 border-b-1 border-purple opacity-50'></span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
