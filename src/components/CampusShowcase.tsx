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
      className={`min-h-screen flex items-center justify-center p-8 md:p-24 ${
        isEven ? "bg-white" : "bg-gray-50"
      }`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className={`max-w-6xl w-full flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-12 items-center`}>
        <motion.div variants={itemVariants} className="w-full md:w-1/2 flex flex-col justify-center gap-6">
          <MotionReveal motionPreset={isEven ? "slideLeft" : "slideRight"}>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-slate-900">
              {name}
            </h2>
          </MotionReveal>
          <MotionReveal motionPreset="fadeUp" delay={0.2}>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              {description}
            </p>
          </MotionReveal>
          <MotionReveal motionPreset="fadeUp" delay={0.4}>
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors w-fit shadow-lg shadow-blue-500/30">
              Explore Campus
            </button>
          </MotionReveal>
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          className="w-full md:w-1/2 h-[400px] md:h-[600px] relative rounded-2xl overflow-hidden shadow-2xl group"
        >
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
          {/* Using an img tag with placeholder for demo purposes */}
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
