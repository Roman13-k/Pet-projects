import { useState } from "react";
import styles from "../styles/App.module.css";
import { NewNode } from "./newNode";
import { Tasks } from "./Tasks";
import { Search } from "./Search";

function App() {
  const [isNewNode, setIsNewNode] = useState(false);
  const [tasks, setTasks] = useState([]);

  return (
    <>
      <NewNode isNewNode={isNewNode} setIsNewNode={setIsNewNode} />
      <div className={styles.container}>
        <header>
          <h1 className='mt-14 mb-5 text-center'>TODO LIST</h1>
          <Search />
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
