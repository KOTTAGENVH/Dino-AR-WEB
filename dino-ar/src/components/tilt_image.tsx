"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface TiltImageProps {
  url: string;
}

const TiltImage: React.FC<TiltImageProps> = ({ url }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  if (!url || typeof url !== "string") {
    console.error("Invalid Image URL");
    return null;
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (e.target as HTMLDivElement).getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top; // y position within the element
    const halfWidth = rect.width / 2;
    const halfHeight = rect.height / 2;

    setRotate({
      x: ((y - halfHeight) / halfHeight) * 10,
      y: -((x - halfWidth) / halfWidth) * 10,
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="overflow-hidden select-none rounded-xl w-full h-full"
      animate={{
        rotateX: rotate.x,
        rotateY: rotate.y,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Image src={url} alt="T-Rex" width={900} height={100} draggable="false" itemProp="image" />
    </motion.div>
  );
};

export default TiltImage;
