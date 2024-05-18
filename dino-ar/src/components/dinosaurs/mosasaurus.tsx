import { Inter } from "@next/font/google";
import React from "react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function Mosasaurus() {
  return (
    <div className="bg-mosasaurus bg-center bg-cover h-full w-full p-1">
      <div className="flex flex-row flex-wrap  bg-opacity-50 backdrop-blur-md h-4/5 w-10/12 xl:w-11/12 m-4 mt-8 xl:m-12 p-8 rounded-2xl shadow-lg justify-between">
        <div className="text-white xl:w-5/12 xl:h-5/6 w-80 m-4 rounded-2xl p-5">
          <p className={`${inter.className} underline text-2xl m-2`}>
            Mosasaurus
          </p>
          <p className={`${inter.className} m-2`}>
            The Mosasaurus, a massive marine reptile from the Cretaceous, ruled
            the ancient oceans with prowess.
          </p>
          <p className={`${inter.className} m-2`}>
            Point Dino-Ar camera to marker
          </p>
        </div>
        <div className="justify-center bg-contain bg-center xl:w-5/12 xl:h-5/6 w-80 m-2 rounded-2xl">
          <img
            src="/markers/marker5.png"
            alt="Marker 5"
            className="w-full h-full rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Mosasaurus;
