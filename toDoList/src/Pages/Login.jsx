import React, { useContext } from "react";
import { Context } from "../components/Context";

export default function Login() {
  const { setIsAuth } = useContext(Context);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  };

  return (
    <div className='flex flex-col m-12 p-2 items-center'>
      <h1 className='m-3'>Login</h1>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col gap-4 items-center'>
        <input type='text' placeholder='Enter name' />
        <input type='password' placeholder='Enter password' />
        <button className='min-w-28'>Login</button>
      </form>
    </div>
  );
}
