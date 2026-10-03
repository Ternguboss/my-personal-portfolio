import React from "react";

const filledSkills = [
  "JavaScript",
  "Excel",
  "Power BI",
  "React",
  "Tailwind CSS",
  "Node.js",
  "Python",
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 max-w-6xl mx-auto px-6">
      
      {/* Header */}
      <div 
        className="mb-8"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Skills
        </h2>
      </div>

      {/* Pill Chips Grid/Flex */}
      <div className="flex flex-wrap gap-3 max-w-3xl">
        {filledSkills.map((skill, index) => (
          <div
            key={skill}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#4f46e5] text-white font-semibold text-sm shadow-md shadow-indigo-500/20 hover:bg-[#4338ca] transition-all duration-300 hover:scale-110 hover:shadow-indigo-500/40 select-none cursor-pointer"
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay={index * 80}
          >
            <span className="w-2 h-2 rounded-full bg-indigo-200 animate-pulse" />
            <span>{skill}</span>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Skills;