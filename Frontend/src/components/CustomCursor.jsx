import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {

    if (window.matchMedia("(pointer: coarse)").matches) return;

    const updateMouse = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleHover = (e) => {
      const isInteractive = e.target.closest("a, button, [role='button'], input, textarea");
      setIsHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", updateMouse);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", updateMouse);
      window.removeEventListener("mouseover", handleHover);
    };
  }, []);

  return (
    <div className="hidden sm:block pointer-events-none fixed inset-0 z-[9999]">
      
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#6B8F7B] rounded-full shadow-[0_0_8px_#6B8F7B]"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          opacity: isHovered ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 1200, damping: 50, mass: 0.1 }}
      />

      <motion.div
        className="fixed top-0 left-0 rounded-full border border-[#6B8F7B]"
        animate={{
          x: mousePosition.x - (isHovered ? 12 : 8),
          y: mousePosition.y - (isHovered ? 12 : 8),
          width: isHovered ? 24 : 16,
          height: isHovered ? 24 : 16,
          backgroundColor: isHovered ? "rgba(107, 143, 123, 0.15)" : "transparent",
          borderColor: isHovered ? "#6B8F7B" : "rgba(107, 143, 123, 0.4)",
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
      />
    </div>
  );
}