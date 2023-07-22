"use client";

import Image from "next/image";
import Modal from "./Modal";
import Input from "../Inputs";
import Button from "../Button";

const RegisterModal = () => {
  return (
    <Modal isOpen={true} onChange={(val) => false}>
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
        <Input label="Name" />
        <Input label="ID Card" />
        <Input label="Phone Number" />
        <div className="flex justify-end w-full mt-4">
          <p className="text-secondaryColor text-xs italic underline">
            See room details
          </p>
        </div>
        <Button className="mt-[54px]">REGISTER</Button>
      </div>
    </Modal>
  );
};

export default RegisterModal;
