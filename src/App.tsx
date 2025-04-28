import Aurora from "./components/Aurora/Aurora"
import Contacts from "./components/Contacts"
import Hero from "./components/Hero"
import Navigation from "./components/Navigation"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

function App() {
  return (
    <>
      <div className="relative w-full h-40">
        {/* Aurora as a background */}
        <div className="absolute inset-0 -z-10">
          <Aurora />
        </div>

        {/* Main content */}
        <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
          <Navigation />
          <Hero />
          <Skills />
          <Projects />
          <Contacts />
        </main>
      </div>
    </>
  )
}

export default App