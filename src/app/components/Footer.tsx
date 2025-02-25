import Link from "next/link";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-900 to-purple-700 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        
      
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold text-yellow-400">Agentic AI Blog</h2>
          <p className="text-sm text-gray-400 mt-2">
            Exploring the future of Artificial Intelligence.
          </p>
        </div>

        
        <div className="flex flex-wrap justify-center md:justify-start space-x-6 text-sm">
          <FooterLink href="/" label="Home" />
          <FooterLink href="/about" label="About" />
          <FooterLink href="/blog" label="Blog" />
          <FooterLink href="/contact" label="Contact" />
        </div>

        
        <div className="flex flex-col items-center md:items-end space-y-3 mt-6 md:mt-0">
          <div className="flex space-x-4 text-xl">
            <SocialLink href="https://github.com/rubii22" icon={<FaGithub />} />
            <SocialLink href="https://www.linkedin.com/in/rubab-fatima-3636242b5" icon={<FaLinkedin />} />
          </div>
          <p className="text-sm flex items-center space-x-2 mt-2">
            <FaEnvelope className="text-gray-400" /> 
            <a href="mailto:fati061022@gmail.com" className="hover:text-yellow-400 transition-all">Email</a>
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-6 text-center border-t border-gray-400 pt-4">
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Agentic AI Blog. All rights reserved.
        </p>
      </div>
    </footer>
  );
}


function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="hover:text-yellow-400 transition-all duration-300">
      {label}
    </Link>
  );
}


function SocialLink({ href, icon }: { href: string; icon: JSX.Element }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-all duration-300">
      {icon}
    </a>
  );
}
