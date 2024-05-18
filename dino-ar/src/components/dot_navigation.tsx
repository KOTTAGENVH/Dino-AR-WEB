import React, { MutableRefObject, useState, useEffect } from 'react';

interface DotNavigationProps {
  sectionRefs: MutableRefObject<HTMLDivElement | null>[];
}

const DotNavigation: React.FC<DotNavigationProps> = ({ sectionRefs }) => {
  const [activeSectionIndex, setActiveSectionIndex] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      let currentSectionIndex = 0;

      sectionRefs.forEach((ref, index) => {
        const section = ref.current;
        if (section) {
          const { top, bottom } = section.getBoundingClientRect();
          if (top <= window.innerHeight / 2 && bottom >= window.innerHeight / 2) {
            currentSectionIndex = index;
          }
        }
      });

      setActiveSectionIndex(currentSectionIndex);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionRefs]);

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2">
      {sectionRefs.map((ref, index) => (
    <button
    key={index}
    className="relative w-4 h-4 rounded-full bg-gray-400 hover:w-48 hover:h-8 hover:bg-gray-600 transition  self-end"
    onClick={() => ref.current?.scrollIntoView({ behavior: 'smooth' })}
  >
    <div className="relative w-full h-full">
      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
        <img src="/dinoAr.jpg" alt="Image" className="w-6 h-6 rounded-full" />
        <span className="ml-2 text-white">Text</span>
      </div>
      {index === activeSectionIndex && (
        <div className="absolute inset-0 rounded-full border-2 border-blue-500" />
      )}
    </div>
  </button>
  
     
      ))}
    </div>
  );
};

export default DotNavigation;
