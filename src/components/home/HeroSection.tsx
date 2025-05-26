'use client'

import React from "react"
import Link from "next/link"
import ScrollAnimationWrapper from "../common/ScrollAnimationWrapper"

const HeroSection = () => {
  return (
    <section className="relative bg-onna-black text-white py-24 md:py-32 lg:py-40 overflow-hidden bg-slate-950">
      {/* Video de fondo corporativo */}
      <video className="absolute inset-0 w-full h-full object-cover z-0" src="https://onnadigital.com/wp-content/uploads/2024/08/header-laptop_1.mp4" autoPlay loop muted playsInline poster="/lovable-uploads/799ef110-6e3c-4fb0-8662-da260eeba42b.png" />
      {/* Overlay oscuro encima del video */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      <div className="onna-container relative z-10">
        <ScrollAnimationWrapper className="max-w-3xl animate-fade-in flex flex-col items-start">
          {/* Logo como título principal */}
          <p className="text-gray-300 text-lg md:text-xl mb-10">
            Mejoramos negocios a través de la digitalización
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contacto" className="btn-primary">
              Contáctanos
            </Link>
            <Link href="/servicios" className="border border-white text-white px-6 py-3 inline-block font-medium hover:bg-white hover:text-onna-black transition-all">
              Nuestros servicios
            </Link>
          </div>
        </ScrollAnimationWrapper>
      </div>
      
      {/* Elementos decorativos */}
      <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-r from-teal-500/10 to-cyan-500/10 blur-3xl transform -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
    </section>
  )
}

export default HeroSection 