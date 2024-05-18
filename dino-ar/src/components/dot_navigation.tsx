import Image from "next/image";
import React, { MutableRefObject, useState, useEffect } from "react";

interface DotNavigationProps {
  sectionRefs: MutableRefObject<HTMLDivElement | null>[];
  imageURL: string[];
  text: string[];
}

const DotNavigation: React.FC<DotNavigationProps> = ({
  sectionRefs,
  imageURL,
  text,
}) => {
  const [activeSectionIndex, setActiveSectionIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  useEffect(() => {
    const handleScroll = () => {
      let currentSectionIndex = 0;
      sectionRefs.forEach((ref, index) => {
        const section = ref.current;
        if (section) {
          const { top, bottom } = section.getBoundingClientRect();
          if (
            top <= window.innerHeight / 2 &&
            bottom >= window.innerHeight / 2
          ) {
            currentSectionIndex = index;
          }
        }
      });

      setActiveSectionIndex(currentSectionIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionRefs]);

  return (
    <div
      className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {sectionRefs.map((ref, index) => (
        <button
          key={index}
          className="relative w-4 h-4 rounded-full bg-gray-400 hover:w-48 hover:h-8 hover:bg-gray-600 transition  self-end"
          onClick={() => ref.current?.scrollIntoView({ behavior: "smooth" })}
        >
          <div className="relative w-full h-full">
            {/* <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <img
                src="/dinoAr.jpg"
                alt="Image"
                className="w-6 h-6 rounded-full"
              />
              <span className="ml-2 text-white">Text</span>
            </div> */}
            {isHovered && index === activeSectionIndex && (
              <div className="absolute inset-0 flex rounded-full border-2 border-blue-500 items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <img
                  src={imageURL[index]}
                  alt="Image"
                  className="w-6 h-6 rounded-full"
                />
                <span className="ml-2 text-white">{text[index]}</span>
              </div>
            )}

            {!isHovered && index === activeSectionIndex && (
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity" />
            )}
            {index != activeSectionIndex && (
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <Image
                  src={imageURL[index]}
                  alt="Image"
                  className="w-6 h-6 rounded-full  "
                  width={24}
                  height={24}
                />
                <span className="ml-2 text-white">{text[index]}</span>
              </div>
            )}
          </div>
        </button>
      ))}
    </div>
  );
};

export default DotNavigation;
