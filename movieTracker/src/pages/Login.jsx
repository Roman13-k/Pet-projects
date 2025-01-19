import React, { useContext } from "react";
import { Button, Input } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { Context } from "../context/context";

export function Login() {
  const { setIsAuth } = useContext(Context);

  const handleSubmit = () => {
    setIsAuth(true);
    localStorage.setItem("auth", true);
  };

  return (
    <div className=' flex place-content-center'>
      <div className='flex flex-col w-[390px] justify-center mt-16'>
        <h1 className='font-roboto font-semibold text-[90px] text-start max-w-60 text-shadow-lg ml-8 mb-10'>
          The Movie Tracker
        </h1>
        <form onSubmit={handleSubmit}>
          <Input
            classNames={{
              inputWrapper: ["shadow-xl", "bg-[#d9d9d9]", "min-h-[45px]"],
              input: ["placeholder:text-black "],
            }}
            type='text'
            placeholder='Username'
          />
          <Input
            classNames={{
              inputWrapper: [
                "shadow-xl",
                "bg-[#d9d9d9]",
                "min-h-[45px]",
                "mt-4",
                "mb-10",
              ],
              input: ["placeholder:text-black "],
            }}
            type='password'
            placeholder='Password'
          />
          <Button
            type='submit'
            className='w-full mb-3 font-semibold text-2xl'
            color='primary'>
            Login
          </Button>
          <p className='text-gray-500 mr-3 inline'>
            You don’t have an account?
          </p>
          <Link className='text-gray-500 font-semibold' to='/register'>
            SignUp
          </Link>
        </form>
      </div>
    </div>
  );
}
