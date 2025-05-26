'use client'

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  useEffect(() => {
    setIsMenuOpen(false)
    document.body.style.overflow = "auto"
  }, [pathname])

  const navLinks = [
    { path: "/", label: "Inicio" },
    { path: "/servicios", label: "Servicios" },
    { path: "/nosotros", label: "Nosotros" },
    { path: "/contacto", label: "Contacto" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#045adc] py-${
        scrolled ? '6' : '12'
      }`}
    >
      <div className="onna-container flex items-center justify-between">
        <Link href="/" className="z-50">
          <div className="relative h-16 w-48">
            <Image 
              src="/logo.png" 
              alt="Onna Digital Logo" 
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-12">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`text-xl font-medium hover:text-gray-300 text-white ${
                    pathname === link.path
                      ? "text-white font-semibold"
                      : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden z-50 p-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-10 h-10 text-white" />
          ) : (
            <Menu className="w-10 h-10 text-white" />
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-[#045adc] z-40 transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full pt-32 px-6">
            <nav className="flex-1">
              <ul className="flex flex-col space-y-12 items-center mt-10">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className="text-white text-4xl font-medium hover:text-gray-300"
                      onClick={toggleMenu}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mb-10 text-center">
              <p className="text-gray-200 text-sm">
                © {new Date().getFullYear()} Onna Digital. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header 