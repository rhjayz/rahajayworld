import React, { useState } from "react";
import { motion } from "framer-motion";
import FlowbiteCarousel from "../../FlowbiteCarousel/FlowbiteCarousel";
import { items } from "./Data";
import { LuExternalLink } from "react-icons/lu";

type ItemProps = {
  selectedId: number | null;
  onClose: () => void;
};

const Item: React.FC<ItemProps> = ({ selectedId, onClose }) => {
  const check = items.find((item) => item.id === selectedId);
  if (!check) return null;
  const { id, title, description, skill, image, worked, link } = check;

  return (
    <>
      <div className="fixed inset-0 z-50">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, delay: 0.1 }}
          className="absolute inset-0 bg-black bg-opacity-30 z-10 backdrop-blur-sm"
          onClick={onClose}
        ></motion.div>

        <div
          className="card-content-container open absolute inset-0 z-[9999]"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.div
            className="card-content"
            layoutId={`card-container-${id}`}
          >
            <motion.div
              className="card-image-container-item"
              layoutId={`card-image-container-item-${id}`}
            >
              <FlowbiteCarousel
                images={image}
                interval={4000}
                className="w-[700px] h-[700px] transition duration-500 ease-in-out object-cover absolute inset-[250px] left-[680px] -translate-x-1/2 -translate-y-1/2"
              />
            </motion.div>
            <motion.div
              className="title-container"
              layoutId={`title-container-${id}`}
            >
              <div className="flex flex-wrap gap-1">
                {skill &&
                  skill.map((icon, index) => (
                    <div
                      key={index}
                      className="w-5 h-5 flex items-center justify-center bg-white rounded shadow"
                    >
                      <img
                        src={`assets/skill/${icon.icon}.svg`}
                        alt={icon.title}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  ))}
              </div>
              <h2 className="text-2xl">{title}</h2>
            </motion.div>
            <motion.div
              className="content-container overflow-auto max-h-[550px] scrollbar-pixel"
              animate
            >
              <div className="flex flex-wrap gap-1 mb-1">
                {skill.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-full text-gray-500 border border-gray-500 border-solid hover:bg-white pl-1 pr-1 m-0 cursor-pointer"
                  >
                    <p className="w-16 text-center">{item.title}</p>
                  </div>
                ))}
              </div>
              <p className="text-xl">Description</p>
              <p className="ml-5">{description}</p>
              <br />
              <p className="text-xl">My Works</p>
              <ul className="list-disc ml-5 text-white">
                {worked?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              {link !== "" && (
                <a
                  href={link}
                  className="flex items-center justify-center gap-2 w-fit mx-auto mt-5 px-4 py-2 border border-white rounded bg-[#1B0F21] hover:bg-gray-700 text-white"
                >
                  <p className="text-sm">View the Website</p>
                  <LuExternalLink className="text-sm" />
                </a>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Item;
