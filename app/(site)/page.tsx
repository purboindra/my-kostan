import CardInformation from "../components/CardInformation";

type roomType = {
  roomId: number;
  isAvailable: boolean;
};

export default function Home() {
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
      roomId: 10,
      isAvailable: false,
    },
  ];

  return (
    <div className="flex flex-col h-full ml-[53px] my-32 mr-[68px] overflow-hidden overflow-y-auto">
      <div className="pb-14">
        <h1 className="font-semibold text-4xl text-blackColor">
          Mau Sewa Kos?
        </h1>
        <p className="text-base text-blackColor">
          Silahkan pilih kamar yang kosong.
        </p>
      </div>
      <div className="flex flex-row w-full gap-[39px] mt-[40px] justify-between">
        <div className="flex-2 flex-col">
          <h1 className="font-semibold text-base text-blackColor">
            Kost Mawar
          </h1>
          {/* ROOMS */}
          <div className="mt-[30px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6 gap-5">
            {melaatiRooms.map((room) => (
              <div
                key={room.roomId}
                className={`p-8 rounded-lg ${
                  room.isAvailable ? "bg-primaryColor" : "bg-secondaryColor"
                } flex items-center justify-center text-base font-semibold text-blackColor`}
              >
                {room.roomId}
              </div>
            ))}
          </div>
          <h1 className="font-semibold text-base text-blackColor mt-[43px]">
            Kost Melati
          </h1>
          {/* ROOMS */}
          <div className="mt-[30px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6 gap-5">
            {melaatiRooms.map((room) => (
              <div
                key={room.roomId}
                className={`p-8 rounded-lg ${
                  room.isAvailable ? "bg-primaryColor" : "bg-secondaryColor"
                } flex items-center justify-center text-base font-semibold text-blackColor`}
              >
                {room.roomId}
              </div>
            ))}
          </div>
        </div>
        <CardInformation />
      </div>
    </div>
  );
}
