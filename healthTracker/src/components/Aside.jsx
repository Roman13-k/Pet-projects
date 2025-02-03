import React, { useState } from "react";
import { getCurDate } from "../utils/getCurDate";
import { Goals } from "./Goals";

export function Aside() {
  const [date, setDate] = useState(getCurDate());

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <aside className='flex flex-col items-start justify-between gap-4 ml-[100px] min-w-[250px]'>
      <input type='date' value={date} onChange={(e) => handleChange(e)} />
      <Goals />
    </aside>
  );
}
