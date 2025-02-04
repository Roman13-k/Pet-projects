import React, { useContext } from "react";
import { Goals } from "./Goals";
import { Context } from "../context/context";

export function Aside() {
  const { date, setDate } = useContext(Context);

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
