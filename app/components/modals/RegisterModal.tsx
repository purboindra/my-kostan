"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";
import useAuthModal from "@/app/hooks/useAuthModal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import Modal from "./Modal";
import Input from "../Inputs";
import Button from "../Button";

const RegisterModal = () => {
  const { isOpen, onOpen, onClose } = useAuthModal();

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
    signIn("credentials", {
      redirect: false,
      email: data.email,
      name: data.username,
      password: data.password,
    })
      .then((resp) => {
        if (resp?.ok) {
          console.log("RESPONSE", resp.url);
          onClose();
          reset();
        }
      })
      .catch((e) => console.log(e));
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
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <Input
            id="email"
            label="Email"
            type="email"
            errors={errors}
            messageRequired="This email field is required"
            register={register}
            required={true}
          />
          {errors.email && (
            <p className="text-xs text-rose-700 mt-1">{`${errors.email.message}`}</p>
          )}
          <Input
            id="username"
            label="Name"
            errors={errors}
            type="text"
            messageRequired="This user name field is required"
            register={register}
            required={true}
          />
          {errors.username && (
            <p className="text-xs text-rose-700 mt-1">{`${errors.username.message}`}</p>
          )}
          {/* <Input label="ID Card" /> */}
          <Input
            id="password"
            errors={errors}
            label="Password"
            type="password"
            required={true}
            messageRequired="This password field is required"
            register={register}
          />
          {errors.password && (
            <p className="text-xs text-rose-700 mt-1">{`${errors.password.message}`}</p>
          )}
          <div className="flex justify-end w-full mt-4">
            <p className="text-secondaryColor text-xs italic underline">
              See room details
            </p>
          </div>
          <Button onClick={handleSubmit(onSubmit)} className="mt-[54px]">
            REGISTER
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export default RegisterModal;
