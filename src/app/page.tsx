import Hero from './components/hero'
import ProjectGrid from './components/projectgrid'
import Footer from './components/Footer'

export default function LandingPage() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-[#0A0A0A] to-[#1A1A2E] text-white font-sans">
        <Hero />
        <ProjectGrid />
      </main>
      <Footer />
    </>
  )
}