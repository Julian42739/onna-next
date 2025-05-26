'use client'

import React from 'react'
import Link from 'next/link'
import ScrollAnimationWrapper from '../common/ScrollAnimationWrapper'

const CtaSection = () => {
  return (
    <section className="py-20 bg-[#045adc] text-white">
      <div className="onna-container">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <ScrollAnimationWrapper className="mb-10 md:mb-0 md:max-w-xl" animation="fade-right">
            <h2 className="onna-heading mb-6">¿Listo para impulsar tu negocio?</h2>
            <p className="text-gray-300 text-lg">
              Agenda una consulta gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos digitales.
            </p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper animation="fade-left" delay={200}>
            <Link
              href="/contacto"
              className="bg-white text-onna-black font-bold px-8 py-4 text-lg inline-block hover:bg-opacity-90 transition-all"
            >
              Contáctanos ahora
            </Link>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  )
}

export default CtaSection 