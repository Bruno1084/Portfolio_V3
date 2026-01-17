import { Header } from "./components/header/Header";
import { Cv_Header } from "./components/cv_header/Cv_Header";
import { About } from "./components/about/About";
import { Projects } from "./components/projects/Projects";
import { Experience } from "./components/experience/Experience";
import { Education } from "./components/education/Education";
import { Stack } from "./components/stack/Stack";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";
import { useRevealOnScroll } from "./hooks/useRevealOnScroll";

function App() {
  useRevealOnScroll();

  return (
    <>
      <Header/>

      <main>
        <div id="main--container">
        <Cv_Header/>
        <About/>
        <Experience/>
        <Projects/>
        <Education/>
        <Stack/>
        <Contact/>
        <Footer/>
        </div>

      </main>
    </>
  )
}

export default App
