import React from "react";

const About = () => {
  return (
    <section id="about" className="container mx-auto px-6 py-20" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">About Me</h2>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">

        {/* my picture */}
        <div className="w-60 h-60 md:w-80 md:h-80 flex-shrink-0">
          <img 
            src="/picture/terngupic.jpeg" 
            alt="Terngu" 
            className="w-full h-full object-cover rounded-2xl border-4 border-secondary shadow-xl" 
          />
        </div>

        {/* about me */}

        <div className="max-w-xl text-center md:text-left text-gray-300">
          <p className="text-lg leading-relaxed">
            I am a passionate software Developer with a focus on building 
            modern applications. 
            I love turning complex problems into simple and beautiful solutions .
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            When I'm not coding, you can find me trying out new food, watching stuff and exploring new technologies or 
            contributing to open-source projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;