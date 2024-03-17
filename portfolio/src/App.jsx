import './App.css';
import { ButtonCv } from './components/buttons/ButtonCv';
import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import { Projects } from './components/projects/Projects';
import fotoTrivia from './assets/fotoTrivia.png';

function App() {

  return (
    <>
      <Header/>
      <Home/>
      <ButtonCv>Descargar C.V.</ButtonCv>
      <Projects
      imagen={fotoTrivia} 
      title={"Trivia"} description={"Trivía con la temática de películas."} 
      technologies={ "Html, Css, Javascript, Git, Github."}
      url={"https://erikaduartem.github.io/trivia-Laboratoria/"}
      repo={"https://github.com/ErikaDUARTEm/trivia-Laboratoria"}
      />
    </>
  )
}

export default App
