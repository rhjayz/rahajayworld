import React, { useState, FormEvent, useEffect } from "react";
import { m, motion } from "framer-motion";

type ChatBoxProps = {
  isClick: boolean;
  setIsClick: (setIsClick: boolean) => void;
};

type MsgProps = {
  role: "user" | "assistant";
  content: string;
};

const TypingDots = () => {
  return (
    <div className="flex space-x-1">
      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
    </div>
  );
};

const ChatBox: React.FC<ChatBoxProps> = ({ isClick, setIsClick }) => {
  const [inputChat, setInputChat] = useState("");
  const [isMessage, setIsMessage] = useState<MsgProps[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [aiTypingText, setAiTypingText] = useState("");
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputChat.trim()) return;

    const newMsg: MsgProps[] = [
      ...isMessage,
      { role: "user", content: inputChat },
    ];
    setIsMessage(newMsg);
    setInputChat("");
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: newMsg }),
      });

      const data = await response.json();
      const aiReply = data.reply;
      setAiTypingText("");
      let i = 0;

      const typingInterval = setInterval(() => {
        if (i < aiReply.length) {
          setIsTyping(false);
          setAiTypingText((prev) => prev + aiReply.charAt(i));
          i++;
        } else {
          clearInterval(typingInterval);
          const finalReply = aiReply;
          setTimeout(() => {
            setAiTypingText("");
            setIsMessage((prev) => [
              ...prev,
              { role: "assistant", content: finalReply },
            ]);
          }, 100);
        }
      }, 30);
    } catch (error) {
      console.log("AI Error:", error);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [aiTypingText, isMessage]);

  return (
    <>
      <motion.div
        layoutId="chat"
        className="chatbox-base z-50 fixed bottom-0 right-0 mr-4 mb-4 bg-white p-6 rounded-lg border border-[#e5e7eb] w-[390px] h-[534px]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <button
          className="absolute top-2 right-2 text-md  text-[#4f46e5] font-jersey10 hover:bg-[#4f46e5] hover:text-white px-2 py-1 rounded-md transition"
          onClick={() => setIsClick(!isClick)}
        >
          ▼
        </button>

        <div className="flex items-center mb-6 relative p-0 mx-0">
          {/* Kiri: Text + Icon */}
          <div className="flex items-center gap-0">
            <p className="text-3xl text-[#4f46e5] font-jersey10 m-0 p-0">
              Rjay AI
            </p>
            <svg
              stroke="none"
              fill="#4f46e5"
              height="30"
              width="30"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
            </svg>
          </div>

          {/* Kanan: Tombol X */}
        </div>
        <hr />
        <div className="pr-4 h-full chatbox-container ">
          <section className="chat overflow-y-auto h-[400px] px-auto   w-[340px] scroll-container">
            <div className="flex gap-3 my-4 text-gray-600 text-sm flex-1">
              <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                <div className="rounded-full bg-gray-100 border p-1">
                  <img
                    src={"assets/icon/chatbot.png"}
                    className="object-cover"
                  />
                </div>
              </span>
              <p className="leading-relaxed whitespace-pre-line">
                <span className="block font-bold text-gray-700">Rjay</span>
                Hello, I'm Rjay. I am an assistant who will help you.
              </p>
            </div>
            {isMessage.map((data, index) => (
              <div
                key={index + data.content.slice(0, 5)}
                className="flex gap-3 my-4 text-gray-600 text-sm flex-1"
              >
                <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                  <div className="rounded-full bg-gray-100 border p-1">
                    <img
                      src={
                        data.role === "assistant"
                          ? "assets/icon/chatbot.png"
                          : "assets/icon/user.png"
                      }
                      className="object-cover"
                    />
                  </div>
                </span>
                <p className="leading-relaxed whitespace-pre-line">
                  <span className="block font-bold text-gray-700">
                    {data.role === "assistant" ? "Rjay" : "You"}
                  </span>
                  {data.content}
                </p>
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-3 my-4 text-gray-600 text-sm flex-1">
                <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                  <div className="rounded-full bg-gray-100 border p-1">
                    <img
                      src="assets/icon/chatbot.png"
                      className="object-cover"
                    />
                  </div>
                </span>
                <div className="leading-relaxed whitespace-pre-line">
                  <span className="block font-bold text-gray-700 mb-2">
                    Rjay
                  </span>
                  <TypingDots />
                </div>
              </div>
            )}
            {aiTypingText && (
              <div className="flex gap-3 my-4 text-gray-600 text-sm flex-1">
                <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                  <div className="rounded-full bg-gray-100 border p-1">
                    <img
                      src="assets/icon/chatbot.png"
                      className="object-cover"
                    />
                  </div>
                </span>
                <div className="leading-relaxed whitespace-pre-line">
                  <span className="block font-bold text-gray-700">Rjay</span>
                  {aiTypingText}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </section>
          <section className="send absolute bottom-4 w-[345px]">
            <form
              className="flex items-center gap-2 w-full"
              onSubmit={sendMessage}
            >
              <input
                className="flex-1 h-10 rounded-md border px-3 py-2 text-sm text-[#030712] border-[#e5e7eb] focus:outline-none focus:ring-2 focus:ring-[#4f46e5]"
                placeholder="Type your message"
                value={inputChat}
                onChange={(e) => setInputChat(e.target.value)}
              />
              <button
                type="submit"
                className="bg-[#4f46e5] hover:bg-[#111827E6] text-white px-4 py-2 rounded-md text-sm h-10"
                disabled={isTyping}
              >
                {isTyping ? (
                  <p>...</p>
                ) : (
                  <img
                    src={"assets/icon/right.png"}
                    alt="Send"
                    className="w-5 h-5"
                  />
                )}
              </button>
            </form>
          </section>
        </div>
      </motion.div>
    </>
  );
};

export default ChatBox;
