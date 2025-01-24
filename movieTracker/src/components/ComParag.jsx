import React, { useState } from "react";

export function ComParag({ comm }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleExpand = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <p className={`m-2 leading-tight ${isOpen ? "" : "line-clamp-5"}`}>
        {comm}
      </p>
      <button
        className='ml-2 cursor-pointer italic text-gray-500 underline'
        onClick={() => handleToggleExpand()}>
        {isOpen ? "hide" : "expand"}
      </button>
    </>
  );
}
