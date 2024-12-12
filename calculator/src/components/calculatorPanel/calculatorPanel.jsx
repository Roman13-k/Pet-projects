import { Delete, ArrowBigLeft } from "lucide-react";
import { memo } from "react";
import styles from "./calculatorPanel.module.css";

const Panel = memo(function Panel({
  toggleAdd,
  allClearButton,
  deleteButton,
  clickButton,
  calculate,
}) {
  return (
    <div className={styles.calculator__panel}>
      <div className={styles.calculator__top}>
        <button onClick={toggleAdd}>
          <ArrowBigLeft />
        </button>
        <button onClick={allClearButton} className={styles.clear__btm}>
          Ac
        </button>
        <button onClick={deleteButton} className={styles.del__btm}>
          <Delete />
        </button>
        <button onClick={() => clickButton("/")} className={styles.divide__btm}>
          /
        </button>
        <button onClick={() => clickButton("*")} className={styles.multip__btm}>
          *
        </button>
      </div>
      <div className={styles.calculator__bottom}>
        <div className={styles.numbers}>
          {["7", "8", "9", "4", "5", "6", "1", "2", "3"].map((item) => (
            <button key={item} onClick={() => clickButton(item)}>
              {item}
            </button>
          ))}
          <button onClick={() => clickButton("0")} className={styles.zero__btm}>
            0
          </button>
          <button
            onClick={() => clickButton(".")}
            className={styles.point__btm}>
            .
          </button>
        </div>
        <div className={styles.math}>
          <button
            onClick={() => clickButton("-")}
            className={styles.minus__btm}>
            -
          </button>
          <button onClick={() => clickButton("+")} className={styles.plus__btm}>
            +
          </button>
          <button onClick={calculate} className={styles.equal__btm}>
            =
          </button>
        </div>
      </div>
    </div>
  );
});
export default Panel;
