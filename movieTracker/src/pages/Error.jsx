import { Button } from "@nextui-org/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export function Error() {
  const navigate = useNavigate();
  return (
    <section className='m-10 flex flex-col justify-center items-center'>
      <h2 className='text-2xl font-semibold'>We don't have this Page</h2>
      <Button onPress={() => navigate(-1)}>come back</Button>
    </section>
  );
}
