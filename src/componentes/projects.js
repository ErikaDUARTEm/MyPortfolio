const section = document.getElementById("projects");
const projects = [
          {
          "name": "Trivia",
          "image": "./img/foto-trivia.png",
          "url":"https://erikaduartem.github.io/trivia-Laboratoria/",
          "description":"Movie Trivia",
          "technologies": "Html, Css, Javascript",
          },
          {
          "name": "National Security",
          "image": "https://raw.githubusercontent.com/ErikaDUARTEm/DEV001-cipher/main/src/img/national%20security.jpg",
          "url":"erikaduartem.github.io/DEV001-cipher/",
          "description":"National SecurityIt is a software for encrypting messages based on the Cesar Cipher.",
          "technologies": "Html, Css, Javascript, Jest, Git, Github",
          },
          {
          "name": "Data lovers",
          "image": "https://raw.githubusercontent.com/ErikaDUARTEm/DEV001-data-lovers/main/src/img/HeaderReadme.png",
          "url":"https://erikaduartem.github.io/DEV001-data-lovers/",
          "description":"You will be able to learn about the world of Pokémon, view cards with images and names of all the Pokémon, sort the cards with names in alphabetical order, search by name to find out more details, and search for them by types.",
          "technologies": "Html, Css, Javascript, Jest, Git, Github",
          },
          {
          "name": "Down Family",
          "image": "https://raw.githubusercontent.com/ErikaDUARTEm/DEV001-social-network/main/src/img/HU1%20-%20PAF%20-%20%20Mobil.png",
          "url":"https://dev-001-social-network-orcin.vercel.app/",
          "description":"Down FamilyIt is a social network aimed at parents or families with children who have Down Syndrome. The goal is to interact and share information about topics related to Down Syndrome.",
          "technologies": "Html, Css, Javascript, Firebase, Jest, Git, Github",
          },
          {
          "name": "Md-linksek",
          "image": "https://raw.githubusercontent.com/ErikaDUARTEm/DEV001-md-links/main/img/Welcome.png",
          "url":"www.npmjs.com/package/md-linksek",
          "description":"Md-linksek It is a library that helps you extract the links found within a .md file and validate the status of these links, the number of links, whether they are unique, and whether there are broken links.",
          "technologies": "Html, Css, Javascript, Node.js, Jest, Git, Github",
          },
          {
          "name": "Calculator",
          "image": "https://raw.githubusercontent.com/ErikaDUARTEm/Calculadora/main/src/img/calculator.png",
          "url":"https://erikaduartem.github.io/Calculadora/",
          "description":"Calculator for simple operations.",
          "technologies": "Html, Css, Javascript, Git, Github"
          }
      ]; 

const cardProjects = (data) => {
    const card = `
      <article class="card-projects">
        <article class="allprojects">
              <figure>
              <a
              href=${data.url}
              target="_blank"
            >
              <img src=${data.image} class="img-project"
              />
            </a>
            <figcaption class="allText">${data.name}</figcaption> 
          </figure>
          <p class="text-card">${data.technologies}</p>
      </article>
  `
  return card;
  
};

    projects.forEach((proje)=>{
    section.insertAdjacentHTML("beforeEnd", cardProjects(proje));
})



