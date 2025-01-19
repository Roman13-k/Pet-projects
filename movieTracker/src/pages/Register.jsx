import { Button, Input } from "@nextui-org/react";
import React from "react";
import { Link } from "react-router-dom";

export function Register() {
  return (
    <div className=' flex place-content-center'>
      <div className='flex flex-col w-[390px] justify-center mt-10'>
        <h1 className='font-roboto font-semibold text-[90px] text-start max-w-60 text-shadow-lg ml-8 mb-10'>
          The Movie Tracker
        </h1>
        <form>
          <Input
            classNames={{
              inputWrapper: [
                "shadow-xl",
                "bg-[#d9d9d9]",
                "min-h-[40px]",
                "mt-3",
              ],
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
                "min-h-[40px]",
                "mt-3",
              ],
              input: ["placeholder:text-black "],
            }}
            type='email'
            placeholder='Email'
          />
          <Input
            classNames={{
              inputWrapper: [
                "shadow-xl",
                "bg-[#d9d9d9]",
                "min-h-[40px]",
                "mt-3",
              ],
              input: ["placeholder:text-black "],
            }}
            type='password'
            placeholder='Password'
          />
          <Input
            classNames={{
              inputWrapper: [
                "shadow-xl",
                "bg-[#d9d9d9]",
                "min-h-[40px]",
                "mt-3",
                "mb-10",
              ],
              input: ["placeholder:text-black "],
            }}
            type='password'
            placeholder='Confirm Password'
          />
          <Button
            type='submit'
            className='w-full mb-3 font-semibold text-2xl'
            color='primary'>
            Register
          </Button>
          <p className='text-gray-500 mr-3 inline'>Already have an account?</p>
          <Link className='text-gray-500 font-semibold' to='/'>
            Login
          </Link>
        </form>
      </div>
    </div>
  );
}
