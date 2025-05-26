'use client'

import React from 'react'
import Image from 'next/image'
import ScrollAnimationWrapper from '../common/ScrollAnimationWrapper'

const testimonials = [
  {
    id: 1,
    quote: 'Onna Digital transformó completamente nuestra presencia online. Nuestro tráfico web ha aumentado un 200% y las conversiones han crecido significativamente.',
    author: 'María García',
    company: 'TechSolutions',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    quote: 'El equipo de Onna Digital no solo entendió nuestra visión, sino que la elevó a otro nivel. Su servicio personalizado y su enfoque en resultados los hace incomparables.',
    author: 'Carlos Rodríguez',
    company: 'Innovate Studios',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 3,
    quote: 'La estrategia SEO implementada por Onna Digital nos posicionó entre los primeros resultados de búsqueda en tiempo récord. Excelente profesionalidad y resultados.',
    author: 'Laura Martínez',
    company: 'GreenLife',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="onna-container">
        <ScrollAnimationWrapper className="text-center mb-16">
          <h2 className="onna-heading mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            El éxito de nuestros clientes es nuestro mayor orgullo. 
            Estos testimonios reflejan nuestro compromiso con la excelencia.
          </p>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollAnimationWrapper key={testimonial.id} delay={index * 100} animation="fade-up">
              <div className="bg-onna-gray p-8 rounded-md shadow-sm">
                <div className="flex items-center mb-6">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <blockquote>
                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                </blockquote>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection 