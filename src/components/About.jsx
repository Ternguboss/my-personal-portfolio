import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 max-w-6xl mx-auto px-6">
      
      {/* Header */}
      <div 
        className="mb-8"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          About me
        </h2>
      </div>

      {/* Single Short Note Container */}
      <div 
        className="bg-[#131b2e] border border-slate-800/80 rounded-2xl p-6 sm:p-8 shadow-lg hover:border-indigo-500/40 transition-all duration-300 hover-glow"
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-delay="100"
      >
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          I'm a developer who loves turning complicated problems into simple, beautiful solutions. I care as much about how something feels as how it works. When I'm not coding, I'm usually trying out new food, watching something good, or poking at new tech and open-source projects.
        </p>
      </div>

    </section>
  );
};

export default About;