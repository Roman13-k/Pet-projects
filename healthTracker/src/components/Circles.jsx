import React, { useContext, useState } from "react";
import { Circle } from "../UI/Circle";
import { Context } from "../context/context";
import { debounce } from "../utils/debounce";
import { putIndicators } from "../services/health.service";

export function Circles() {
  const { goals, indicators, setIndicators, date } = useContext(Context);
  const [isBlur, setIsBlur] = useState(false);

  const stylesInd = {
    Steps: ["blue", "st."],
    Calories: ["#f97316", "cal."],
    Water: ["#87CEEB", "lit."],
    Sleep: ["#8A2BE2", "h."],
  };

  const handleChange = async (e) => {
    const { name, value } = e.target;
    if (!isNaN(value)) {
      setIndicators((prev) => ({ ...prev, [name]: value }));
      await putIndicators(date, {
        indicators: {
          ...indicators,
          [name]: value,
        },
      });
    }
  };

  return (
    <section className='flex gap-5'>
      {Object.entries(indicators).map(([key, value]) => (
        <div key={key} className='flex flex-col items-center gap-3'>
          <h2 className='m-1 font-semibold text-xl'>{key} </h2>
          <Circle pr={indicators[key] / goals[key]} color={stylesInd[key][0]} />
          <p>{indicators[key] + "/" + goals[key] + stylesInd[key][1]}</p>
          <input
            type='text'
            name={key}
            className={`max-w-[100px] ${isBlur ? "text-gray-500" : ""}`}
            placeholder={`${key.toLowerCase()}...`}
            onChange={debounce(handleChange, 1000)}
            onFocus={() => setIsBlur(false)}
            onBlur={() => setIsBlur(true)}
          />
        </div>
      ))}
    </section>
  );
}
