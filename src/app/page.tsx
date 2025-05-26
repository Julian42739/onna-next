import dynamic from 'next/dynamic'

const Layout = dynamic(() => import('@/components/layout/Layout'), { ssr: true })
const HeroSection = dynamic(() => import('@/components/home/HeroSection'), { ssr: true })
const ServicesSection = dynamic(() => import('@/components/home/ServicesSection'), { ssr: true })
const TestimonialsSection = dynamic(() => import('@/components/home/TestimonialsSection'), { ssr: true })
const CtaSection = dynamic(() => import('@/components/home/CtaSection'), { ssr: true })

export default function Page() {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <CtaSection />
    </Layout>
  )
}
