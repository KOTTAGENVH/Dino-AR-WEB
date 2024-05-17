import Image from "next/image";
import React from "react";

function Footer() {
  return (
<div className="flex flex-col md:flex-row items-center justify-between h-auto md:h-16 m-1 p-3.5">
  <div className="text-center text-gray-600 text-sm mb-2 md:mb-0">
    &copy; 2024 Nowen Kottage. All code and design rights reserved.
  </div>
  <div>
    <a
      href="https://www.apple.com"
      target="_blank"
      className="flex items-center justify-center hover:border-transparent mt-2 md:mt-0"
    >
      <img
        src="/download_app_store.png"
        alt="T-Rex"
        className="w-20 md:w-auto h-8  mr-0 md:mr-56"
        style={{ borderRadius: "5px" }}
      />
    </a>
  </div>
  <div className="text-center text-gray-600 mt-2 md:mt-0">
    <a
      href="https://nowen-kottage.vercel.app"
      target="_blank"
      className="flex items-center justify-center hover:border-transparent text-sm"
    >
      <p>Contact</p>
    </a>
  </div>
</div>

  );
}

export default Footer;
