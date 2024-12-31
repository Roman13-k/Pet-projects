import { useState } from "react";
import { NewNode } from "../components/newNode";
import { Tasks } from "../components/Tasks";
import { Search } from "../components/Search";
import { UndoBtm } from "../components/UndoBtm";

export default function DoList() {
  const [isNewNode, setIsNewNode] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  const [undoId, setUndoId] = useState(null);

  return (
    <>
      <NewNode isNewNode={isNewNode} setIsNewNode={setIsNewNode} />
      <div className=' w-[750px] h-[650px] relative'>
        <header>
          <h1 className='mt-14 mb-5 text-center'>TODO LIST</h1>
          <Search tasks={tasks} setFilteredTasks={setFilteredTasks} />
        </header>
        <Tasks
          filteredTasks={filteredTasks}
          setTasks={setTasks}
          isNewNode={isNewNode}
          setUndoId={setUndoId}
        />
        <UndoBtm
          filteredTasks={filteredTasks}
          undoId={undoId}
          setUndoId={setUndoId}
        />
        <button
          className='absolute bottom-0 right-0 rounded-full p-4 mr-2 mb-8 shadow-custom'
          onClick={() => setIsNewNode(true)}>
          <img src='../public/plus.svg' />
        </button>
      </div>
    </>
  );
}
