import React from "react";

const CardInformation = () => {
  const informations = [
    "Kost Melati - Kamar No. 1 Telah membayar tagihan Agustus 2022 pada 13/05/2022",
    "Kost Mawar - Kamar No. 5 Telah membayar tagihan Agustus 2021 pada 1/03/2022",
    "Kost Melati - Kamar No. 2 Telah membayar tagihan Agustus 2022 pada 14/08/2022",
    "Kost Melati - Kamar No. 3 Telah membayar tagihan Agustus 2022 pada 14/08/2022",
    "Kost Melati - Kamar No. 4 Telah membayar tagihan Agustus 2022 pada 14/08/2022",
  ];

  return (
    <div className="shadow-xl rounded-2xl flex-1 flex-col h-full ml-[39px] py-16 px-8 items-center">
      <h1 className="text-base font-semibold text-blackColor">
        Latest Information
      </h1>
      <div className="mt-[42px] flex flex-col gap-4">
        {informations.map((info, index) => (
          <p className="text-xs" key={index}>
            {info}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CardInformation;
