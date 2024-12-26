import { useEffect, useRef, useState } from "react";
import styles from "../styles/tasks.module.css";
import axios from "axios";
import { Empty } from "./Empty";
import { EditBtn } from "./EditBtn";
import { useSetTasks, useUpgradeTasks } from "../hooks/useUpgradeTasks";

export function Tasks({ tasks, setTasks, isNewNode }) {
  const [isChecked, setIsChecked] = useState({});
  const [isEdit, setIsEdit] = useState(null);
  const inputRefs = useRef({});
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

  const handleChecked = async (item, id) => {
    const newChecked = !isChecked[id];
    setIsChecked((prevState) => ({ ...prevState, [id]: newChecked }));
    await useUpgradeTasks(id, { ...item, checked: newChecked });
    useSetTasks(id, { checked: newChecked }, setTasks);
  };

  const handleBlur = async (item, id, newNode) => {
    setIsEdit(!isEdit);
    await useUpgradeTasks(id, { ...item, note: newNode });
  };
  const handleChange = (id, newValue) => {
    useSetTasks(id, { note: newValue }, setTasks);
  };

  return (
    <section className={styles.tasks}>
      {tasks.length == 0 ? (
        <Empty />
      ) : (
        <ul>
          {tasks.map((item) => (
            <li className='flex flex-col' key={item.id}>
              <div className='flex items-center justify-between gap-6'>
                <input
                  className={styles.checkbox}
                  type='checkbox'
                  checked={isChecked[item.checked]}
                  onChange={() => handleChecked(item, item.id)}
                />
                <input
                  ref={(el) => (inputRefs.current[item.id] = el)}
                  onChange={(e) => handleChange(item.id, e.target.value)}
                  readOnly={isEdit != item.id}
                  value={item.note}
                  className={
                    item.checked
                      ? styles.note
                      : "p-0 font-normal border-none min-w-96"
                  }
                  onBlur={() => handleBlur(item, item.id, item.note)}
                />
                <EditBtn
                  id={item.id}
                  setIsEdit={setIsEdit}
                  setTasks={setTasks}
                  inputRefs={inputRefs}
                />
              </div>
              <span className='min-w-96 h-4 mb-5 border-b-1 border-purple opacity-50'></span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
