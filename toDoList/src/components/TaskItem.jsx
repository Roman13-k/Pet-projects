import { useState, useRef, useContext, useEffect } from "react";
import { EditBtn } from "./EditBtn.jsx";
import styles from "../styles/TaskItem.module.css";
import { useUpgradeTasks, useSetTasks } from "../hooks/useUpgradeTasks.js";
import { Context } from "./Context";

export function TaskItem({
  item,
  setTasks,
  setUndoId,
  isChecked,
  setIsChecked,
}) {
  const [isEdit, setIsEdit] = useState(null);
  const inputRefs = useRef({});
  const { isDeleting } = useContext(Context);

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
    <div
      className={`flex flex-col  ${isDeleting[item.id] ? "opacity-40" : ""}`}>
      <div className='flex items-center justify-between gap-6'>
        <input
          className={`${styles.checkbox} ${
            isChecked[item.id] ? "bg-purple" : ""
          }`}
          type='checkbox'
          checked={isChecked[item.id]}
          onChange={() => handleChecked(item, item.id)}
        />
        <input
          ref={(el) => (inputRefs.current[item.id] = el)}
          onChange={(e) => handleChange(item.id, e.target.value)}
          readOnly={isEdit != item.id}
          value={item.note}
          className={
            item.checked ? styles.note : "p-0 font-normal border-none min-w-96"
          }
          onBlur={() => handleBlur(item, item.id, item.note)}
        />
        <EditBtn
          id={item.id}
          setIsEdit={setIsEdit}
          setTasks={setTasks}
          inputRefs={inputRefs}
          setUndoId={setUndoId}
        />
      </div>
      <span className='min-w-96 h-4 mb-5 border-b-1 border-purple opacity-50'></span>
    </div>
  );
}
