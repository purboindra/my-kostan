import React from "react";

const TableRoom = () => {
  const listHeader = ["No", "Kamar", "Status", "Action"];

  const listRooms = [
    {
      kamar: "Kos Melati",
      isFilled: true,
    },
    {
      kamar: "Kos Mawar",
      isFilled: true,
    },
    {
      kamar: "Kos Melati",
      isFilled: false,
    },
    {
      kamar: "Kos Melati",
      isFilled: true,
    },
    {
      kamar: "Kos Mawar",
      isFilled: false,
    },
    {
      kamar: "Kos Melati",
      isFilled: true,
    },
    {
      kamar: "Kos Melati",
      isFilled: false,
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex flex-row w-full gap-[200px] py-4 px-8 bg-primaryColor bg-opacity-20 rounded-lg">
        {listHeader.map((title, index) => (
          <h1
            key={title}
            className={`${
              index === 2 && "mr-16"
            } text-base font-semibold text-[#6C727C]`}
          >
            {title}
          </h1>
        ))}
      </div>
      <div className="mt-[26px] flex flex-col gap-6 ">
        {listRooms.map((room, index) => (
          <div
            key={index}
            className="flex flex-row w-full justify-between items-center py-4 px-8 bg-white rounded-lg shadow-md text-base text-blackColor font-semibold"
          >
            <p>{`${index + 1}.`}</p>
            <p>{room.kamar}</p>
            <p>{room.isFilled ? "Terisi" : "Kosong"}</p>
            <div className="flex flex-row gap-12 items-center">
              <button className="flex-1 items-center py-1 w-[107px] rounded-md bg-primaryColor text-white text-base font-semibold">
                Edit
              </button>
              <button className="flex-1 items-center py-1 w-[107px] rounded-md bg-secondaryColor text-white text-base font-semibold">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableRoom;
