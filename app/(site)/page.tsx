import CardInformation from "../components/CardInformation";
import RoomsGrid from "../components/RoomsGrid";

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      {/* FOR MOBILE VIEW */}
      <div className="md:hidden sm:flex flex h-fit py-2 px-3 w-full items-center justify-between bg-primaryColor">
       
      </div>
      {/* DESKTOP VIEW */}
      <div className="pb-8">
      <h1 className="font-semibold text-base lg:text-4xl xl:text-4xl 2xl:text-4xl text-blackColor">
  Mau Sewa Kos?
</h1>

        <p className="lg:text-base xl:text-base 2xl:text-base text-xs text-blackColor">
          Silahkan pilih kamar yang kosong.
        </p>
      </div>
      <div className="flex md:flex-col sm:flex-col lg:flex-col xl:flex-row 2xl:flex-row flex-col w-full lg:gap-[39px] 2xl:gap-[39px] gap-5 lg:mt-4 2xl:mt-4 justify-between">
        <div className="flex-1 flex-col ">
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
