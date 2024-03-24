import { CardProjects } from "./CardProjects";
import fotoTrivia from "../../assets/fotoTrivia.png";
import pokemon from "../../assets/pokemon.png";
import socialNetwork from "../../assets/socialNetwork.png";
import inventario from "../../assets/inventario.png";
import api from "../../assets/api.png";
import animex from "../../assets/animex.png";
import "./CardProjects.css";

export function AllProjects() {
  return (
    <>
      <div className="container-projects">
        <div className="container-title">
          <h2>Projects</h2>
        </div>
        <div className="section-all-projects">
          <CardProjects
            imagen={fotoTrivia}
            title={"Trivia"}
            description={"Trivía con la temática de películas."}
            technologies={"Html, Css, Javascript, Git, Github."}
            url={"https://erikaduartem.github.io/trivia-Laboratoria/"}
            repo={"https://github.com/ErikaDUARTEm/trivia-Laboratoria"}
          />
          <CardProjects
            imagen={
              "https://raw.githubusercontent.com/ErikaDUARTEm/DEV001-cipher/main/src/img/CifraroDescifrar.png"
            }
            title={"National Security"}
            description={
              "National Security es un software para encriptar mensajes basado en el Cifrado César."
            }
            technologies={"Html, Css, Javascript, Jest, Git, Github."}
            url={"https://erikaduartem.github.io/DEV001-cipher/"}
            repo={"https://github.com/ErikaDUARTEm/DEV001-cipher"}
          />
          <CardProjects
            imagen={pokemon}
            title={"Data lovers"}
            description={
              "Podrás aprender sobre el mundo de Pokémon, ver cartas con imágenes, buscar por nombre para obtener más detalles y buscarlos por tipos."
            }
            technologies={"Html, Css, Javascript, Jest, Git, Github."}
            url={"https://erikaduartem.github.io/DEV001-data-lovers/"}
            repo={"https://github.com/ErikaDUARTEm/DEV001-data-lovers"}
          />
          <CardProjects
            imagen={socialNetwork}
            title={"Down Family"}
            description={
              "Down Family es una red social dirigida a padres o familias con hijos que tienen Síndrome de Down."
            }
            technologies={"Html, Css, Javascript, Firebase, Jest, Git, Github."}
            url={"https://dev-001-social-network-orcin.vercel.app/"}
            repo={"https://github.com/ErikaDUARTEm/DEV001-social-network"}
          />
          <CardProjects
            imagen={
              "https://raw.githubusercontent.com/ErikaDUARTEm/DEV001-md-links/main/img/--help.png"
            }
            title={"Md-linksek"}
            description={
              "Es una libreria que te ayuda a extraer los enlaces encontrados dentro de un archivo .md y validar el estado de estos enlaces, el número de enlaces, si son únicos y si hay enlaces rotos."
            }
            technologies={"Html, Css, Javascript, Node.js, Jest, Git, Github."}
            url={"https://www.npmjs.com/package/md-linksek"}
            repo={"https://github.com/ErikaDUARTEm/DEV001-md-links"}
          />
          <CardProjects
            imagen={inventario}
            title={"Inventario CodeIgniter"}
            description={
              "Inventario para agregar, editar y eliminar productos, proveedores, empleados, asi como generar ventas y descargar en pdf reportes de las ventas diarias"
            }
            technologies={"CodeIgniter, Php, Xampp, Git, Github."}
            url={"https://isomeric-leaders.000webhostapp.com/"}
            repo={"https://github.com/ErikaDUARTEm/inventario-codeIgniter"}
          />
          <CardProjects
            imagen={api}
            title={"Api fleet Management"}
            description={
              "Desarrolle una API REST de un Fleet Management Software para consultar las ubicaciones de los vehículos de una empresa de taxis en Beijing, China."}
            technologies={"Java, Spring Boot, Spring Boot test, JUnit, Hibernate, PostgreSQL, base de datos en Vercel"}
            url={"https://github.com/ErikaDUARTEm/UPSK-JAVA-001-fleet-management-api"}
            repo={"https://github.com/ErikaDUARTEm/UPSK-JAVA-001-fleet-management-api"}
          />
          <CardProjects
            imagen={animex}
            title={"App full stack"}
            description={
              "App desarrollada en el Frontend con React.js y en el Backend con Java y Spring boot, Consiste en consumir una Api pública y crear un buscador por título y de un carrusel que muestra todos los animes con imagen y nombre y muestra las reglas de negocio enviadas desde el backend. En el backend se manejan las reglas de negocio donde se hace un cálculo de porcentaje de las puntuaciones de los animes por temporada, las que tengan una puntuación mayor a 7 es la anime mejor recomendada."}
            technologies={"Java, Spring Boot, React, Css3"}
            url={"https://github.com/ErikaDUARTEm/challenge-prueba-tecnica"}
            repo={"https://github.com/ErikaDUARTEm/challenge-prueba-tecnica"}
          />
        </div>
      </div>
    </>
  );
}
