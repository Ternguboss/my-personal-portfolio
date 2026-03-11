import React from "react";

const skills = [
  { name: "JavaScript", level: "90%" },
  { name: "React", level: "85%" },
  { name: "Node.js", level: "80%" },
  { name: "Tailwind CSS", level: "85%" },
  { name: "Python", level: "80%" },
  { name: "Excel", level: "90%" },
  { name: "Power Bi", level: "90%" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="container mx-auto px-6 py-20"
      data-aos="fade-up"
    >

      <h2 className="text-3xl font-bold text-center mb-12">
        Skills
      </h2>

      <div className="max-w-2xl mx-auto">

        {skills.map((skill) => (

          <div key={skill.name} className="mb-6">

            <div className="flex justify-between mb-1">
              <span>{skill.name}</span>
              <span>{skill.level}</span>
            </div>

            <div className="w-full bg-gray-700 rounded-full h-2">

              <div
                className="bg-secondary h-2 rounded-full transition-all duration-1000"
                style={{ width: skill.level }}
              />

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Skills;