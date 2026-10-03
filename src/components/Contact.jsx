import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const contactLinks = [
  {
    name: "GitHub",
    icon: <FaGithub className="text-base transition-transform duration-300 group-hover:scale-110" />,
    link: "https://github.com/Ternguboss",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin className="text-base text-blue-400 transition-transform duration-300 group-hover:scale-110" />,
    link: "https://www.linkedin.com/in/terngu-favour-773217379",
  },
  {
    name: "Email me",
    icon: <FaEnvelope className="text-base text-indigo-400 transition-transform duration-300 group-hover:scale-110" />,
    link: "mailto:terngufavour@gmail.com",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-16 max-w-6xl mx-auto px-6">
      
      {/* Large Banner Card */}
      <div 
        className="bg-[#131b2e] border border-slate-800/80 rounded-3xl p-8 sm:p-12 md:p-16 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden group hover:border-indigo-500/40 transition-all duration-500 hover-glow"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
      >
        
        {/* Animated background glowing orb */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-indigo-500/15 blur-3xl pointer-events-none rounded-full animate-pulse-glow" />

        {/* Eyebrow */}
        <p className="text-indigo-400 font-medium text-sm sm:text-base mb-2">
          got an idea?
        </p>

        {/* Heading */}
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
          Let's build something together
        </h2>

        {/* Description */}
        <p className="text-slate-400 max-w-md mx-auto text-sm sm:text-base leading-relaxed mb-8">
          Whether it's a project, a question, or just a hello, my inbox is always open.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {contactLinks.map((contact, idx) => (
            <a
              key={contact.name}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 py-3 rounded-full bg-[#0b0f19] border border-slate-700/80 hover:border-indigo-400 text-white font-semibold text-sm flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-108 shadow-md active:scale-95 hover:shadow-indigo-500/20"
              data-aos="fade-up"
              data-aos-delay={idx * 100 + 200}
            >
              {contact.icon}
              <span>{contact.name}</span>
            </a>
          ))}
        </div>

      </div>

    </section>
  );
};

export default Contact;