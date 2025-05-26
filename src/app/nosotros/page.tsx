import dynamic from 'next/dynamic'
import Image from 'next/image'

const Layout = dynamic(() => import('@/components/layout/Layout'), { ssr: true })

const teamMembers = [
  {
    id: 1,
    name: "Ana Rodríguez",
    position: "CEO & Fundadora",
    bio: "Experta en marketing digital con más de 10 años de experiencia en el sector. Ha liderado estrategias para marcas nacionales e internacionales.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  },
  {
    id: 2,
    name: "Carlos Martín",
    position: "Director Creativo",
    bio: "Diseñador con amplia experiencia en branding y UX/UI. Ha trabajado para grandes marcas definiendo su identidad visual y experiencias digitales.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  },
  {
    id: 3,
    name: "Elena Sanz",
    position: "Especialista SEO",
    bio: "Experta en posicionamiento web con un enfoque analítico y estratégico. Ha conseguido posicionar más de 100 empresas en las primeras posiciones de Google.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  },
  {
    id: 4,
    name: "David López",
    position: "Desarrollador Web",
    bio: "Programador full-stack especializado en React y Node.js. Ha desarrollado soluciones web para startups y empresas consolidadas.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  },
  {
    id: 5,
    name: "Lucía Fernández",
    position: "Social Media Manager",
    bio: "Especialista en gestión de comunidades online. Ha implementado estrategias de redes sociales para aumentar la visibilidad y engagement de diversas marcas.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  },
  {
    id: 6,
    name: "Javier García",
    position: "Analista Digital",
    bio: "Experto en análisis de datos y medición de resultados. Especializado en Google Analytics y herramientas de Business Intelligence.",
    image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  },
];

const values = [
  {
    id: 1,
    title: "Innovación",
    description:
      "Exploramos constantemente nuevas ideas y tecnologías para ofrecer soluciones creativas y efectivas.",
  },
  {
    id: 2,
    title: "Excelencia",
    description:
      "Nos esforzamos por superar las expectativas en cada proyecto, buscando siempre la máxima calidad.",
  },
  {
    id: 3,
    title: "Transparencia",
    description:
      "Mantenemos una comunicación clara y honesta con nuestros clientes durante todo el proceso.",
  },
  {
    id: 4,
    title: "Resultados",
    description:
      "Nos enfocamos en estrategias orientadas a objetivos medibles y crecimiento tangible.",
  },
];

export default function NosotrosPage() {
  return (
    <Layout>
      <section className="bg-onna-black text-white py-20">
        <div className="onna-container">
          <h1 className="onna-heading text-center mb-6">Sobre Nosotros</h1>
          <p className="text-gray-300 text-lg text-center max-w-3xl mx-auto">
            Somos un equipo de profesionales apasionados por el marketing digital
            y comprometidos con el éxito de nuestros clientes.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="onna-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Nuestra Historia</h2>
              <p className="text-gray-600 mb-4">
                Onna Digital nació en 2015 con la visión de transformar la forma
                en que las empresas se comunican en el entorno digital. Desde
                nuestros inicios, nos hemos comprometido a ofrecer soluciones
                innovadoras y efectivas que generan resultados tangibles.
              </p>
              <p className="text-gray-600 mb-4">
                A lo largo de estos años, hemos crecido hasta convertirnos en
                una agencia de referencia en el sector, trabajando con clientes
                de diversos tamaños y sectores. Nuestro enfoque estratégico y
                orientado a resultados nos ha permitido establecer relaciones
                duraderas basadas en la confianza y el éxito compartido.
              </p>
              <p className="text-gray-600">
                Hoy, seguimos evolucionando y adaptándonos a las nuevas
                tendencias digitales, siempre con el objetivo de impulsar el
                crecimiento de nuestros clientes en un entorno cada vez más
                competitivo y cambiante.
              </p>
            </div>
            <div className="bg-onna-gray h-80 rounded-md"></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-onna-gray">
        <div className="onna-container">
          <h2 className="text-3xl font-bold text-center mb-16">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.id} className="bg-white p-8 rounded-md shadow-sm">
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="onna-container">
          <h2 className="text-3xl font-bold text-center mb-6">Nuestro Equipo</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">
            Contamos con profesionales especializados en diferentes áreas del
            marketing digital, unidos por la pasión por lo que hacemos y el
            compromiso con nuestros clientes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-onna-gray p-8 rounded-md overflow-hidden"
              >
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center mb-1">
                  {member.name}
                </h3>
                <p className="text-center text-onna-black mb-4">
                  {member.position}
                </p>
                <p className="text-gray-600 text-center">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
} 