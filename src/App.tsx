import Contacts from "./components/Contacts"
import Hero from "./components/Hero"
import Navigation from "./components/Navigation"
import Projects from "./components/Projects"
import Skills from "./components/Skills"


function App() {


  return (
    <>
      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        <Navigation />
        <Hero />
        <Skills />
        <Projects />
        <Contacts />
      </main>

    </>
  )
}

export default App
