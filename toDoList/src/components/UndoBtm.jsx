import { useContext, useEffect, useState } from "react";
import styles from "../styles/UndoBtm.module.css";
import { Context } from "./Context";

export function UndoBtm({ undoId, setUndoId, filteredTasks }) {
  const { isDeleting, setIsDeleting } = useContext(Context);
  const [count, setCount] = useState(3);

  useEffect(() => {
    setIsDeleting((prevState) => {
      const newState = { ...prevState };
      filteredTasks.forEach((item) => {
        if (newState[item.id] === undefined) {
          newState[item.id] = false;
        }
      });
      return newState;
    });
  }, [filteredTasks]);

  useEffect(() => {
    let interval;
    if (isDeleting[undoId]) {
      interval = setInterval(
        () =>
          setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : prevCount)),
        1000,
      );
    }
    setCount(3);
    return () => clearInterval(interval);
  }, [isDeleting, undoId]);

  const handleUndoClick = () => {
    setIsDeleting((prevState) => ({ ...prevState, [undoId]: false }));
    setUndoId(null);
  };

  return (
    <div className='absolute bottom-32 right-0'>
      <button
        onClick={handleUndoClick}
        className={`${styles.undo} ${
          isDeleting[undoId] ? styles.deleting : ""
        }`}>
        <span className='block rounded-full  border-2 border-white w-8 h-8'>
          <div className=' h-full w-full'>{count}</div>
        </span>
        UNDO
      </button>
    </div>
  );
}
