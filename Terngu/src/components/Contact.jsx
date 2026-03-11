import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const contactLinks = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      // FIXED: Added https:// to make it an absolute URL
      link: "https://github.com/Ternguboss", 
      color: "hover:text-secondary",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/terngu-favour-773217379",
      color: "hover:text-secondary",
    },
    {
      name: "Email",
      icon: <FaEnvelope />,
      link: "mailto:terngufavour@gmail.com",
      color: "hover:text-secondary",
    },
  ];

  return (
    <section id="contact" className="container mx-auto px-6 py-16 text-center">
      <h2 className="text-3xl font-bold mb-8 text-white">Get In Touch</h2>

      {/* The contact container */}
      <div className="flex flex-wrap justify-center gap-6 max-w-2xl mx-auto">
        {contactLinks.map((contact) => (
          <a
            key={contact.name}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center bg-gray-800 gap-3 px-6 py-3 rounded-full border border-gray-800 transition-all duration-300 hover:scale-105 text-gray-300 ${contact.color} shadow-md`}
          >
            <span className="text-2xl">{contact.icon}</span>
            <span className="text-sm font-medium tracking-wide">
              {contact.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;