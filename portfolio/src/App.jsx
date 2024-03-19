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
      <Skills/>
      <Footer></Footer>
      
    </>
  )
}

export default App
