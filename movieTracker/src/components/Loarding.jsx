import React from "react";

export function Loarding() {
  return (
    <div className='flex justify-center gap-3'>
      <div
        className='w-8 h-8 bg-red-400 rounded-full animate-bounce-custom '
        style={{ animationDelay: "0s" }}></div>
      <div
        className='w-8 h-8 bg-red-500 rounded-full animate-bounce-custom '
        style={{ animationDelay: "0.25s" }}></div>
      <div
        className='w-8 h-8 bg-red-600 rounded-full animate-bounce-custom '
        style={{ animationDelay: "0.5s" }}></div>
    </div>
  );
}
