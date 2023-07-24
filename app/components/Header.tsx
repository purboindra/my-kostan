import React from "react";

interface IHeaderProps {
  children: React.ReactNode;
}

const Header: React.FC<IHeaderProps> = ({ children }) => {
  return (
    <div className=" h-fit w-full py-2 px-7">
      <div className="hidden md:flex items-center justify-between">
        {children}
      </div>
    </div>
  );
};

export default Header;
