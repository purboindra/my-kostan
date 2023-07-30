"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import Modal from "./Modal";
import Input from "../Inputs";
import Button from "../Button";
import useAuthModal from "@/app/hooks/useAuthModal";

const RegisterModal = () => {
  const { isOpen, onOpen, onClose } = useAuthModal();
  const [isLoading, setIsLoading] = useState(false);

  const onChange = (val: boolean) => {
    if (!val) {
      onClose();
    }
  };

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    if (errors.email || errors.password || errors.password) {
      console.log("EMAIL NOT CONTAINS @");
      setIsLoading(false);
    } else {
      signIn("credentials", {
        redirect: false,
        email: data.email,
        name: data.username,
        password: data.password,
      })
        .then((resp) => {
          if (resp?.ok) {
            onClose();
            reset();
          }
        })
        .catch((e) => console.log(e))
        .finally(() => setIsLoading(false));
    }
  };

  return (
    <Modal isOpen={isOpen} onChange={onChange}>
      <div className="flex flex-col w-full items-center">
        <Image
          alt="guest-registration"
          src="/icons/icon_modal.png"
          width={24}
          height={24}
          unoptimized={false}
          priority
          className="h-[83px] w-14 items-center flex "
        />
        <div className="mt-[37px] w-full items-start">
          <h1 className="text-xl font-semibold text-[#3C3737]  ">
            Guest Registration
          </h1>
          <p className="text-xs text-[#3c3737] overflow">
            Fill the form below to complete the registration KOST
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col"
        >
          <Input
            id="email"
            label="Email"
            type="email"
            errors={errors}
            register={register}
            required={true}
            validate={(v: any) =>
              /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
              "Email address must be a valid address"
            }
          />
          {errors.email?.type === "required" && (
            <span className="text-xs text-rose-700 mt-1">
              Email field is required
            </span>
          )}
          {errors.email?.type === "validate" && (
            <span className="text-xs text-rose-700 mt-1">
              {`${errors.email?.message}`}
            </span>
          )}
          <Input
            id="username"
            label="Name"
            errors={errors}
            type="text"
            register={register}
            required={true}
          />
          {errors.username?.type === "required" && (
            <p className="text-xs text-rose-700 mt-1">
              Username field is required
            </p>
          )}
          <Input
            id="password"
            errors={errors}
            label="Password"
            type="password"
            required={true}
            register={register}
            validate={(v: any) =>
              v.length >= 6 || "Password should be more than 6 characters"
            }
            aria-invalid={errors.password ? "true" : "false"}
          />
          {errors.password?.type === "validate" && (
            <span className="text-xs text-rose-700 mt-1">
              {`${errors.password.message}`}
            </span>
          )}
          {errors.password?.type === "required" && (
            <span className="text-xs text-rose-700 mt-1">
              Password field is required
            </span>
          )}

          <div className="flex justify-end w-full mt-4">
            <p className="text-secondaryColor text-xs italic underline">
              See room details
            </p>
          </div>
          <Button
            onClick={handleSubmit(onSubmit)}
            className="mt-[54px]"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "REGISTER"}
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export default RegisterModal;
