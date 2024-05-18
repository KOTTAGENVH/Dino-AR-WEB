import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";
import { Inter } from "@next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function Legal() {
  return (
    <div className=" bg-black h-screen">
      <Header />
      <div className="bg-black  h-5/6 w-full p-1">
        <div className="text-white bg-opacity-50 backdrop-blur-md h-4/5 w-10/12 xl:w-11/12 m-4 mt-8 xl:m-12 p-8 rounded-2xl shadow-lg">
          <p className={`${inter.className}text-xl xl:text-2xl m-2 text-center`}>
            Terms & Conditions
          </p>
          <p className={`${inter.className} text-sm xl:text-xl m-2 text-left`}>
            1. We are not responsible for any damage caused to you by our
            product.
            <br />
            2. All the images in the Dino-Ar web and ios app were sourced from
            Google and was not liscened during the time of use.
            <br />
            3. Ar model were sourced from Sketch fab and Turbo Squid during the
            time of use.
            <br />
            4. <a href="https://nowen-kottage.vercel.app">Coding and design rights are held by me (Nowen Kottage).</a>
            <br/>
            5. The Dino-Ar web and ios app is a project for educational purposes.
            <br/>
            6. <a href="https://github.com/KOTTAGENVH/Dino-AR-WEB">The source code for Dino-Ar web is available on Github and is liscened under MIT.</a>
            <br/> 
            7. <a href="https://github.com/KOTTAGENVH/Dino-Ar">The source code for Dino-Ar ios app is available on Github and is liscened under MIT.</a>            
            <br/> 
            8. The Dino-Ar ios app would be added to AppStore soon.
            <br/> 
            9. No warranty is provided for the Dino-Ar web and ios app.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Legal;
