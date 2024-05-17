"use client";
import React, { useEffect, useRef } from "react";
import Legal from "./legal/page";
import Home from "./Home/page";

const App: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const legalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (homeRef.current && legalRef.current) {
        const homeHeight = homeRef.current.clientHeight;
        if (window.scrollY + window.innerHeight >= homeHeight) {
          legalRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div ref={homeRef} style={{ height: "100vh" }}>
        <Home />
      </div>
      <div ref={legalRef} style={{ height: "100vh" }}>
        <Legal />
      </div>
    </div>
  );
};

export default App;

