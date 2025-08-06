"use client";

import Lanyard from "./components/Lanyard/Lanyard";
import GlassIcons from "./components/GlassIcons/GlassIcons";
import GlareHover from "./components/GlareHover/GlareHover/GlareHover";
import DecryptedText from "./components/TextAnimations/DecryptedText/DecryptedText";
import Magnet from "./components/Magnet/Magnet";
import ScrambledText from "./components/TextAnimations/ScrambledText/ScrambledText";
import FallingText from "./components/FallingText/FallingText";
import FlowbiteTooltip from "./components/Flowbitetooltips/Flowbitetooltips";
import AppStore from "./components/AppStore/src/AppStore";
import PixelTransition from "./components/Pixeltransition/PixelTransition/PixelTransition";
import ContactSection from "./components/ContactSection/ContactSection";
import AI from "./components/AI/Index";
import { motion } from "framer-motion";
import { FaRegFile } from "react-icons/fa";
import { useState } from "react";

export default function Home() {
  const items = [
    { icon: <FaRegFile />, color: "blue", label: "CV", text: "Download CV" },
  ];
  const skillItem = [
    { icon: "file-type-html", title: "HTML" },
    { icon: "file-type-css", title: "CSS" },
    { icon: "php", title: "PHP" },
    { icon: "javascript-js", title: "Javascript" },
    { icon: "wordpress", title: "Wordpress" },
    { icon: "icons8-elementor", title: "Elementor" },
    { icon: "bootstrap", title: "Bootstrap" },
    { icon: "Materialize", title: "Materialize" },
    { icon: "bulma", title: "Bulma" },
    { icon: "tailwind-css", title: "Tailwind" },
    { icon: "codeigniter-plain", title: "Code Igniter 3" },
    { icon: "laravel", title: "Laravel" },
    { icon: "Lumen", title: "Lumen" },
    { icon: "Go", title: "Go" },
    { icon: "Flutter", title: "Flutter" },
    { icon: "python", title: "Python" },
    { icon: "jquery-plain", title: "Jquery" },
    { icon: "icons8-vite", title: "Vite" },
    { icon: "react", title: "React Js" },
    { icon: "node-js", title: "Node Js" },
    { icon: "icons8-nextjs", title: "Next Js" },
    { icon: "icons8-express-js", title: "Express Js" },
    { icon: "typescript-icon", title: "Typescript" },
    { icon: "icons8-prisma-orm", title: "Prisma ORM" },
    { icon: "sequelize", title: "Sequelize ORM" },
    { icon: "mysql-original-wordmark", title: "MySQL" },
    { icon: "PostgresSQL", title: "PostgresSQL" },
    { icon: "figma", title: "Figma" },
    { icon: "icons8-json-web-token", title: "JWT" },
    { icon: "icons8-git", title: "GIT" },
    { icon: "google-cloud", title: "Google Cloud" },
    { icon: "Docker", title: "Docker" },
    { icon: "icons8-apache-netbeans", title: "Netbeans" },
    { icon: "icons8-java", title: "Java" },
  ];
  const [videoReady, setVideoReady] = useState(false);
  const groupItem = [];

  for (let i = 0; i < skillItem.length; i += 10) {
    groupItem.push(skillItem.slice(i, i + 10));
  }

  return (
    <div className="min-h-screen overflow-x-hidden w-screen w-full scrollbar-pixel bg-[#4F46E5]">
      <AI />
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover backdrop-blur-sm"
        preload="auto"
        onCanPlayThrough={() => setVideoReady(true)}
      >
        <source src="/assets/citylight.mp4" type="video/mp4" />
      </video>
      <div className="w-full relative z-10">
        {/* SECTION PRIMARY */}
        <section className="primary">
          <div className="grid grid-cols-12 ">
            <div className="col-span-6 z-8 w-full bg-black/5 bg-[#1b0f21] bg-gradient-to-r from-[#4F46E5] via-[#4F46E5]/70 to-transparent text-[#ffffff]">
              <br />
              <br />
              <br />
              <DecryptedText
                text="Hello,"
                speed={100}
                maxIterations={20}
                revealDirection="center"
                animateOn="hover"
                className="text-[180px] font-honk relative ml-[10vh] mt-0"
              />
              <DecryptedText
                text="I'm Muhammad Fikri Bima Nugraha"
                speed={100}
                maxIterations={20}
                revealDirection="center"
                animateOn="hover"
                className="text-5xl -mt-3 mb-3 font-jersey10 relative ml-[10vh]"
              />

              <div className="relative ml-[10vh] mt-2 md-6 font-silkscreen">
                <motion.div
                  initial={{ scale: 0.3, opacity: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 20,
                    delay: 1,
                  }}
                >
                  <DecryptedText
                    text="I'm a web developer with a strong enthusiasm for mobile development."
                    speed={100}
                    maxIterations={20}
                    revealDirection="center"
                    animateOn="hover"
                  />
                </motion.div>
              </div>
              <div
                style={{ height: "50px", position: "relative" }}
                className="relative mr-20"
              >
                <br />

                <GlassIcons items={items} className="font-jersey10" />
              </div>
            </div>
            <div className="col-span-6 relative">
              <motion.div
                initial={{ scale: 0.3, opacity: 0, y: 50 }} // kondisi awal
                whileInView={{ scale: 1, opacity: 1, y: 0 }} // kondisi ketika elemen terlihat
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                  delay: 0.1, // kalau mau kasih delay bertahap per item
                }}
                viewport={{ once: true, amount: 0.3 }} // hanya sekali, ketika 30% elemen terlihat
              >
                <img
                  src="/assets/rj.png"
                  alt="My-Logo"
                  width={100}
                  height={100}
                  className="absolute top-10 right-10 z-[1]"
                />
              </motion.div>
              <div className="relative w-full h-full">
                <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
              </div>
            </div>
          </div>
        </section>
        {/* SECTION SKILL */}
        <section className="Skills z-10 text-white bg-[#1b0f21]">
          <div className="grid grid-cols-12 w-full h-full">
            <div className="col-span-12">
              <div className="mt-15">
                <br />
                <center>
                  <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <ScrambledText
                      className="text-3xl font-jersey10"
                      radius={4}
                      duration={5}
                      speed={0.9}
                      scrambleChars="00110010100101010"
                    >
                      The Skills
                    </ScrambledText>
                  </motion.div>
                </center>
              </div>
              {groupItem.map((group, rowIndex) => (
                <div
                  key={rowIndex}
                  className="flex flex-wrap justify-center gap-2 py-1"
                >
                  {group.map((icon, i) => (
                    <FlowbiteTooltip
                      key={icon.title}
                      content={icon.title}
                      placement="top"
                    >
                      <Magnet padding={300} magnetStrength={90}>
                        <motion.div
                          initial={{ opacity: 0, y: -50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                          viewport={{ once: true, amount: 0.3 }}
                        >
                          <GlareHover
                            key={i}
                            glareColor="#4F46E5"
                            borderColor="#4F46E5"
                            glareOpacity={0.3}
                            glareAngle={-30}
                            glareSize={300}
                            transitionDuration={800}
                            playOnce={false}
                          >
                            <img
                              src={`/assets/skill/${icon.icon}.svg`}
                              alt={icon.icon}
                              className="w-20 h-20 object-contain"
                            />
                          </GlareHover>
                        </motion.div>
                      </Magnet>
                    </FlowbiteTooltip>
                  ))}
                </div>
              ))}
              <div className="h-[20vh]">
                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <FallingText
                    text={`"The future belongs to those who learn more skills and combine them in creative ways."`}
                    highlightWords={["skills", "combine", "creative", "future"]}
                    trigger="click"
                    backgroundColor="transparent"
                    wireframes={false}
                    gravity={0.56}
                    fontSize="2.2rem"
                    mouseConstraintStiffness={0.9}
                  />
                </motion.div>
              </div>
            </div>

            <div className="col-span-12 bg-black/10 bg-[#1b0f21] bg-gradient-to-t from-[#4F46E5] via-[#4F46E5]/20 to-transparent ">
              <br />
            </div>
          </div>
        </section>

        <section className="Project  text-white bg-[#4F46E5]">
          <div className="grid grid-cols-12 px-5">
            <div className="col-span-10 col-start-2 font-jersey10">
              <br />
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <AppStore />
              </motion.div>
              <div className="mb-6"></div>
            </div>
          </div>
        </section>
        <div className="col-span-12 bg-[#4F46E5] bg-gradient-to-t from-[#1b0f21] via-[#1b0f21]/20 to-transparent ">
          <br />
        </div>
        <section className="Contact text-white bg-[#1b0f21] mx-auto px-auto">
          <div className="grid grid-cols-12 ">
            <div className="col-span-12 mx-auto px-auto">
              <div className="mt-5"></div>
              <br />
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <ScrambledText
                  className="text-3xl font-jersey10 text-center mb-10"
                  radius={4}
                  duration={5}
                  speed={0.9}
                  scrambleChars="00110010100101010"
                >
                  The Contact
                </ScrambledText>
              </motion.div>
            </div>
            <div className="col-span-6 flex flex-col items-center font-silkscreen">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <PixelTransition
                  firstContent={
                    <img
                      src={"assets/pporb.jpeg"}
                      alt="default pixel transition content, a cat!"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  }
                  secondContent={
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "grid",
                        placeItems: "center",
                        backgroundColor: "#4F46E5",
                      }}
                    >
                      <p
                        style={{
                          fontWeight: 900,
                          fontSize: "3rem",
                          color: "#ffffff",
                        }}
                      >
                        @def00l
                      </p>
                    </div>
                  }
                  gridSize={12}
                  pixelColor="#ffffff"
                  animationStepDuration={0.4}
                  className="custom-pixel-card"
                />
              </motion.div>
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
                className="mt-2"
              >
                Connect with me:
              </motion.span>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="flex flex-wrap mt-2 gap-4 md:gap-6">
                  <FlowbiteTooltip content="Linkedin">
                    <a
                      href="https://www.linkedin.com/in/muhammad-fikri-bima-nugraha"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-transparent hover:bg-gray-900 transition-all duration-300 cursor-pointer group">
                        <img
                          src={"assets/icon/linkedin.png"}
                          alt="Linkedin"
                          className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition duration-300"
                        />
                      </div>
                    </a>
                  </FlowbiteTooltip>
                  <FlowbiteTooltip content="Github">
                    <a
                      href="https://github.com/rhjayz"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-transparent hover:bg-gray-100 transition-all duration-300 cursor-pointer group">
                        <img
                          src={"assets/icon/github.png"}
                          alt="Github"
                          className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition duration-300"
                        />
                      </div>
                    </a>
                  </FlowbiteTooltip>
                  <FlowbiteTooltip content="Whatsapp">
                    <a
                      href="https://wa.me/6285179561300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-transparent hover:bg-gray-100 transition-all duration-300 cursor-pointer group">
                        <img
                          src={"assets/icon/whatsapp.png"}
                          alt="Whatsapp"
                          className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition duration-300"
                        />
                      </div>
                    </a>
                  </FlowbiteTooltip>
                  <FlowbiteTooltip content="Gmail">
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=fikribima123@gmail.com&su=Halo&body=Saya%20ingin%20bertanya%20tentang%20.."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-transparent hover:bg-gray-100 transition-all duration-300 cursor-pointer group">
                        <img
                          src={"assets/icon/message.png"}
                          alt="Gmail"
                          className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition duration-300"
                        />
                      </div>
                    </a>
                  </FlowbiteTooltip>
                  <FlowbiteTooltip content="Youtube">
                    <a
                      href="https://www.youtube.com/@bimacos8355"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-transparent hover:bg-gray-100 transition-all duration-300 cursor-pointer group">
                        <img
                          src={"assets/icon/youtube.png"}
                          alt="Youtube"
                          className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition duration-300"
                        />
                      </div>
                    </a>
                  </FlowbiteTooltip>
                </div>
              </motion.div>
            </div>
            <div className="col-span-6 pr-32 rounded-lg shadow-lg font-silkscreen">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <ContactSection />
              </motion.div>
            </div>
            <div className="mb-20"></div>
          </div>
        </section>
      </div>
    </div>
  );
}
