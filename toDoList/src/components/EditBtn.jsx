import { Trash2, Pencil } from "lucide-react";
import axios from "axios";
import { useContext } from "react";
import { Context } from "./Context";

export function EditBtn({ id, setIsEdit, setTasks, setUndoId }) {
  const { isDeleting, setIsDeleting } = useContext(Context);

  const handleEdit = () => {
    setIsEdit(id);
    inputRefs.current[id]?.focus();
  };

  const handleDelete = async (id) => {
    setIsDeleting((prevState) => ({ ...prevState, [id]: true }));
    setUndoId(id);
    setTimeout(async () => {
      setIsDeleting(async (prevState) => {
        if (prevState[id]) {
          await axios.delete(`http://localhost:3000/tasks/${id}`);
          setTasks((prevTasks) => prevTasks.filter((value) => value.id !== id));
        }
        return { ...prevState, [id]: false };
      });
    }, 3000);
  };

  return (
    <div className={"flex gap-3"}>
      <button
        className='bg-transparent active:bg-transparent '
        onClick={() => handleEdit()}>
        <Pencil className='h-5 w-5 opacity-50 transition-all ease-in hover:stroke-purple hover:opacity-100' />
      </button>
      <button
        className='bg-transparent active:bg-transparent '
        onClick={() => handleDelete(id)}>
        <Trash2 className='h-5 w-5 opacity-50 transition-all ease-in hover:stroke-red-500 hover:opacity-100' />
      </button>
    </div>
  );
}
