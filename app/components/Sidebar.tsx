"use client";

import React, { useMemo } from "react";
import CircleAvatar from "./CircleAvatar";
import { usePathname } from "next/navigation";
import { AiOutlineHome } from "react-icons/ai";
import { BiBed, BiDoorOpen, BiListCheck, BiLogOut } from "react-icons/bi";
import SidebarItem from "./SidebarItem";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        icon: AiOutlineHome,
        label: "My Dashboard",
        isActive: pathname === "/",
        href: "/",
      },
      {
        icon: BiBed,
        label: "Room",
        isActive: pathname === "/room",
        href: "/room",
      },
      {
        icon: BiDoorOpen,
        label: "Kost",
        isActive: pathname === "/kost",
        href: "/kost",
      },
      {
        icon: BiListCheck,
        label: "Report",
        isActive: pathname === "/report",
        href: "/report",
      },
      {
        icon: BiLogOut,
        label: "Logout",
        isActive: false,
        href: "/",
      },
    ],
    [pathname]
  );

  return (
    <div className="h-full hidden md:flex">
      <div className="flex flex-col py-[34px] w-[303px] bg-primaryColor px-[33px] items-start justify-start">
        <h1 className="text-base font-semibold tracking-[0.66em] text-blackColor">
          KOSTKU
        </h1>
        <div className="flex flex-row gap-3 mt-[24px] items-center content-center relative">
          <CircleAvatar
            imageUrl="https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
            className="h-12 w-12 object-cover rounded-full"
            width={32}
            height={32}
          />
          <p className="text-xl text-[#3C3737] truncate flex-1">
            Hi James Moriarty
          </p>
        </div>
        <div className="flex flex-col gap-3 mt-[39px]">
          {routes.map((route) => (
            <SidebarItem
              key={route.label}
              href={route.href}
              icon={route.icon}
              label={route.label}
              isActive={route.isActive}
            />
          ))}
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
