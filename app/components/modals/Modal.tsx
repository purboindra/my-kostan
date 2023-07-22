import * as Dialog from "@radix-ui/react-dialog";
import React from "react";

interface IModalProps {
  title?: string;
  description?: string;
  isOpen?: boolean;
  onChange: (isOpen?: boolean) => void;
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
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
