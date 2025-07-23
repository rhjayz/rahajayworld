import React from "react";
import { motion } from "framer-motion";

export interface GlassIconsItem {
  icon: React.ReactElement;
  color: string;
  label: string;
  customClass?: string;
  text: string;
}

export interface GlassIconsProps {
  items: GlassIconsItem[];
  className?: string;
  text?: string;
}

const gradientMapping: Record<string, string> = {
  blue: "linear-gradient(hsl(223, 90%, 50%), hsl(208, 90%, 50%))",
  purple: "linear-gradient(hsl(283, 90%, 50%), hsl(268, 90%, 50%))",
  red: "linear-gradient(hsl(3, 90%, 50%), hsl(348, 90%, 50%))",
  indigo: "linear-gradient(hsl(253, 90%, 50%), hsl(238, 90%, 50%))",
  orange: "linear-gradient(hsl(43, 90%, 50%), hsl(28, 90%, 50%))",
  green: "linear-gradient(hsl(123, 90%, 40%), hsl(108, 90%, 40%))",
};

const GlassIcons: React.FC<GlassIconsProps> = ({ items, className }) => {
  const getBackgroundStyle = (color: string): React.CSSProperties => {
    if (gradientMapping[color]) {
      return { background: gradientMapping[color] };
    }
    return { background: color };
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/resume/Resume_Bima.pdf";
    link.download = "Resume_Bima.pdf";
    link.click();
  };

  return (
    <>
      <div
        className={`p-28 grid gap-[2em] grid-cols-4 md:grid-cols-4 mx-[5em] py-[1.5em] overflow-visible ${
          className || ""
        }`}
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.3, opacity: 0, y: 50 }} // kondisi awal
            whileInView={{ scale: 1, opacity: 1, y: 0 }} // kondisi ketika elemen terlihat
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 20,
              delay: 0.1 * index, // kalau mau kasih delay bertahap per item
            }}
            viewport={{ once: true, amount: 0.3 }} // hanya sekali, ketika 30% elemen terlihat
          >
            <button
              key={index}
              type="button"
              onClick={handleDownload}
              aria-label={item.label}
              className={`relative bg-transparent outline-none w-[14em] h-[3em] [perspective:24em] [transform-style:preserve-4d] [-webkit-tap-highlight-color:transparent] group ${
                item.customClass || ""
              }`}
            >
              {/* Back layer */}
              <span
                className="absolute top-0 left-0 w-full h-full rounded-[1.25em] block transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[100%_100%] rotate-[5deg] group-hover:[transform:rotate(8deg)_translate3d(-0.5em,-0.5em,0.5em)]"
                style={{
                  ...getBackgroundStyle(item.color),
                  boxShadow: "0.5em -0.5em 0.75em hsla(223, 10%, 10%, 0.15)",
                }}
              ></span>

              {/* Front layer */}
              <span
                className="absolute top-0 left-0 w-full h-full p-0 rounded-[1.25em] bg-[hsla(0,0%,100%,0.15)] transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[80%_50%] flex backdrop-blur-[0.75em] [-webkit-backdrop-filter:blur(0.75em)] transform group-hover:[transform:translateZ(2em)]"
                style={{
                  boxShadow: "0 0 0 0.1em hsla(0, 0%, 100%, 0.3) inset",
                }}
              >
                <span
                  className="w-[3em] h-full flex items-center justify-center ml-12 text-xl"
                  aria-hidden="true"
                >
                  {item.icon}
                </span>
                <span
                  className="w-full h-full flex items-center text-xl"
                  aria-hidden="true"
                >
                  {item.text}
                </span>
              </span>

              {/* Label */}
              <span className="absolute top-full left-0 right-0 text-center whitespace-nowrap leading-[2] text-base opacity-0 transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] translate-y-0 group-hover:opacity-100 group-hover:[transform:translateY(20%)]">
                {/* {item.label} */}
              </span>
            </button>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default GlassIcons;
