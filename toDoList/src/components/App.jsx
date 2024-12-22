import { useState } from "react";
import styles from "../styles/App.module.css";
import { NewNode } from "./newNode";
import { Tasks } from "./Tasks";

function App() {
  const [isNewNode, setIsNewNode] = useState(false);
  const [tasks, setTasks] = useState([]);

  const handleClick = () => {};

  const handleKeyDown = (e) => {
    if (e.key == "Enter") {
      handleClick();
    }
  };
  return (
    <>
      <NewNode isNewNode={isNewNode} setIsNewNode={setIsNewNode} />
      <div className={styles.container}>
        <header className=''>
          <h1 className='mt-14 mb-5 text-center'>TODO LIST</h1>
          <nav className='flex gap-4'>
            <div className='relative'>
              <input
                className={styles.input}
                type='text'
                role='search'
                placeholder='Search note...'
                onChange={(e) => e.target.value}
                onKeyDown={handleKeyDown}
              />
              <button
                className='absolute w-5 h-5 bg-transparent right-4 top-1/4 active:bg-transparent'
                onClick={handleClick}>
                <img src='../../public/search.svg' />
              </button>
            </div>
            <select className={styles.select}>
              <option>All</option>
              <option>Complete</option>
              <option>Incomplete</option>
            </select>
            <button className='p-2 rounded-md'>
              <img src='../public/night.svg' />
            </button>
          </nav>
        </header>
        <Tasks tasks={tasks} setTasks={setTasks} isNewNode={isNewNode} />
        <button className={styles.btn} onClick={() => setIsNewNode(true)}>
          <img src='../public/plus.svg' />
        </button>
      </div>
    </>
  );
}

export default App;
