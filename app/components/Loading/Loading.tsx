"use client";
import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loading({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflowX = "hidden";
      document.body.style.overflowX = "hidden";
      document.body.style.overflowY = "auto";
      document.documentElement.style.overflowY = "auto";
    }
  }, [isLoading]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              scale: 1.2,
              filter: "contrast(200%) saturate(150%)",
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] bg-[#4F46E5] w-screen h-screen font-honk text-6xl flex items-center justify-center pixelated"
          >
            <p className="animate-pulse">Loading</p>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        key="content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </>
  );
}
