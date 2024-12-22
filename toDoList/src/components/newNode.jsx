import { useEffect, useState } from "react";
import styles from "../styles/newNode.module.css";
import axios from "axios";

export function NewNode({ isNewNode, setIsNewNode }) {
  const [note, setNote] = useState("");

  const sendNote = async () => {
    try {
      await axios.post("http://localhost:3000/tasks", {
        note,
      });
      setIsNewNode(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isNewNode && (
        <div className={styles.newNode} onClick={() => setIsNewNode(false)}>
          <div
            className={styles.nodeContainer}
            onClick={(e) => e.stopPropagation()}>
            <h2 className='mt-4 mb-6'>New Note</h2>
            <input
              className='ml-8 mr-8 mb-auto'
              type='text'
              placeholder='Input your note...'
              onChange={(e) => setNote(e.target.value)}
            />
            <div className='flex flex-row justify-between mb-5 mr-7 ml-7'>
              <button
                className='text-lg rounded-md bg-transparent text-purple border-solid border-2 border-purple p-1 pl-5 pr-5'
                onClick={() => setIsNewNode(false)}>
                Cancel
              </button>
              <button
                className='text-lg rounded-md bg-purple text-white border-solid p-1 pl-5 pr-5'
                onClick={sendNote}>
                Aplly
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
