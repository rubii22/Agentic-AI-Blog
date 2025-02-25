"use client";
import Image from "next/image";

const projects = [
  {
    title: "ATM Machine Simulator",
    description: "An interactive ATM simulator with deposit, withdraw, and balance check features.",
    image: "/atm.png",
    link: "https://github.com/rubii22/Simple-Calculator",
  },
  {
    title: "Portfolio Website",
    description: "A professional portfolio showcasing my skills, projects, and contact details.",
    image: "/portfolio.png",
    link: "https://portfolio-two-rho-42.vercel.app/",
  },
  {
    title: "Flower-Themed Website",
    description: "A beautifully designed multi-page website with a floral theme.",
    image: "/flower.png",
    link: "https://flower-themed-website.vercel.app/",
  },
  {
    title: "Nike E-Commerce Website",
    description: "An online store inspired by Nike's branding with product listings and checkout features.",
    image: "/ecommerce.png",
    link: "https://hackathon-3-2025.vercel.app/",
  },
  {
    title: "Blog Website",
    description: "A modern blog website for sharing articles and insights on tech and AI.",
    image: "/blog.png",
    link: "https://dynamic-blog-gules.vercel.app/",
  },
  {
    title: "Teacher Hiring Website",
    description: "A platform for hiring and connecting with professional teachers.",
    image: "/teacher.png",
    link: "https://teacher-hiring-website.vercel.app/",
  },
  {
    title: "Shareable Resume Builder",
    description: "A dynamic resume builder that helps users create professional resumes.",
    image: "/resume.png",
    link: "https://hackathon-milestone-5-seven.vercel.app/",
  },
  {
    title: "To-Do List",
    description: "A simple yet effective task management app for daily productivity.",
    image: "/todo.png",
    link: "https://github.com/rubii22/Todo-List",
  },
  {
    title: "Simple Calculator",
    description: "A basic calculator built with TypeScript to perform arithmetic operations.",
    image: "/calculator.png",
    link: "https://github.com/rubii22/Simple-Calculator",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-6">
      {/* Title Section */}
      <h1 className="text-4xl sm:text-5xl font-bold text-center text-blue-400 mb-12">
        My Projects 🚀
      </h1>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 rounded-lg shadow-lg">
            {/* Project Image */}
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className={`w-full h-52 rounded-t-lg ${
                project.title === "Teacher Hiring Website" ? "object-contain" : "object-cover"
              }`}
            />

            {/* Project Details */}
            <div className="p-6 text-center">
              <h2 className="text-2xl font-semibold text-blue-300 mb-2">
                {project.title}
              </h2>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>

              {/* View Project Button */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-5 rounded-full transition-all duration-300"
              >
                View Project 🔗
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
