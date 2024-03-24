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
      <a className="button-back" href="#home"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAACNElEQVR4nN2YzW7TQBDH04pybvocFNGmlPIgSA05Vkp2nEOBE7SHSECVD+AO4g16qZqdRBwiCIhjD/QxorxCqz8a22ljJ3G8XtuVutJIPsSTn//ztbuFwn1YaDRWQeePoXovofQRiFuuybPDZdR7myhgJXuQavc5SH8H8RjEWGJj97eqv5c+CHWfQunfMSDmm+IhiEv2IC9OH4L4MxRfJ4a5tSuQ7qB6sZZQFS6C9N8UQML2R3ybwRz82IDiywxgJiG8jA3lhSkTZTCjVJzwuTmTPQx8pdrRMNXejpd8uQFdo6Z3FwPZlDYlhdI/I5pezjA0gZrTPP0OnNTpCZT+aPH+tzmzKdY4wKx139z4cfh1Mh96FJh97qC0gIEoRHxiBaX0o1ugmq6YO+C3Psz7qS/t+MXxytifw+Xp3nNsoQzC+ZRIKaWPpoFadspwOCeSKNUyB1ITGP0hxhd/MoRqmYbsOCJMi8wLn7erNAiZbEWXvVDTFSj+Ypys8k6cogkkteyBTf+IUrZA2RewkrwxcgoWaowpjA5YAn2dnWWqv3dnQA4/mwHyoNzTQc65w4O5MH5Jl3LdoBFfQfW3FgL5udTJMXeakTAuUPVizT+qZB2qIRq/HiwF8kNXzPQYRPwPh2frsWACUJSBUqKMKUwgfIrbKSW6HKWbscMUCVbvbsvpwEKVARx+Yg0SXtLAZEPutvrlFTSSDryw6aW5ILNPBrJcTpF+d3NhJc9K78ugzOXCKo/1H5nDwgI2O+E7AAAAAElFTkSuQmCC"/></a>
      <Button><a href="https://drive.google.com/file/d/1MTQDax2VdVm0-xqcLzxGbTfKdVuMf_ws/view?usp=sharing" target="_blank">Descargar C.V.</a></Button>
      <AllProjects/>
      <Skills/>
      <Footer></Footer>
      
    </>
  )
}

export default App
