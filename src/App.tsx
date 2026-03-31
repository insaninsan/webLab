import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import About from './components/sections/About'
import ContactSection from './components/sections/ContactSection'
import Hero from './components/sections/Hero'
import ProjectList from './components/sections/ProjectList'
import Skills from './components/sections/Skills'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <ProjectList />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
