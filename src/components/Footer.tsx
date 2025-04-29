
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/Arjayy007"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-colors hover:text-black"
            >
              <FaGithubSquare className='text-2xl' />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/sustiguer-rodel-jr-dv-00155b291"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-colors hover:text-black"
            >
              <FaLinkedin className='text-2xl' />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="https://www.instagram.com/arjay.777/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-colors hover:text-black"
            >
              <FaSquareInstagram className='text-2xl' />
              <span className="sr-only">Instagram</span>
            </a>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm">
            <a href="#skills" className="text-gray-600 transition-colors hover:text-black">
              Skills
            </a>
            <a href="#projects" className="text-gray-600 transition-colors hover:text-black">
              Projects
            </a>
            <a href="#certi" className="text-gray-600 transition-colors hover:text-black">
              Certificates
            </a>
            <a href="#contact" className="text-gray-600 transition-colors hover:text-black">
              Contact
            </a>
          </nav>

          <div className="text-sm text-gray-600">© {new Date().getFullYear()} Rodel Sustiguer. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
