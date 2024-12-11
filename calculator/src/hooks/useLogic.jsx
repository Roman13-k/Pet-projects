import { useCallback } from "react";

export function useLogic(rez, setRez, setInput, setIsAddVisible) {
  const clickButton = useCallback(
    (value) => {
      setRez((prev) => prev + value);
    },
    [setRez],
  );

  const allClearButton = useCallback(() => {
    setRez("");
    setInput("");
  }, [setRez, setInput]);

  const deleteButton = useCallback(() => {
    setRez((prev) => prev.slice(0, -1));
  }, [setRez]);

  const calculate = useCallback(() => {
    try {
      setRez(eval(rez));
      setInput(rez + "=");
    } catch (error) {
      setRez("NaN");
    }
  }, [rez, setInput, setRez]);

  const toggleAdd = useCallback(() => {
    setIsAddVisible((prev) => !prev);
  }, []);

  return { clickButton, allClearButton, deleteButton, calculate, toggleAdd };
}
