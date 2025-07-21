import React, { useState } from "react";
import { items, DataProps } from "./Data";
import { motion, AnimatePresence } from "framer-motion";


type ListProps = {
  selectedId: number | null;
  setSelectedId: (id: number) => void;
}

type CardProps = {
  data: DataProps;
  onSelect: (id: number) => void;
}

const Card:React.FC<CardProps> = ({ data, onSelect }) => {

  return (
    <li className={`card`} onClick={()=> onSelect(data.id)}>
      <div className="card-content-container">
        <motion.div className="card-content" layoutId={`card-container-${data.id}`}>
          <motion.div
            className="card-image-container aspect-[4/3] w-full flex items-center justify-center overflow-hidden"
            layoutId={`card-image-container-${data.id}`}
          >
              <img 
              
                className="card-image w-full h-full object-cover rounded"
                src={`assets/project/${(Array.isArray(data.image) && data.image[0]) || "placeholder"}.jpg`}
                alt={(Array.isArray(data.image) && data.image[0]) || "placeholder"} />
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${data.id}`}
          >
            <div className="flex flex-wrap gap-1">
            {data.skill.map((icon,index)=>(
               <div
               key={index}
               className="w-5 h-5 flex items-center justify-center bg-white rounded shadow"
             >
                <img src={`assets/skill/${icon.icon}.svg` } alt={icon.title}  className="object-contain w-full h-full"/>
                </div>
            ))}
            </div>
            <h2>{data.title}</h2>
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 ${data.status === true ? 'bg-green-500' : 'bg-orange-500'} rounded-full animate-pulse`}></div>
              <span className="text-sm text-gray-500">{data.status === true ? 'Done' : 'Ongoing'}</span>
            </div>
          </motion.div>
        </motion.div>
        
      </div>
      <a className={`card-open-link`} />
      
    </li>
  );
}

export const List: React.FC<ListProps> = ({ selectedId, setSelectedId }) => {


  const showPages = 4;
  const sortData = [...items].sort((a, b) =>  a.id - b.id).reverse();
  const totalPages = Math.ceil(sortData.length / showPages);
  const [currentPages, setCurrentPages] = useState(0);
  const [direction, setDirection] = useState(1);

  const handlePrev = () => {
    setDirection(0)
    setCurrentPages((prev) => (prev + 1) % totalPages);
  }

  const handleNext = () => {
    setDirection(0)
    setCurrentPages((prev) => (prev - 1 + totalPages) % totalPages);
  }

  const startIndex = currentPages * showPages;
  const currentItems = sortData.slice(startIndex, startIndex + showPages);
  
  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      position: "absolute" as const,
      top: 0,
      left: 0,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "relative" as const,
      width: "100%",
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      position: "absolute" as const,
      top: 0,
      left: 0,
      width: "100%",
    }),
  };

  return (
    <>
      <div className="relative w-full overflow-hidden">
          <AnimatePresence>
          <motion.div
            key={currentPages}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut", type: "tween"}}
            >
               <ul className="card-list">
                  {currentItems.map((data) => (
                    <Card
                      key={data.id}
                      data={data}
                      onSelect={setSelectedId} />
                  ))}
          </ul>
            </motion.div>
          </AnimatePresence>
        
        <div className="flex justify-between mt-4">
        <button
          onClick={handlePrev}
          className="px-4 py-2 bg-[#1b0f21] rounded-2xl hover:bg-[#1c1b5e]"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-[#1b0f21] rounded-2xl hover:bg-[#1c1b5e]"
        >
          Next
        </button>
      </div>
      </div>
    </>
  );
}
