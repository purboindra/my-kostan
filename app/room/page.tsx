import { BiPlus } from "react-icons/bi";
import TableRoom from "../components/TableRoom";

export default function Room() {
  return (
    <div className="flex flex-col h-full w-full lg:px-0 xl:px-0 2xl:px-0 px-5 lg:py-0 xl:py-0 2xl:py-0 py-7">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-1 items-start">
          <h1 className="text-4xl font-semibold text-blackColor">Room</h1>
          <p className="text-base text-blackColor">Menambahkan kamar baru</p>
        </div>
        <button className="py-3 px-4 rounded-md bg-primaryColor flex items-center justify-center">
          <div className="flex flex-row gap-3 justify-center items-center">
            <div className="flex p-1 border-2 border-white rounded-full">
              <div className="text-white w-5 h-5 flex items-center justify-center">
                <BiPlus />
              </div>
            </div>
            <h1 className="text-base font-semibold text-white">New Room</h1>
          </div>
        </button>
      </div>
      <div className="mt-[45px]">
        <TableRoom />
      </div>
    </div>
  );
}
