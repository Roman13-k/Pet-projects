import { Pi } from "lucide-react";
import { useMemo } from "react";

export function useLogic(rez, setRez, setInput, setIsAddVisible) {
  return useMemo(() => {
    const clickButton = (value) => {
      const lastChar = rez[rez.length - 1];
      const isNumber = (char) => !isNaN(char) && char !== " ";
      const isOperator = (char) => ["+", "-", "*", "/"].includes(char);
      const isOpeningBracket = (char) => char === "(";
      const isClosingBracket = (char) => char === ")";
      console.log(typeof rez);
      if (
        (isNumber(value) &&
          (isNumber(lastChar) ||
            isOperator(lastChar) ||
            isOpeningBracket(lastChar) ||
            !lastChar ||
            lastChar == ".")) ||
        (isOperator(value) &&
          ((value === "-" && (!lastChar || lastChar === "(")) ||
            (lastChar && (isNumber(lastChar) || isClosingBracket(lastChar))) ||
            typeof rez == "number")) ||
        (isOpeningBracket(value) &&
          (!lastChar || isOperator(lastChar) || isOpeningBracket(lastChar))) ||
        (isClosingBracket(value) &&
          (rez.match(/\(/g) || []).length > (rez.match(/\)/g) || []).length &&
          (isNumber(lastChar) || isClosingBracket(lastChar))) ||
        (value === "." &&
          (typeof rez == "number" || isNumber(lastChar)) &&
          !String(rez)
            .split(/[^0-9.]/)
            .pop()
            .includes("."))
      )
        setRez((prev) => prev + value);
    };

    const clickMathButton = (value) => {
      switch (value) {
        case "x!":
          if (+rez < 0) break;
          setRez(factorial(+rez));
          setInput(rez + "!=");
          break;
        case "√":
          if (+rez < 0) break;
          setRez(Math.sqrt(eval(rez)).toFixed(6));
          setInput(value + rez + "=");
          break;
        case "ln":
          if (+rez <= 0) break;
          setRez(Math.log(+rez).toFixed(6));
          setInput(value + rez + "=");
          break;
        case "sin":
          setRez(Math.sin(+rez * (Math.PI / 180)).toFixed(6));
          setInput(value + rez + "=");
          break;
        case "cos":
          setRez(Math.cos(+rez * (Math.PI / 180)).toFixed(6));
          setInput(value + rez + "=");
          break;
        case "tg":
          setRez(Math.tan(+rez * (Math.PI / 180)).toFixed(6));
          setInput(value + rez + "=");
          break;
        case "п":
          setRez(Math.PI.toFixed(6));
          setInput("PI");
          break;
      }
    };

    const allClearButton = () => {
      setRez("");
      setInput("");
    };

    const deleteButton = () => {
      setRez((prev) => prev.slice(0, -1));
    };

    const calculate = () => {
      try {
        setRez(eval(rez));
        setInput(rez + "=");
      } catch (error) {
        return;
      }
    };

    const toggleAdd = () => {
      setIsAddVisible((prev) => !prev);
    };

    return {
      clickButton,
      clickMathButton,
      allClearButton,
      deleteButton,
      calculate,
      toggleAdd,
    };
  }, [rez, setRez, setInput, setIsAddVisible]);
}

function factorial(n) {
  if (n == 0 || n == 1) return 1;
  return n * factorial(n - 1);
}
