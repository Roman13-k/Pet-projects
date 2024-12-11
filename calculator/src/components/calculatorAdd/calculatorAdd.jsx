import styles from "./add.module.css";
import React from "react";
const Add = React.memo(({ isAddVisible, clickButton }) => {
  return (
    <div className={`${styles.add} ${isAddVisible ? styles.show : ""}`}>
      {["(", ")"].map((item) => (
        <button key={item} onClick={() => clickButton(item)}>
          {item}
        </button>
      ))}
    </div>
  );
});

export { Add };
