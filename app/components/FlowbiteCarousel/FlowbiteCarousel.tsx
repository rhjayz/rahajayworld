'use client';
import React, { useEffect, useState } from 'react';

type CarouselProps = {
  images: string[];
  folder?: string;
  extension?: string;
  interval?: number;
  className?: string;  // dalam ms, default 3000
};

const FlowbiteCarousel: React.FC<CarouselProps> = ({
  images,
  folder = '/assets/project/',
  extension = '.jpg',
  interval = 3000,
  className= '',
}) => {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, interval);
    return () => clearInterval(timer);
  }, [total, interval]);

  const goPrev = () => setCurrent((c) => (c - 1 + total) % total);
  const goNext = () => setCurrent((c) => (c + 1) % total);

  if (total === 0) return null;

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full mx-auto">
      <div className="w-full h-full bg-gray-100 rounded overflow-hidden flex items-center justify-center ">
        <center>
              <img
                  src={`${folder}${images[current]}${extension}`}
                  alt={`Slide ${current}`}
                  className={ className }
          />
          </center>
      </div>

      {/* Tombol navigasi manual */}
      <button
        onClick={goPrev}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2"
      >
        ‹
      </button>
      <button
        onClick={goNext}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2"
      >›
      </button>
      {/* Indikator slide */}
      <div className="flex justify-center space-x-1 mt-2">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`w-2 h-2 rounded-full ${
              idx === current ? 'bg-gray-800' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default FlowbiteCarousel;
