import React from "react";
import { FaArrowDown, FaCoffee, FaLaptopCode } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-28 pb-16 flex items-center justify-center relative overflow-hidden">
      
      {/* Dynamic background glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" style={{ animationDelay: "3s" }} />

      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Text & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Eyebrow */}
          <div 
            className="inline-flex items-center gap-2 text-indigo-400 font-medium text-sm sm:text-base mb-3"
            data-aos="fade-down"
            data-aos-duration="800"
          >
            <span>hello there, nice to meet you</span>
            <span className="inline-block animate-bounce">🖐️</span>
          </div>

          {/* Headline */}
          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            I'm{" "}
            <span className="relative inline-block px-3 py-0.5 mx-1 border border-indigo-400/60 bg-indigo-950/40 rounded-xl text-indigo-300 font-extrabold -rotate-1 shadow-[0_0_20px_rgba(99,102,241,0.25)] transition-transform duration-300 hover:rotate-0 hover:scale-105">
              Terngu
            </span>
            ,<br />
            I build<br />
            things<br />
            people<br />
            enjoy using.
          </h1>

          {/* Description */}
          <p 
            className="mt-6 max-w-lg text-slate-400 text-base sm:text-lg leading-relaxed"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Software developer who turns messy problems into simple, 
            friendly products. Currently crafting software and using data to come up with innovative solutions.
          </p>

          {/* CTA Buttons */}
          <div 
            className="mt-8 flex flex-wrap items-center gap-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-[#6366f1] hover:bg-[#4f46e5] text-white font-medium text-sm sm:text-base flex items-center gap-2 shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:scale-105 active:scale-95 hover-glow"
            >
              <span>Say Hi</span>
              <span className="transition-transform duration-300 group-hover:rotate-12">👋</span>
            </a>

            <a
              href="#project"
              className="group px-6 py-3 rounded-full bg-[#131b2e] border border-slate-700/80 hover:border-indigo-400/60 text-slate-200 font-medium text-sm sm:text-base flex items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 shadow-md"
            >
              <span>See my work</span>
              <FaArrowDown className="text-xs text-slate-400 group-hover:translate-y-1 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* Right Column: Photo Card Mockup */}
        <div 
          className="lg:col-span-5 flex items-center justify-center relative"
          data-aos="zoom-in"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <div className="relative w-full max-w-[310px] sm:max-w-[340px] aspect-[4/5]">
            
            {/* Tilted background card with subtle glow */}
            <div className="absolute inset-0 bg-indigo-950/40 border border-indigo-500/30 rounded-3xl transform rotate-3 scale-102 pointer-events-none transition-transform duration-500 hover:rotate-6" />

            {/* Main Polaroid Photo Card */}
            <div className="relative w-full h-full bg-[#131b2e] border border-indigo-500/40 rounded-3xl p-3 sm:p-4 shadow-2xl flex flex-col justify-between group transition-all duration-500 hover:border-indigo-400/80 hover:-translate-y-2 hover-glow">
              
              {/* Floating Coffee sticker - Top Left */}
              <div className="absolute -top-4 -left-3 bg-[#0b0f19] border border-indigo-400/40 px-3.5 py-1.5 rounded-full text-xs text-indigo-300 font-medium flex items-center gap-1.5 shadow-xl z-20 animate-float">
                <FaCoffee className="text-amber-400" />
                <span>fueled by coffee</span>
              </div>

              {/* Floating Open to work sticker - Bottom Right */}
              <div className="absolute -bottom-4 -right-3 bg-[#0b0f19] border border-indigo-400/40 px-3.5 py-1.5 rounded-full text-xs text-indigo-300 font-medium flex items-center gap-1.5 shadow-xl z-20 animate-float-reverse">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <FaLaptopCode className="text-indigo-400" />
                <span>open to work</span>
              </div>

              {/* Photo Area */}
              <div className="w-full h-full rounded-2xl overflow-hidden relative bg-[#0d1322] border border-slate-800/80 group-hover:border-indigo-500/30 transition-colors flex flex-col items-center justify-center">
                <img
                  src="/picture/terngupic.jpeg"
                  alt="Terngu Favour"
                  className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-108"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;