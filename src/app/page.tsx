export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white px-6 relative overflow-hidden">
      
      {/* Background Glow Effects */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="absolute w-[600px] h-[600px] bg-blue-500 opacity-20 blur-[180px]"></div>
      </div>

      {/* AI Title with Neon Effect */}
      <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-xl animate-fade-in">
        Welcome to <span className="text-purple-400">Agentic AI Blog</span>
      </h1>
      <p className="text-gray-300 mt-4 text-center max-w-lg text-lg tracking-wide">
        Explore the future of AI and its groundbreaking innovations.
      </p>

      {/* Animated Underline */}
      <div className="relative flex space-x-2 mt-6">
        <span className="w-12 h-1 bg-blue-500 rounded-full animate-pulse"></span>
        <span className="w-12 h-1 bg-purple-500 rounded-full animate-pulse delay-200"></span>
        <span className="w-12 h-1 bg-pink-500 rounded-full animate-pulse delay-400"></span>
      </div>

      {/* CTA Buttons with Smooth Hover Effects */}
      <div className="mt-8 flex space-x-6">
        <a
          href="/blog"
          className="px-7 py-3 bg-blue-600 hover:bg-purple-500 text-white font-semibold rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-110"
        >
          Explore Blogs 🚀
        </a>
        <a
          href="/about"
          className="px-7 py-3 border border-gray-400 text-gray-300 hover:text-white hover:border-white rounded-full transition-all duration-300 hover:shadow-md transform hover:scale-105"
        >
          Learn More ➜
        </a>
      </div>

      {/* Floating Glassmorphism Info Card */}
      <div className="mt-8 p-6 sm:p-8 bg-white/10 backdrop-blur-md rounded-lg shadow-lg max-w-lg text-center border border-white/20 transform hover:scale-[1.02] transition-all duration-300">
        <p className="text-gray-200 text-sm tracking-wide">
          Stay ahead with AI insights, trends, and innovations! ✨
        </p>
      </div>
    </div>
  );
}
