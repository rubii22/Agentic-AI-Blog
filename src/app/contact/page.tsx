export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white px-6 py-16">
      
      
      <h1 className="text-5xl font-extrabold text-blue-400 mb-6 drop-shadow-lg">
        Contact Me 📩
      </h1>
      <p className="text-gray-300 text-lg max-w-xl text-center">
        Feel free to reach out for **collaborations, project inquiries, or any tech discussions!** 🚀
      </p>

      <div className="mt-10 bg-white/10 backdrop-blur-lg border border-gray-600 rounded-lg shadow-lg p-8 w-full max-w-lg text-center">
        <h2 className="text-2xl font-semibold text-blue-300">Get In Touch</h2>

        <div className="mt-5 space-y-4">
          {/* Email */}
          <div className="flex items-center justify-center space-x-3">
            <span className="text-gray-300 text-lg">📧</span>
            <a
              href="fati061022@gmail.com"
              className="text-gray-300 hover:text-blue-400 transition"
            >
             Email
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center justify-center space-x-3">
            <span className="text-gray-300 text-lg">🔗</span>
            <a
              href="https://www.linkedin.com/in/rubab-fatima-3636242b5"
              className="text-gray-300 hover:text-blue-400 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </div>

          {/* GitHub */}
          <div className="flex items-center justify-center space-x-3">
            <span className="text-gray-300 text-lg">💻</span>
            <a
              href="https://github.com/rubii22"
              className="text-gray-300 hover:text-blue-400 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <a
        href="fati061022@gmail.com"
        className="mt-8 px-6 py-3 bg-blue-600 hover:bg-purple-500 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        Send an Email 📩
      </a>

    </div>
  );
}
