import './App.css';
import { ButtonCv } from './components/buttons/ButtonCv';
import { Header } from './components/header/Header';
import { Home } from './components/home/Home';


import { Skills } from './components/skills/Skills';
import { Footer } from './components/footer/Footer';
import { AllProjects } from './components/projects/AllProjects';


function App() {

  return (
    <>
      <Header/>
      <Home/>
      <ButtonCv>Descargar C.V.</ButtonCv>
      <AllProjects/>
      <section className="container-skills">
          <Skills id={1} imagen={"https://img.icons8.com/color/48/000000/javascript.png"} title={"Javascript"}/>
          <Skills id={1} imagen={"https://img.icons8.com/color/48/000000/javascript.png"} title={"Javascript"}/>
          <Skills id={1} imagen={"https://img.icons8.com/color/48/000000/javascript.png"} title={"Javascript"}/>
      </section>
      <Footer></Footer>
      
    </>
  )
}

export default App
