export const aboutme = () => {
    const about = `
    <article class="container-aboutme">
          <h2 class="skills">About me</h2>
          <article class="text-about 
          ">
            <p class="allText-about">
            Hace más de un año inicie en el mundo de la programación como autodidacta, 
            hasta que postule a el bootcamp de desarrollo web de Laboratoria, 
            el cual fue un programa intensivo de 6 meses 100% remoto, donde compartí con mujeres de Perú, 
            México, Chile, Colombia y Venezuela, con las cuales desarrolle proyectos desde la metodología ágil scrum 
            y además de adquirir conocimientos en tecnologías como HTML, CSS, JAVASCRIPT, GIT, GITHUB, NODE.JS, FIGMA, 
            TRELLO, REACT, también fortalecimos nuestras habilidades blandas, como el trabajo en equipo, resolución de problemas,
            colaboración, autoaprendizaje, comunicación eficaz entre otras, Finalmente obtuve el certificado de desarrolladora web frontend;
            y adicional a ello, he potenciado mis skills con cursos en platzi, código facilito, un curso de SQL(MySQL) con la empresa Globant
            y un curso de fundamentos de CodeIgniter(Php) con la fundación universitaria Confenalco.
            Actualmente me encuentro en busqueda de esa primera oportunidad laboral en el mundo tech, que impulse mi carrera como desarrolladora web, 
            puesto que, una de mis metas es convertirme en desarrolladora web full stack y llegar a liderar un equipo de desarrollo. 
            </p>
          </article>
          
        </article>
    `
    return about;
}
const section = document.querySelector(".aboutme");

section.insertAdjacentHTML("afterbegin", aboutme());