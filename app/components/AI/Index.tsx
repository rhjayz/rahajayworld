import React, { useState, FormEvent, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import ChatButton from "./ChatButton";
import ChatBox from "./ChatBox";

const AI: React.FC = () => {
  const [isClick, setIsClick] = useState(false);
  const [showContent, setShowContent] = useState(true);

  const handleContent = (value: boolean) => {
    setIsClick(value);
    if (value) {
      setTimeout(() => {
        setShowContent(false);
      }, 300);
    } else {
      setTimeout(() => {
        setShowContent(true);
      }, 300);
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {showContent ? (
          <ChatButton
            key="chat-button"
            isClick={isClick}
            setIsClick={handleContent}
          />
        ) : (
          <ChatBox
            key="chat-box"
            isClick={isClick}
            setIsClick={handleContent}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default AI;
