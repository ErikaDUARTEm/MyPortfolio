const section = document.getElementById("projects");
const projects = [
          {
          "name": "Trivia",
          "image": "./img/foto-trivia.png",
          "url":"https://erikaduartem.github.io/trivia-Laboratoria/",
          "repositorio":"https://github.com/ErikaDUARTEm/trivia-Laboratoria",
          "description":"Trivía con la temática de películas.",
          "technologies": "Html, Css, Javascript, Git, Github.",
          },
          {
          "name": "National Security",
          "image": "https://raw.githubusercontent.com/ErikaDUARTEm/DEV001-cipher/main/src/img/national%20security.jpg",
          "url":"https://erikaduartem.github.io/DEV001-cipher/",
          "repositorio":"https://github.com/ErikaDUARTEm/DEV001-cipher",
          "description":"National Security es un software para encriptar mensajes basado en el Cifrado César.",
          "technologies": "Html, Css, Javascript, Jest, Git, Github.",
          },
          {
          "name": "Data lovers",
          "image": "https://raw.githubusercontent.com/ErikaDUARTEm/DEV001-data-lovers/main/src/img/HeaderReadme.png",
          "url":"https://erikaduartem.github.io/DEV001-data-lovers/",
          "repositorio":"https://github.com/ErikaDUARTEm/DEV001-data-lovers",
          "description":"Podrás aprender sobre el mundo de Pokémon, ver cartas con imágenes y nombres de todos los Pokémon, ordenar las cartas con nombres en orden alfabético, buscar por nombre para obtener más detalles y buscarlos por tipos.",
          "technologies": "Html, Css, Javascript, Jest, Git, Github.",
          },
          {
          "name": "Down Family",
          "image": "https://raw.githubusercontent.com/ErikaDUARTEm/DEV001-social-network/main/src/img/HU1%20-%20PAF%20-%20%20Mobil.png",
          "url":"https://dev-001-social-network-orcin.vercel.app/",
          "repositorio":"https://github.com/ErikaDUARTEm/DEV001-social-network",
          "description":"Down Family es una red social dirigida a padres o familias con hijos que tienen Síndrome de Down.",
          "technologies": "Html, Css, Javascript, Firebase, Jest, Git, Github.",
          },
          {
          "name": "Md-linksek",
          "image": "https://raw.githubusercontent.com/ErikaDUARTEm/DEV001-md-links/main/img/Welcome.png",
          "url":"https://www.npmjs.com/package/md-linksek",
          "repositorio":"https://github.com/ErikaDUARTEm/DEV001-md-links",
          "description":"Md-linksek es una biblioteca que te ayuda a extraer los enlaces encontrados dentro de un archivo .md y validar el estado de estos enlaces, el número de enlaces, si son únicos y si hay enlaces rotos.",
          "technologies": "Html, Css, Javascript, Node.js, Jest, Git, Github.",
          },
          {
          "name": "Calculator",
          "image": "https://raw.githubusercontent.com/ErikaDUARTEm/Calculadora/main/src/img/calculator.png",
          "url":"https://erikaduartem.github.io/Calculadora/",
          "repositorio":"https://github.com/ErikaDUARTEm/Calculadora",
          "description":"Calculadora para realizar operaciones matemáticas simples.",
          "technologies": "Html, Css, Javascript, Git, Github."
          },
          {
            "name": "Ricky Morty",
            "image": "https://raw.githubusercontent.com/ErikaDUARTEm/app-ricky-morty-react/main/src/img/rick-morty.png",
            "url":"https://app-ricky-morty-react.vercel.app/",
            "repositorio":"https://github.com/ErikaDUARTEm/app-ricky-morty-react",
            "description":"App de busqueda de personajes de Ricky Morty con react y consumiendo una Api.",
            "technologies": "Html, Css, Javascript, React, Git, Github."
            },
            {
              "name": "Juego Tic Toc Toe",
              "image": "https://raw.githubusercontent.com/ErikaDUARTEm/MyPortfolio/main/src/img/tictoctoe.png",
              "url":"https://tic-toc-toe-con-react-gf7j17t8t-erikaduartem.vercel.app/",
              "repositorio":"https://github.com/ErikaDUARTEm/Tic-toc-toe-con-react",
              "description":"Popular juego llamado tic toc toe",
              "technologies": "Html, Css, Javascript, React, Git, Github."
              },
              {
                "name": "Ecommerce web day",
                "image": "https://raw.githubusercontent.com/ErikaDUARTEm/MyPortfolio/main/src/img/ecommerce.png",
                "url":"https://ecommerce-web-day-rs4w-o92b4ifq1-erikaduartem.vercel.app/",
                "repositorio":"https://github.com/ErikaDUARTEm/ecommerce-web-day",
                "description":"Ecommerce consumiendo Api.",
                "technologies": "Html, Javascript, Bootstrap 5, React, Git, Github."
                },
                {
                  "name": "Block notes",
                  "image": "https://github.com/ErikaDUARTEm/block-notes-php/blob/main/assets/img/addNew.png",
                  "url":"https://github.com/ErikaDUARTEm/block-notes-php",
                  "repositorio":"https://github.com/ErikaDUARTEm/block-notes-php",
                  "description":"Es una app web para guardar notas, podrás crear, leer, editar y eliminar de la base de datos a la que la conectes.",
                  "technologies": "Html, Css, Php, PDO, Mysql, Xampp, PhpMyAdmin, Git, Github."
                  }
      ]; 

const cardProjects = (data) => {
    const card = `
      <article class="card-projects">
        <article class="allprojects">
              <figure>
              
              <img src=${data.image} class="img-project"
              />
            </a>
          </figure>
          <div class="container-description-card">
          <p class="allText-card">${data.name}</p> 
          <p class="description-card">Descripción: ${data.description}</p>
          <p class="text-card">${data.technologies}</p>
          </div>
          <div class="container-button-card">
          <button type="button" class="button-card"><a
          href=${data.repositorio}
          target="_blank">Repositorio</button>
          <button type="button" class="button-card"><a
          href=${data.url}
          target="_blank">Demo</button>
          </div>
      </article>
  `
  return card;
  
};

    projects.forEach((proje)=>{
    section.insertAdjacentHTML("beforeEnd", cardProjects(proje));
})



