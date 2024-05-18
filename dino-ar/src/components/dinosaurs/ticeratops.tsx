import { Inter } from "@next/font/google";
import React from "react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function Ticeratops() {
  return (
    <div className="bg-ticeratops bg-center bg-cover h-full w-full p-1">
      <div className="flex flex-row flex-wrap  bg-opacity-50 backdrop-blur-md h-4/5 w-10/12 xl:w-11/12 m-4 mt-8 xl:m-12 p-8 rounded-2xl shadow-lg justify-between">
        <div className="text-white xl:w-5/12 xl:h-5/6 w-80 m-4 rounded-2xl p-5">
          <p className={`${inter.className} underline text-2xl m-2`}>
            Ticeratops
          </p>
          <p className={`${inter.className} m-2`}>
            The Triceratops, with its three distinctive horns, roamed the Earth
            during the Late Cretaceous period.
          </p>
          <p className={`${inter.className} m-2`}>
            Point Dino-Ar camera to marker
          </p>
        </div>
        <div className="justify-center bg-contain bg-center xl:w-5/12 xl:h-5/6 w-80 m-2 rounded-2xl">
          <img
            src="/markers/marker7.jpeg"
            alt="Marker 7"
            className="w-full h-full rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Ticeratops;
