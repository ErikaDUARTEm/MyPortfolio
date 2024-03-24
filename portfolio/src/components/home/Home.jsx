import "./Home.css";
import Erikaperfil from "../../assets/Erikaperfil.jpg";
export function Home() {
  return (
    <>
      <section className="section-about-me" id="aboutme">
         <div className="container-img-presentation">
         <div className="container-photo-perfil">
            <img src={Erikaperfil} />
          </div>
          <article className="container-presentation">
            <h2>
              Hola! Mi nombre es <em>Erika Duarte,</em>
            </h2>
            <p>Desarrolladora web Full Stack Junior enfocada en el Frontend.</p>
          </article>
         </div>
          
        <article className="container-about-me">
          <p>
            Desde mis primeros pasos autodidactas en abril de 2022, he trazado
            una trayectoria apasionante en el ámbito tecnológico. Mi aprendizaje
            independiente sentó las bases para mi posterior ingreso al bootcamp
            de Laboratoria en septiembre de 2022, donde, durante seis intensos
            meses, perfeccioné mis habilidades en el desarrollo de software
            utilizando metodologías ágiles, especialmente Scrum; Lo que me ha
            permitido planificar eficientemente los Sprints semanales utilizando
            la plataforma Trello y dividiendo el proyecto en pequeñas tareas
            manejables, además desarrolle habilidades sociales, de comunicación
            y trabajo en equipo.
          </p>
          <p>
            Adicionalmente, he creado exitosamente aplicaciones con HTML, CSS,
            JavaScript, React.js, Node.js, consumiendo archivos JSON, Apis con
            Fetch y Ajax, base de datos en Firebase, Estructura de datos, Git,
            Desarrollo web, programación y estructuras de datos, (variable,
            función, if, bucle, operadores), HTML5, CSS3, Javascript, y
            conocimientos del concepto de versionado, GIT, Github, Test
            Unitarios con Jest, Jira, Figma, Open Project, Posterior al bootcamp
            se han adquirido nuevas skills en Lenguajes de programación,
            estructura de datos, Base de datos, SQL, PHP, Desarrollo backend,
            Java, Spring Boot, hibernate, Spring Boot test, Junit y mockito.
          </p>
          <p>
            En diciembre de 2023, fui seleccionada para participar en el
            programa de InTech Mom Latam como desarrolladora frontend junior,
            una experiencia enriquecedora que complementa mi formación en
            Laboratoria.
          </p>
          <p>
            Paralelamente, en ese mismo mes, ingresé al programa One de Oracle
            Next Education, donde estoy inmersa en el estudio especializado del
            backend con Java. Esta dualidad de experiencia en frontend y backend
            me posiciona como una profesional versátil y completa. Mi
            determinación y capacidad para adaptarme a nuevos retos, combinados
            con mi conjunto diverso de habilidades técnicas, me inspiran a
            seguir contribuyendo de manera significativa en proyectos
            innovadores.
          </p>
        </article>
      </section>
    </>
  );
}
