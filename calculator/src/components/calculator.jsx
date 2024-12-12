import { useEffect, useRef, useState } from "react";
import styles from "./calculator.module.css";
import Add from "./calculatorAdd/calculatorAdd";
import { useLogic } from "../hooks/useLogic";
import Panel from "./calculatorPanel/calculatorPanel";

function Calculator() {
  const [rez, setRez] = useState("");
  const rezRef = useRef(null);
  const [input, setInput] = useState("");
  const [isAddVisible, setIsAddVisible] = useState(false);
  const {
    clickButton,
    clickMathButton,
    allClearButton,
    deleteButton,
    calculate,
    toggleAdd,
  } = useLogic(rez, setRez, setInput, setIsAddVisible);

  useEffect(() => {
    if (rezRef.current) {
      rezRef.current.scrollLeft = rezRef.current.scrollWidth;
    }
  }, [rez]);

  return (
    <div className={styles.container}>
      <Add
        isAddVisible={isAddVisible}
        clickButton={clickButton}
        clickMathButton={clickMathButton}></Add>
      <div className={styles.calculator}>
        <div className={styles.calculator__rezult}>
          <input
            className={styles.calculator__input}
            type='text'
            readOnly
            value={input}
          />
          <input
            ref={rezRef}
            className={styles.calculator__rez}
            type='text'
            readOnly
            placeholder='0'
            value={rez}
          />
        </div>
        <Panel
          toggleAdd={toggleAdd}
          allClearButton={allClearButton}
          deleteButton={deleteButton}
          clickButton={clickButton}
          calculate={calculate}
        />
      </div>
    </div>
  );
}
export default Calculator;
