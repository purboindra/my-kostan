import { BiListUl } from "react-icons/bi";

import CardInformation from "../components/CardInformation";
import RoomsGrid from "../components/RoomsGrid";

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      {/* FOR MOBILE VIEW */}
      <div className="md:hidden flex h-fit py-10 px-[32px] w-full items-center justify-between bg-primaryColor">
        <div className="text-blackColor w-6 h-6 hover:cursor-pointer">
          <BiListUl />
        </div>
        <h1 className="text-base font-semibold text-blackColor tracking-[0.66em]">
          KOSTKU
        </h1>
      </div>
      {/* END FOR MOBILE VIEW */}
      {/* DESKTOP VIEW */}
      <div className="pb-8 px-10 mt-12 flex flex-col md:items-start lg:items-start xl:items-start 2xl:items-start items-center">
        <h1 className="font-semibold text-4xl xl:text-4xl 2xl:text-4xl text-blackColor mb-2">
          Mau Sewa Kos?
        </h1>
        <p className="text-base text-blackColor">
          Silahkan pilih kamar yang kosong.
        </p>
      </div>
      <div className="flex px-11 md:flex-col sm:flex-col lg:flex-col xl:flex-row 2xl:flex-row flex-col w-full lg:gap-[39px] 2xl:gap-[39px] gap-5 lg:mt-4 2xl:mt-4 justify-between">
        <div className="flex flex-col ">
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
