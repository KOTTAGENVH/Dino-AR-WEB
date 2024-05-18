"use client";
import React, { useEffect, useRef } from "react";
import AnimatedTrex from "@/components/dinosaurs/animated_t_rex";
import Archaeopteryx from "@/components/dinosaurs/archaeopteryx";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Flying_pteradactal from "@/components/dinosaurs/flying_pteradactal";
import Godzilla_amphibia from "@/components/dinosaurs/godzilla_amphibia";
import Stego from "@/components/dinosaurs/stego";
import Suchominus from "@/components/dinosaurs/suchominus";
import Ticeratops_skeleton from "@/components/dinosaurs/ticeratops_skeleton";
import Ticeratops from "@/components/dinosaurs/ticeratops";
import Trex from "@/components/dinosaurs/trex";
import DotNavigation from "@/components/dot_navigation";
import Mosasaurus from "@/components/dinosaurs/mosasaurus";

function Dinosaurs() {
  const archaeopteryxRef = useRef<HTMLDivElement>(null);
  const animatedTrexRef = useRef<HTMLDivElement>(null);
  const flying_pteradactalRef = useRef<HTMLDivElement>(null);
  const godzilla_amphibiaRef = useRef<HTMLDivElement>(null);
  const mosasaurusRef = useRef<HTMLDivElement>(null);
  const stegoRef = useRef<HTMLDivElement>(null);
  const suchominusRef = useRef<HTMLDivElement>(null);
  const ticeratops_skeletonRef = useRef<HTMLDivElement>(null);
  const ticeratopsRef = useRef<HTMLDivElement>(null);
  const trexRef = useRef<HTMLDivElement>(null);
  const lastScrollTime = useRef<number>(0);

  const sectionRefs = [
    archaeopteryxRef,
    animatedTrexRef,
    flying_pteradactalRef,
    godzilla_amphibiaRef,
    mosasaurusRef,
    stegoRef,
    suchominusRef,
    ticeratops_skeletonRef,
    ticeratopsRef,
    trexRef,
  ];

  const imageURL = [
    "/background-images/archaeopteryx.jpeg",
    "/background-images/animated_t_rex.png",
    "/background-images/flying_pteradactal.png",
    "/background-images/godzilla_amphibia.jpeg",
    "/background-images/mosasaurus.jpeg",
    "/background-images/stego.jpeg",
    "/background-images/suchominus.jpeg",
    "/background-images/ticeratops_skeleton.jpeg",
    "/background-images/ticeratops.jpeg",
    "/background-images/trex.jpeg",
  ];

  const text = [
    "Archaeopteryx",
    "Animated T-Rex",
    "Flying Pteradactal",
    "Godzilla Amphibia",
    "Mosasaurus",
    "Stego",
    "Suchominus",
    "Ticeratops Skeleton",
    "Ticeratops",
    "T-Rex",
  ];

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      const currentTime = new Date().getTime();
      const timeDiff = currentTime - lastScrollTime.current;

      if (timeDiff > 1000) {
        const deltaY = event.deltaY;
        const currentSectionIndex = sectionRefs.findIndex((ref) => {
          const section = ref.current;
          if (!section) return false;
          const { top, bottom } = section.getBoundingClientRect();
          return (
            top <= window.innerHeight / 2 && bottom >= window.innerHeight / 2
          );
        });

        if (currentSectionIndex !== -1) {
          let newSectionIndex: number;
          if (deltaY > 0) {
            // Scrolling down
            newSectionIndex = Math.min(
              sectionRefs.length - 1,
              currentSectionIndex + 1
            );
          } else {
            // Scrolling up
            newSectionIndex = Math.max(0, currentSectionIndex - 1);
          }

          sectionRefs[newSectionIndex].current?.scrollIntoView({
            behavior: "smooth",
          });
          lastScrollTime.current = currentTime;
        }
      }
    };

    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [sectionRefs, lastScrollTime]); // Include sectionRefs and lastScrollTime as dependencies

  return (
    <div>
      <Header />
      <DotNavigation
        sectionRefs={sectionRefs}
        imageURL={imageURL}
        text={text}
      />
      <div ref={archaeopteryxRef} className="h-screen">
        <Archaeopteryx />
      </div>
      <div ref={animatedTrexRef} className="h-screen">
        <AnimatedTrex />
      </div>
      <div ref={flying_pteradactalRef} className="h-screen">
        <Flying_pteradactal />
      </div>
      <div ref={godzilla_amphibiaRef} className="h-screen">
        <Godzilla_amphibia />
      </div>
      <div ref={mosasaurusRef} className="h-screen">
        <Mosasaurus />
      </div>
      <div ref={stegoRef} className="h-screen">
        <Stego />
      </div>
      <div ref={suchominusRef} className="h-screen">
        <Suchominus />
      </div>
      <div ref={ticeratops_skeletonRef} className="h-screen">
        <Ticeratops_skeleton />
      </div>
      <div ref={ticeratopsRef} className="h-screen">
        <Ticeratops />
      </div>
      <div ref={trexRef} className="h-screen">
        <Trex />
      </div>
      <Footer />
    </div>
  );
}

export default Dinosaurs;
