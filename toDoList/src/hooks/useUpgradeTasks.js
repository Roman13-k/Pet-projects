import axios from "axios";

export async function useUpgradeTasks(id, upgradeFields) {
  try {
    await axios.put(`http://localhost:3000/tasks/${id}`, upgradeFields);
  } catch (error) {
    console.log(error);
  }
}

export function useSetTasks(id, newValue, setTasks) {
  setTasks((prevTasks) =>
    prevTasks.map((task) => (task.id === id ? { ...task, ...newValue } : task)),
  );
}
