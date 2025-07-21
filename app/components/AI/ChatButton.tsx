import React, { useState, FormEvent, useEffect } from "react";
import { motion } from "framer-motion";

type ButtonProps = {
  isClick: boolean;
  setIsClick: (setIsClick: boolean) => void;
};

const ChatButton: React.FC<ButtonProps> = ({ isClick, setIsClick }) => {
  const [isHover, setIsHover] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [isRotate, setIsRotate] = useState(false);
  const [spinKey, setSpinKey] = useState(0);

  const handleButton = () => {
    setSpinKey((prev) => prev + 1);
    setIsRotate(true);
    setTimeout(() => {
      setIsHidden(!isHidden);
      setIsRotate(false);
      setIsClick(!isClick);
    }, 100);
  };

  return (
    <>
      <motion.div
        layoutId="chat"
        className="rounded-full shadow-lg fixed right-0 bottom-0 w-24 h-24 z-50 bg-[#332cb2] place-items-center mr-4 mb-4 cursor-pointer hover:bg-gray-100 transition-all duration-300"
        onClick={handleButton}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.4 }}
      >
        <img
          key={spinKey}
          src={
            isHover
              ? "assets/icon/chatbot.png"
              : "assets/icon/chatbotsleeper.png"
          }
          alt="AI"
          className={`object-cover w-16 h-16 mt-4 pointer-events-none transition-all duration-500 ease-in-out  ${
            isRotate ? "rotate-[360deg]" : ""
          } ${!isHidden ? "opacity-0 scale-0" : "opacity-100 scale-100"}`}
        />
      </motion.div>
    </>
  );
};

export default ChatButton;
