import dynamic from 'next/dynamic'

const Layout = dynamic(() => import('@/components/layout/Layout'), { ssr: true })

export default function ContactoPage() {
  return (
    <Layout>
      <div className="onna-container py-20">
        <h1 className="onna-heading mb-8">Contacto</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Información de Contacto</h2>
            <div className="space-y-4">
              <p className="flex items-center">
                <span className="font-medium mr-2">Email:</span>
                info@onnadigital.com
              </p>
              <p className="flex items-center">
                <span className="font-medium mr-2">Teléfono:</span>
                649456255
              </p>
              <p className="flex items-center">
                <span className="font-medium mr-2">Dirección:</span>
                Carrer de Pedralba, 36b<br />
                46191 – Vilamarxant (Valencia)
              </p>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-6">Envíanos un mensaje</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
} 