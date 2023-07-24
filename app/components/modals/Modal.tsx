import * as Dialog from "@radix-ui/react-dialog";
import React from "react";
import { IoMdClose } from "react-icons/io";

interface IModalProps {
  title?: string;
  description?: string;
  isOpen?: boolean;
  onChange: (isOpen: boolean) => void;
  children: React.ReactNode;
}

const Modal: React.FC<IModalProps> = ({
  description,
  title,
  onChange,
  isOpen,
  children,
}) => {
  return (
    <Dialog.Root open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackColor bg-opacity-30 backdrop-blur-sm inset-0 fixed">
          <Dialog.Content className="bg-white py-[25px] px-12 focus:outline-none fixed drop-shadow-md border-[1px] border-[#C4C4C4] rounded-xl top-[50%] left-[50%] max-h-full h-full md:h-auto md:max-h-[85vh] w-full md:w-[90vw] md:max-w-[450px] translate-x-[-50%] translate-y-[-50%]">
            {title && <Dialog.Title>{title}</Dialog.Title>}
            {description && (
              <Dialog.Description>{description}</Dialog.Description>
            )}
            <div>{children}</div>
            <Dialog.Close asChild>
              <button className="text-neutral-400 hover:text-neutral-600 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:outline-none ">
                <IoMdClose />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
