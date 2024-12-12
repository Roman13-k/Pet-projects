import styles from "./add.module.css";
import { memo } from "react";
const Add = memo(function Add({ isAddVisible, clickButton, clickMathButton }) {
  return (
    <div className={`${styles.add} ${isAddVisible ? styles.show : ""}`}>
      <button onClick={() => clickButton("(")}>(</button>
      <button onClick={() => clickButton(")")}>)</button>
      {["x!", "√", "ln", "sin", "cos", "tg", "п"].map((item) => (
        <button key={item} onClick={() => clickMathButton(item)}>
          {item}
        </button>
      ))}
    </div>
  );
});

export default Add;
