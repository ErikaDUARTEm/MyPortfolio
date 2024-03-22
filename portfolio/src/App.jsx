import './App.css';
import { Button } from './components/buttons/Button';
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
      <Button><a href="https://drive.google.com/file/d/1MTQDax2VdVm0-xqcLzxGbTfKdVuMf_ws/view?usp=sharing" target="_blank">Descargar C.V.</a></Button>
      <AllProjects/>
      <Skills/>
      <Footer></Footer>
      
    </>
  )
}

export default App
