import { FaGithub, FaLinkedin } from "react-icons/fa"
import { HiMail } from "react-icons/hi"

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 py-8 px-6 bg-black">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Text */}
        <p className="text-gray-400 text-sm">
          Designed & Built by{" "}
          <span className="text-green-400 font-medium">
            Bayu Putra Pamungkas
          </span>
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-5">

          <a
            href="https://github.com/amamat20"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-xl"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/bayu-putra-pamungkas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-xl"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:bayu000111222@email.com"
            className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-xl"
          >
            <HiMail />
          </a>

        </div>
      </div>
    </footer>
  )
}