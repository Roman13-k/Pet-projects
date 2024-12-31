import React from "react";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Empty } from "./Empty";
import { TaskItem } from "./TaskItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../styles/Tasks.css";

export function Tasks({ filteredTasks, setTasks, isNewNode, setUndoId }) {
  const [isChecked, setIsChecked] = useState({});

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:3000/tasks");
        const tasksData = response.data;

        const initialChecked = tasksData.reduce((acc, task) => {
          acc[task.id] = task.checked || false;
          return acc;
        }, {});
        setTasks(tasksData);
        setIsChecked(initialChecked);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTasks();
  }, [isNewNode, setTasks]);

  const nodeRefs = useRef({});

  return (
    <section className='flex flex-col mt-8 ml-28 mr-28 h-[450px] overflow-y-auto scrollbar-hide '>
      {filteredTasks.length === 0 ? (
        <Empty />
      ) : (
        <TransitionGroup>
          {filteredTasks.map((item) => {
            if (!nodeRefs.current[item.id]) {
              nodeRefs.current[item.id] = React.createRef();
            }

            return (
              <CSSTransition
                key={item.id}
                timeout={500}
                classNames='task'
                nodeRef={nodeRefs.current[item.id]}>
                <div ref={nodeRefs.current[item.id]}>
                  <TaskItem
                    item={item}
                    filteredTasks={filteredTasks}
                    setTasks={setTasks}
                    setUndoId={setUndoId}
                    isChecked={isChecked}
                    setIsChecked={setIsChecked}
                  />
                </div>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      )}
    </section>
  );
}
