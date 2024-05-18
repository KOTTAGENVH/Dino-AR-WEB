"use client";
import React, { useEffect, useRef } from "react";
import AnimatedTrex from "@/components/dinosaurs/animated_t_rex";
import Archaeopteryx from "@/components/dinosaurs/archaeopteryx";

function Encyclopedia(){
  const homeRef = useRef<HTMLDivElement>(null);
  const legalRef = useRef<HTMLDivElement>(null);
  const lastScrollTime = useRef<number>(0);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      const currentTime = new Date().getTime();
      const timeDiff = currentTime - lastScrollTime.current;

      if (homeRef.current && legalRef.current) {
        const homeHeight = homeRef.current.clientHeight;
        const deltaY = event.deltaY;

        if (deltaY > 0 && timeDiff > 1000) {
          // Scrolling down
          legalRef.current.scrollIntoView({ behavior: "smooth" });
          lastScrollTime.current = currentTime;
        } else if (deltaY < 0) {
          // Scrolling up
          homeRef.current.scrollIntoView({ behavior: "smooth" });
          lastScrollTime.current = currentTime;
        }
      }
    };

    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div>
      <div ref={homeRef} style={{ height: "100vh" }}>
        <Archaeopteryx />
      </div>
      <div ref={legalRef} style={{ height: "100vh" }}>
        <AnimatedTrex />
      </div>
    </div>
  );
};

export default Encyclopedia;

