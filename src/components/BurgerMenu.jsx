import { useState } from "react"

const navLinks = [
  { href: "#home", text: "Home" },
  { href: "#characters", text: "Characters" },
  { href: "#gameplay", text: "Gameplay" },
  { href: "#story", text: "Story" },
  { href: "#news", text: "News" },
]

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
      >
        <span className="sr-only">Open main menu</span>
        <i className="fas fa-bars text-xl"></i>
      </button>

      {isOpen && (
        <div className="fixed top-16 left-0 w-full z-40 bg-black bg-opacity-95 px-6 py-6 space-y-4 shadow-lg backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium"
            >
              {link.text}
            </a>
          ))}
          <button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold transition-all duration-300">
            Pre-Register Now
          </button>
        </div>
      )}
    </>
  )
}
