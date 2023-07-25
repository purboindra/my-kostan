import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

interface SidebarItemProps {
  href: string;
  isActive?: boolean;
  icon: IconType;
  label: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  href,
  label,
  isActive,
}) => {
  return (
    <Link href={href} className="flex h-auto flex-row gap-[13px]">
      <Icon size={24} />
      <p
        className={`truncate w-full flex-1 text-xl 
        text-blackColor 
        ${isActive ? "font-bold" : "font-medium"} `}
      >
        {label}
      </p>
    </Link>
  );
};

export default SidebarItem;
