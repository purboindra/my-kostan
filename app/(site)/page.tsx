import { BiListUl } from "react-icons/bi";
import CardInformation from "../components/CardInformation";
import CircleAvatar from "../components/CircleAvatar";
import RoomsGrid from "../components/RoomsGrid";

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      {/* FOR MOBILE VIEW */}
      <div className="md:hidden sm:flex flex h-fit py-2 px-3 w-full items-center justify-between">
        <div className="h-9 w-9 flex justify-center items-center p-1  bg-white shadow-md rounded-sm hover:cursor-pointer">
          <BiListUl />
        </div>

        <div className="flex flex-row gap-3 mt-[24px] items-center content-center relative">
          <CircleAvatar
            imageUrl="https://w0.peakpx.com/wallpaper/400/630/HD-wallpaper-johan-liebheart-libheart-liebert-monster-monster-without-name-otto-the-monster-thomas.jpg"
            className="h-7 w-7 object-cover rounded-full object-bottom"
            width={22}
            height={22}
          />
          <p className="text-xs text-[#3C3737] truncate flex-1">
            Hi Johan Liebert
          </p>
        </div>
      </div>
      {/* DESKTOP VIEW */}
      <div className="pb-8">
        <h1 className="font-semibold text-4xl text-blackColor">
          Mau Sewa Kos?
        </h1>
        <p className="text-base text-blackColor">
          Silahkan pilih kamar yang kosong.
        </p>
      </div>
      <div className="flex md:flex-col sm:flex-col lg:flex-col xl:flex-row 2xl:flex-row flex-col w-full lg:gap-[39px] 2xl:gap-[39px] gap-5 lg:mt-4 2xl:mt-4 justify-between">
        <div className="flex flex-col">
          <RoomsGrid label="Kost Mawar" />
          <div className="mt-7">
            <RoomsGrid label="Kost Melati" />
          </div>
        </div>
        <CardInformation />
      </div>
    </div>
  );
}
