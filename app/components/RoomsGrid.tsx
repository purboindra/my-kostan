"use client";

import React from "react";
import useAuthModal from "../hooks/useAuthModal";

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

  return (
    <div>
      <h1 className="font-semibold text-base text-blackColor ">{label}</h1>
      {/* ROOMS */}
      <div className="mt-[30px] grid grid-cols-4  2xl:grid-cols-6 gap-5">
        {melaatiRooms.map((room) => (
          <div
            onClick={onOpen}
            key={room.roomId}
            className={`p-8 rounded-lg shadow-lg ${
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
