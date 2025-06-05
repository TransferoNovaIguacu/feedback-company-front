import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ProgressBar{
  total: number;
  current: number
}

export default function ProgressBar({current, total}:ProgressBar) {
// exemplo: 9 vai ser limitado a 8
  const clampedCurrent = Math.min(current, total);
  const progress = (clampedCurrent / total) * 100;

  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(function () {
    if (inView) {
      controls.start({ width: `${progress}%` });
    } else {
      controls.start({ width: 0 });
    }
  }, [inView, progress, controls]);

  return (
    <div
      ref={ref}
      className="w-full max-w-md p-4 bg-[#1e1e2f] text-white rounded-lg"
    >
      <div className="flex justify-between mb-1 text-sm font-medium">
        <span>Progresso</span>
        <span>{clampedCurrent} de {total}</span>
      </div>
      <div className="w-full h-2.5 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={controls}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
        />
      </div>
    </div>
  );
}
