import React, { useRef, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const MagneticButton = ({buttonName}) => {
  const buttonRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    animate(mouseX, 0, { type: "spring", stiffness: 300 });
    animate(mouseY, 0, { type: "spring", stiffness: 300 });
  };

  const xTransform = useTransform(mouseX, (x) => `${x * 0.3}px`);
  const yTransform = useTransform(mouseY, (y) => `${y * 0.3}px`);

  return (
    <div className="flex justify-center items-center h-48">
      <motion.button
        ref={buttonRef}
        className="relative px-8 py-3 text-lg font-semibold bg-[#251D64] text-white rounded-lg overflow-hidden"
        style={{
          x: xTransform,
          y: yTransform,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {buttonName}
      </motion.button>
    </div>
  );
};

export default MagneticButton;
