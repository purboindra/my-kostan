"use client";

import React, { useCallback } from "react";
import useAuthModal from "../hooks/useAuthModal";
import { useSession } from "next-auth/react";

type roomType = {
  roomId: number;
  isAvailable: boolean;
};

interface IRoomsGrid {
  label: string;
}

const RoomsGrid: React.FC<IRoomsGrid> = ({ label }) => {
  const melaatiRooms: roomType[] = [
    {
      roomId: 1,
      isAvailable: false,
    },
    {
      roomId: 2,
      isAvailable: true,
    },
    {
      roomId: 3,
      isAvailable: true,
    },
    {
      roomId: 4,
      isAvailable: true,
    },
    {
      roomId: 5,
      isAvailable: false,
    },
    {
      roomId: 6,
      isAvailable: false,
    },
    {
      roomId: 7,
      isAvailable: false,
    },
    {
      roomId: 8,
      isAvailable: false,
    },
    {
      roomId: 9,
      isAvailable: true,
    },
    {
      roomId: 10,
      isAvailable: true,
    },
    {
      roomId: 11,
      isAvailable: true,
    },
    {
      roomId: 12,
      isAvailable: false,
    },
  ];

  const { onOpen } = useAuthModal();
  const { data: session } = useSession();

  const handleOnOpen = useCallback(() => {
    if (session?.user) return;
    onOpen();
  }, [session?.user, onOpen]);

  return (
    <div className="w-full flex flex-col">
      <h1 className="font-semibold text-base text-blackColor ">{label}</h1>
      {/* ROOMS */}
      <div className="mt-[30px] grid grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6 gap-4">
        {melaatiRooms.map((room) => (
          <div
            onClick={handleOnOpen}
            key={room.roomId}
            className={`w-[90px] h-[90px] rounded-lg shadow-lg mr-0 md:mr-0 sm:mr-0 lg:mr-[21px] xl:mr-[21px] 2xl:mr-[21px] ${
              room.isAvailable ? "bg-primaryColor" : "bg-secondaryColor"
            } flex items-center justify-center text-base font-semibold text-blackColor`}
          >
            {room.roomId}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomsGrid;
