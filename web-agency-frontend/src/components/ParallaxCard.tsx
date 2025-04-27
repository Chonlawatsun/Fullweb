"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Props = {
  children: React.ReactNode;
};

const ParallaxCard = ({ children }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.4"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);
const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);


  return (
    <motion.div ref={ref} style={{ y, opacity }} transition={{ duration: 0.8, ease: "easeOut" }}>
      {children}
    </motion.div>
  );
};

export default ParallaxCard;
