import dynamic from 'next/dynamic'
import Image from 'next/image'

const Layout = dynamic(() => import('@/components/layout/Layout'), { ssr: true })

export default function ServiciosPage() {
  return (
    <Layout>
      <section className="bg-onna-black text-white py-24">
        <div className="onna-container">
          <h1 className="onna-heading text-center mb-8">Nuestros Servicios</h1>
          <p className="text-gray-300 text-xl text-center max-w-4xl mx-auto mb-8">
            Digitalizamos toda tu empresa
          </p>
          <p className="text-gray-400 text-lg text-center max-w-3xl mx-auto">
            Somos expertos en digitalizar pequeñas y medianas empresas de principio a fin.
          </p>
        </div>
      </section>

      <div className="onna-container py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-semibold mb-4">Digitalización</h2>
            <p className="text-gray-600 mb-6">
              Transformamos tu negocio con soluciones digitales personalizadas.
            </p>
            <a href="/servicios/digitalizacion" className="text-blue-600 hover:text-blue-800 font-medium">
              Saber más →
            </a>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-semibold mb-4">Formación Bonificada</h2>
            <p className="text-gray-600 mb-6">
              Formación online y presencial para empresas e instituciones.
            </p>
            <a href="/formacion-plataforma" className="text-blue-600 hover:text-blue-800 font-medium">
              Saber más →
            </a>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-semibold mb-4">Kit Digital</h2>
            <p className="text-gray-600 mb-6">
              Hasta 3.000 euros para digitalizar tu negocio.
            </p>
            <a href="/kit-digital" className="text-blue-600 hover:text-blue-800 font-medium">
              Saber más →
            </a>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-semibold mb-4">Kit Consulting</h2>
            <p className="text-gray-600 mb-6">
              Hasta 24.000 euros en servicios de consultoría para tu empresa.
            </p>
            <a href="/servicios/kit-consulting" className="text-blue-600 hover:text-blue-800 font-medium">
              Saber más →
            </a>
          </div>
        </div>
      </div>

      {/* Sección de Presencia Online */}
      <section className="bg-gray-100 py-20">
        <div className="onna-container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-onna-black">Presencia online</h2>
            <p className="text-gray-600 text-xl mb-6">Te ayudamos con tu visibilidad online</p>
            <p className="text-gray-700 text-lg mb-8">
              Tenemos experiencia en la creación de páginas web visualmente atractivas para mejorar tu visibilidad online.
              Además, también te ayudamos a gestionar tus redes sociales y comercio electrónico.
            </p>

            {/* Progress Bars */}
            <div className="space-y-6 mt-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium text-gray-700">SEO</span>
                  <span className="text-sm font-medium text-gray-700">80%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-2">
                  <div className="bg-onna-black h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium text-gray-700">Diseño</span>
                  <span className="text-sm font-medium text-gray-700">90%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-2">
                  <div className="bg-onna-black h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium text-gray-700">Desarrollo</span>
                  <span className="text-sm font-medium text-gray-700">87%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-2">
                  <div className="bg-onna-black h-2 rounded-full" style={{ width: '87%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Placeholder for image/graphic */}
          <div className="hidden md:flex justify-center">
             {/* Puedes añadir una imagen o gráfico aquí si tienes uno */}
             {/* <Image src="/path/to/your/image.png" alt="Presencia online Onna Digital" width={500} height={300} /> */}
             <div className="bg-gray-300 w-full h-64 rounded-lg flex items-center justify-center text-gray-600">
                Imagen o gráfico aquí
             </div>
          </div>
        </div>
      </section>

      {/* Sección de Transformación Digital */}
      <section className="bg-onna-black text-white py-20">
        <div className="onna-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para transformar tu presencia digital?</h2>
            <p className="text-gray-200 text-lg mb-8">
              Únete a las empresas que ya están creciendo con nuestra ayuda. Agenda una consulta gratuita
              y descubre cómo podemos impulsar tu negocio.
            </p>
            <a
              href="/contacto"
              className="inline-block bg-white text-[#045adc] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Comienza Ahora
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
} 