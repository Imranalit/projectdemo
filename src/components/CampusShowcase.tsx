"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { MotionReveal } from "@upendra.manike/next-motion-kit";

interface CampusProps {
  name: string;
  description: string;
  imageUrl: string;
  index: number;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function CampusShowcase({ name, description, imageUrl, index }: CampusProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.section
      className={`h-[600px] flex items-center justify-center p-8 rounded-lg overflow-hidden border border-slate-200 hover:border-[#f7c815] transition-all duration-300 ${
        isEven ? "bg-white shadow-md hover:shadow-lg" : "bg-blue-50/50 shadow-md hover:shadow-lg"
      }`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <div className={`w-full h-full flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}>
        <motion.div variants={itemVariants} className="w-full md:w-1/2 flex flex-col justify-center gap-4">
          <MotionReveal motionPreset={isEven ? "slideLeft" : "slideRight"}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0f3b73] mb-2">
              {name}
            </h2>
          </MotionReveal>
          <MotionReveal motionPreset="fadeUp" delay={0.2}>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed border-l-4 border-[#f7c815] pl-4">
              {description}
            </p>
          </MotionReveal>
          <MotionReveal motionPreset="fadeUp" delay={0.4}>
            <button className="mt-6 px-6 py-3 bg-[#0f3b73] hover:bg-[#f7c815] hover:text-[#0f3b73] text-white font-bold rounded-sm transition-colors w-fit uppercase tracking-wide text-sm shadow-md">
              Explore Facility
            </button>
          </MotionReveal>
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          className="w-full md:w-1/2 h-[250px] md:h-[80%] relative rounded-md overflow-hidden shadow-inner group"
        >
          <div className="absolute inset-0 bg-[#0f3b73]/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
          <img 
            src={imageUrl} 
            alt={name}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
