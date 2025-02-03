import React, { useContext, useState } from "react";
import { debounce } from "../utils/debounce";
import { Context } from "../context/context";
import { putGoals } from "../services/health.service";

export function Goals() {
  const { goals, setGoals } = useContext(Context);
  const [isBlur, setIsBlur] = useState(false);

  const handleChange = async (e) => {
    if (!isNaN(e.target.value)) {
      const { name, value } = e.target;
      setGoals((prev) => ({ ...prev, [name]: value }));
      await putGoals({ ...goals, [name]: Number(value) });
    }
  };

  return (
    <>
      <h3 className='m-3 font-semibold text-2xl'>Goals:</h3>
      {Object.entries(goals).map(([key, value]) => (
        <div
          key={key}
          className='flex items-center justify-between g-5 w-full h-full'>
          <p>{key + ":"}</p>
          <input
            type='text'
            name={key}
            placeholder={value}
            className={`border p-1 max-w-[150px] ${
              isBlur ? "text-gray-500" : ""
            }`}
            onChange={debounce(handleChange, 1000)}
            onFocus={() => setIsBlur(false)}
            onBlur={() => setIsBlur(true)}
          />
        </div>
      ))}
    </>
  );
}
