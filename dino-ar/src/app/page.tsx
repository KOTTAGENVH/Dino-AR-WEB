"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import TiltImage from "@/components/tilt_image";
import { motion } from "framer-motion";
import { Inter } from "@next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <main
        className={`mb-auto h-10 bg-black-500 h-full p-7 ${inter.className}`}
      >
        <div className="flex flex-row m-4  h-max flex-auto flex-wrap">
          <div className="mr-2 p-1.5 mt-24 h-auto">
            <TiltImage url="/wallpaper.jpeg" />
          </div>
          <div className="flex flex-col w-1/3">
            <motion.div
              animate={{ x: 100 }}
              transition={{ ease: "linear", duration: 2, x: { duration: 1 } }}
            >
              <div className="p-1.5 text-6xl">Dino AR</div>
              <div className="p-1.5 text-xl mt-24">
                <p>
                  Dino AR is an augmented reality programme that lets users
                  visualise dinosaurs in their surroundings using a marker.
                  Users can access details about several dinosaurs on the web
                  and view them on AR by pointing the iOS app to the marker. The
                  mobile app makes use of the device camera to provide a
                  realistic experience.
                </p>
              </div>
              <button className="p-1.5 bg-black-500 text-white mt-24 hover:bg-sky-700 rounded-xl">
                <a href="/encyclopedia">
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
