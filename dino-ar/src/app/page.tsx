"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import TiltImage from "@/components/tilt_image";
import { motion } from "framer-motion";
import { Inter } from "@next/font/google";
import { useMediaQuery } from "react-responsive";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const xValue = isMobile ? 20 : 100;

  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <main
        className={`flex-grow mb-auto bg-black-500 ${inter.className} p-0 xl:p-7`}
        
      >
        <div itemScope itemType="http://schema.org/SoftwareApplication" className="flex flex-row xl:m-4  h-max flex-auto flex-wrap">
          <div className="xl:mr-2 p-1.5 xl:mt-24 mt-0 h-auto ">
            <TiltImage url="/wallpaper.jpeg" />
          </div>
          <div className="flex flex-col xl:w-1/3  p-1.5 w-11/12">
            <motion.div
              animate={{ x: xValue }}
              transition={{ ease: "linear", duration: 2, x: { duration: 1 } }}
            >
              <div className="xl:p-1.5 text-2xl xl:text-6xl text-left" itemProp="name">
                Dino AR
              </div>
              <div className="p-1.5 xl:text-xl xl:mt-24 text-base text-left  w-full">
                <p className=" px-8  xl:px-0">
                  Dino AR is an augmented reality programme that lets users
                  visualise dinosaurs in their surroundings using a marker.
                  Users can access details about several dinosaurs on the web
                  and view them on AR by pointing the iOS app to the marker. The
                  mobile app makes use of the device camera to provide a
                  realistic experience.
                </p>
              </div>
              <button className="p-1.5 bg-sky-700 lg:bg-black-500 text-white mt-16 xl:mt-24 hover:bg-teal-700 rounded-xl">
                <a href="/dinosaurs">
                  Time Travel <span className="ml-1">&#8594;</span>
                </a>
              </button>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
