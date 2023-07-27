"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <div className="w-full h-full flex flex-col gap-5">
      <h1>Sign Up First...</h1>
      <form className="flex flex-col gap-5" onSubmit={onSubmit}>
        <input
          className={`py-1 px-5 items-center w-72 flex border border-blackColor rounded-md ${
            errors.email && "border border-rose-500 rounded-md"
          }`}
          placeholder="Email"
          {...register("email", { required: true })}
        />
        {errors.email && <p>Emal is required</p>}
        <input
          className={`py-1 px-5 items-center w-72 flex border border-blackColor rounded-md  ${
            errors.password &&
            "border border-rose-500 rounded-md focus:border-rose-500 focus:outline-none focus:ring-0"
          }`}
          placeholder="Password"
          {...register("password", { required: true })}
        />
        {errors.password && <p>Please enter a password</p>}

        <button
          className="p-3 border border-blackColor rounded-md w-72 bg-blue-700 text-white"
          onSubmit={onSubmit}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
