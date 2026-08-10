"use client";

import { useRef, type FC, type ReactNode, type MouseEvent } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  useReducedMotion,
} from "motion/react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

const TiltCard: FC<TiltCardProps> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const springConfig = { stiffness: 300, damping: 28, mass: 0.5 };
  const rotateX = useSpring(
    useTransform(py, [0, 1], [7, -7]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(px, [0, 1], [-7, 7]),
    springConfig
  );
  const scale = useSpring(1, springConfig);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    px.set((event.clientX - rect.left) / rect.width);
    py.set((event.clientY - rect.top) / rect.height);
  };

  const handleMouseEnter = () => {
    if (reduce) return;
    scale.set(1.02);
  };

  const handleMouseLeave = () => {
    if (reduce) return;
    px.set(0.5);
    py.set(0.5);
    scale.set(1);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={
        reduce
          ? undefined
          : { rotateX, rotateY, scale, transformPerspective: 800 }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default TiltCard;
