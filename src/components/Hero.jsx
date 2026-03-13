import React from "react";
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section id="home" className="container mx-auto px-6 min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-white">
        Hey I'm <span className="text-secondary">Terngu</span>
      </h1>

      <div className="text-xl mt-4 text-secondary font-bold min-h-[1.5em]">
        <Typewriter
          words={["Software developer", "Data analyst","ML engineer" ]}
          loop={0}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </div>

      <a href="#contact" className="inline-block mt-6 px-6 py-3 bg-secondary text-white rounded-full hover:bg-blue-700 transition-all">
        Say Hi
      </a>
    </section>
  );
};

export default Hero;