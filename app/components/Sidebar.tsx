"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useMemo } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiBed, BiDoorOpen, BiListCheck, BiLogOut } from "react-icons/bi";
import CircleAvatar from "./CircleAvatar";
import SidebarItem from "./SidebarItem";
import { useSession } from "next-auth/react";
import useAuthModal from "../hooks/useAuthModal";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const { onOpen } = useAuthModal();

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

  if (status === "loading") {
    return <h1>Loading....</h1>;
  }

  return (
    <div className=" flex h-full">
      <div className="hidden md:flex flex-col md:py-[34px] lg:py-[34px] xl:py-[34px] 2xl:py-[34px] py-0 lg:px-[34px] xl:px-[34px] 2xl:px-[34px] md:px-[34px] w-[303px] bg-primaryColor items-start">
        <h1 className="text-base font-semibold tracking-[0.66em] text-blackColor">
          KOSTKU
        </h1>
        {!session?.user ? (
          <div
            onClick={onOpen}
            className="mt-2 flex items-start w-full text-lg font-semibold text-blackColor hover:cursor-pointer hover:text-xl"
          >
            LOGIN
          </div>
        ) : (
          <div className="flex flex-row gap-3 mt-[24px] items-center content-center">
            <CircleAvatar
              imageUrl="https://w0.peakpx.com/wallpaper/400/630/HD-wallpaper-johan-liebheart-libheart-liebert-monster-monster-without-name-otto-the-monster-thomas.jpg"
              className="h-12 w-12 object-cover rounded-full object-bottom"
              width={32}
              height={32}
            />
            <p className="text-xl text-[#3C3737] truncate flex-1">
              {session.user.name}
            </p>
          </div>
        )}
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
      <main className="flex-1 h-full lg:px-12 xl:px-12 2xl:px-12">
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
