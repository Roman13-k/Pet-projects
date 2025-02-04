import React from "react";

export function Header() {
  return (
    <header className='flex justify-center items-center '>
      <div className='flex flex-wrap items-center mb-20'>
        <img
          className='max-w-[300px] max-h-[300px] row-span-2'
          src='/logo.png'
          alt='logo.png'
        />
        <div>
          <h1 className='font-semibold text-5xl col-start-2 mb-4'>
            Health Tracker
          </h1>
          <p className='col-start-2'>Your journey to health starts here!</p>
        </div>
      </div>
    </header>
  );
}
