"use client";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white px-6 relative overflow-hidden pt-24 pb-16">
      
      {/* Background Glow Effect */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[500px] h-[500px] bg-blue-500 opacity-20 blur-[180px]"></div>
      </div>

      
      <div className="text-center relative z-10">
        <h1 className="text-5xl font-extrabold text-blue-400 animate-fade-in drop-shadow-lg">
          Hi, I&apos;m <span className="text-purple-500">Rubab Fatima</span> 👋
        </h1>
        <p className="text-gray-300 mt-4 text-lg max-w-2xl leading-relaxed">
          <strong>AI &amp; Web Developer | Tech Enthusiast | Innovator</strong>  
          Passionate about <strong>Artificial Intelligence, Web Technologies, and Future Innovations</strong>.  
          I build <strong>intelligent, interactive, and user-centric digital experiences</strong> with the latest tech.
        </p>
      </div>

      
      <div className="relative mt-12 group">
        <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg transform transition-transform group-hover:scale-105">
          <Image
            src="/about.jpg"
            alt="Rubab Fatima"
            width={176} 
            height={176}
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* About My Journey */}
      <div className="mt-12 bg-white/10 backdrop-blur-lg rounded-lg shadow-lg p-8 max-w-2xl text-center border border-white/20">
        <h2 className="text-2xl font-semibold text-blue-400">🚀 My Journey</h2>
        <p className="text-gray-300 mt-3 text-sm leading-relaxed">
          My journey in <strong>Artificial Intelligence &amp; Web Development</strong> started with a deep curiosity for how technology shapes the future.  
          With expertise in <strong>TypeScript, JavaScript, React.js, and Next.js</strong>, I specialize in creating dynamic, AI-powered web applications.  
          My goal? To <strong>integrate AI with web development and build the future of intelligent web experiences</strong>.  
        </p>
      </div>

      {/* My Mission */}
      <div className="mt-12 p-8 bg-blue-500/10 border border-blue-500 rounded-lg shadow-lg max-w-2xl text-center">
        <h2 className="text-2xl font-semibold text-blue-400">🌍 My Mission</h2>
        <p className="text-gray-300 mt-3 text-sm leading-relaxed">
          I believe in <strong>leveraging AI to build meaningful and user-friendly web experiences</strong>.  
          From AI-integrated platforms to interactive websites, my focus is on <strong>bridging the gap between AI and real-world applications</strong>.  
        </p>
      </div>

      {/* Blog Purpose */}
      <div className="mt-12 p-8 bg-gray-800 border border-gray-700 rounded-lg shadow-lg max-w-3xl text-center">
        <h2 className="text-2xl font-semibold text-blue-400">💡 Why Agentic AI Blog?</h2>
        <p className="text-gray-300 mt-3 text-sm leading-relaxed">
          <strong>Agentic AI Blog</strong> is where I share <strong>insights, tutorials, and the latest trends in AI &amp; Web Development</strong>.  
          Whether you&apos;re a beginner or an expert, my blog helps you <strong>stay updated, sharpen your skills, and explore AI-driven innovations</strong>.
        </p>
      </div>

      {/* Technologies & Skills */}
      <div className="mt-12 p-8 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg max-w-2xl text-center">
        <h2 className="text-2xl font-semibold text-blue-400">🔥 Technologies I Work With</h2>
        <p className="text-gray-300 mt-3 text-sm leading-relaxed">
          <strong>Frontend:</strong> HTML, CSS, JavaScript, TypeScript, React.js, Next.js  
          <strong>Backend:</strong> Node.js (Exploring)  
          <strong>AI &amp; ML:</strong> Learning AI-powered web integrations  
        </p>
      </div>

      {/* Fun Facts About Me */}
      <div className="mt-12 p-8 bg-purple-500/10 border border-purple-500 rounded-lg shadow-lg max-w-2xl text-center">
        <h2 className="text-2xl font-semibold text-purple-400">✨ Fun Facts About Me</h2>
        <ul className="text-gray-300 mt-3 text-sm leading-relaxed space-y-2">
          <li>🔹 I love solving coding challenges &amp; exploring AI advancements.</li>
          <li>🔹 Coffee and late-night coding are my perfect combo ☕💻.</li>
          <li>🔹 Learning new technologies keeps me motivated every day.</li>
        </ul>
      </div>

      {/* Call to Actions */}
      <div className="mt-10 flex space-x-6">
        <Link
          href="/projects"
          className="px-6 py-3 bg-blue-600 hover:bg-purple-500 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
        >
          View My Projects 🚀
        </Link>
        <Link
          href="/blog"
          className="px-6 py-3 border border-gray-300 text-gray-300 hover:text-white hover:border-white rounded-full transition-all duration-300 hover:shadow-xl transform hover:scale-105"
        >
          Read My Blog 📝
        </Link>
      </div>
    </div>
  );
}
