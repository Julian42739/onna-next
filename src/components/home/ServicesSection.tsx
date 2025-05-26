'use client'

import React from 'react'
import Link from 'next/link'
import { Globe, Database, Book, Package, Briefcase } from 'lucide-react'
import ScrollAnimationWrapper from '../common/ScrollAnimationWrapper'

const services = [
  {
    id: 1,
    title: 'Digitalización',
    description: 'Presencia online, gestión de clientes, procesos, facturación y mucho más.',
    icon: <Database className="w-10 h-10" />,
    path: '/servicios/digitalizacion'
  },
  {
    id: 2,
    title: 'Formación bonificada',
    description: 'Formación online y presencial para empresas e instituciones',
    icon: <Book className="w-10 h-10" />,
    path: '/formacion-plataforma'
  },
  {
    id: 3,
    title: 'Kit Digital',
    description: 'Hasta 3.000 euros para digitalizar tu negocio',
    icon: <Package className="w-10 h-10" />,
    path: '/kit-digital'
  },
  {
    id: 4,
    title: 'Kit Consulting',
    description: 'Hasta 24.000 euros en servicios de consultoría para tu empresa',
    icon: <Briefcase className="w-10 h-10" />,
    path: '/servicios/kit-consulting'
  }
]

const ServicesSection = () => {
  return (
    <section className="py-20 bg-onna-gray">
      <div className="onna-container">
        <ScrollAnimationWrapper className="text-center mb-16 animate-slide-up">
          <h2 className="onna-heading mb-4">Nuestros Servicios</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nos encargamos de digitalizar toda tu empresa aumentando tu presencia online y mejorando tu productividad y eficacia en el día a día
          </p>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ScrollAnimationWrapper key={service.id} delay={index * 100}>
              <div className="bg-white p-8 rounded-md shadow-sm hover:shadow-md transition-shadow group">
                <div className="text-onna-black mb-5">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-5">{service.description}</p>
                <Link href={service.path} className="inline-flex items-center text-sm font-medium text-onna-black group-hover:translate-x-1 transition-transform">
                  Saber más
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>

        <ScrollAnimationWrapper delay={400} className="mt-16 text-center">
          <Link href="/servicios" className="btn-outline">
            Ver todos los servicios
          </Link>
        </ScrollAnimationWrapper>
      </div>
    </section>
  )
}

export default ServicesSection 