"use client";

import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

type UserType = {
  email: string;
  password: string;
};

export default function Signup() {
  const [user, setUser] = useState<UserType | null>();

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

  const onSubmit = handleSubmit(async (data) => {
    const response = await fetch("/playground/api/signup/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      console.log("FAIL SUBMIT", response.body);
    }
    setUser({
      email: data.email,
      password: data.password,
    });
    reset();
  });

  return (
    <div className="w-full h-full flex flex-col gap-5">
      {!user ? (
        <>
          <h1>Sign Up First...</h1>
          <form className="flex flex-col gap-5" onSubmit={onSubmit}>
            <input
              className={`py-1 px-5 items-center w-72 flex border border-blackColor rounded-md ${
                errors.email &&
                "border border-rose-500 rounded-md focus:border-rose-500 focus:outline-none focus:ring-0"
              }`}
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                validate: {
                  matchPattern: (v) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                    "Email address must be a valid address",
                },
              })}
            />
            {errors.email && <p>{`${errors.email?.message}`}</p>}
            <input
              className={`py-1 px-5 items-center w-72 flex border border-blackColor rounded-md  ${
                errors.password &&
                "border border-rose-500 rounded-md focus:border-rose-500 focus:outline-none focus:ring-0"
              }`}
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                validate: {
                  minLength: (val) =>
                    val.length >= 6 ||
                    "Password length must be more than 6 characters",
                },
              })}
            />
            {errors.password && <p>{`${errors.password.message}`}</p>}

            <button
              className="p-3 border border-blackColor rounded-md w-72 bg-blue-700 text-white"
              onSubmit={onSubmit}
            >
              Sign Up
            </button>
          </form>
        </>
      ) : (
        <>
          <h1>{`Hello ${user.email} Welcome back `}</h1>
        </>
      )}
    </div>
  );
}
