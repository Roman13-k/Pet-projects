import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "./Context";

export default function NavBar() {
  const { setIsAuth } = useContext(Context);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };

  return (
    <nav className='w-screen h-14 bg-slate-500 '>
      <ul className='h-full flex flex-row gap-3 flex-nowrap justify-center items-center'>
        <li className='font-light'>
          <button className='p-2 rounded-md' onClick={logout}>
            Exit
          </button>
        </li>
        <li className='font-light'>
          <Link to='/about'>About</Link>
        </li>
        <li className='font-light'>
          <Link to='/dolist'>ToDoList</Link>
        </li>
      </ul>
    </nav>
  );
}
