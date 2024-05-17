"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import TiltImage from "@/components/tilt_image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <main className="mb-auto h-10 bg-black-500 h-full p-7 ">
        <div className="flex flex-row m-4  h-max flex-auto flex-wrap">
          <div className="mr-2 p-1.5 mt-24 h-auto">
          <TiltImage url="/wallpaper.jpeg" />
          </div>
          <div className="flex flex-col w-1/3">
            <motion.div
              animate={{ x: 100 }}
              transition={{ ease: "linear", duration: 2, x: { duration: 1 } }}
            >
              <div className="p-1.5">Dino AR</div>
              <div className="p-1.5  ">
                <p>
                  Dino AR is an augmented reality application that allows users
                  to view dinosaurs in their own environment. Users can choose
                  from a variety of dinosaurs and place them in their
                  surroundings. The application uses the device's camera to
                  create a realistic experience.
                </p>
              </div>
              
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
