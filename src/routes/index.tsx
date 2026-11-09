import { createFileRoute } from '@tanstack/react-router'

import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <>
      <a
        href="#content"
        className="absolute inset-s-2 top-2 z-10 translate-y-[-150%] bg-white px-3.5 py-2.5 text-[#080808] focus:translate-y-0"
      >
        Skip to content
      </a>
      <Header />
      <main id="content" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
