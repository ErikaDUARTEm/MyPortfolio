const section = document.getElementById("projects");

const cardProjects = (data) => {
    const card = `
      <article class="card-projects">
        <article class="allprojects">
              <figure  >
              <a
              href=${data.url}
              target="_blank"
            >
              <img src=${data.image}
              />
            </a>
            <figcaption>${data.name}</figcaption> 
          </figure>
          <p>${data.description}</p>
          <p>${data.technologies}</p>
      </article>
  `
  return card;
  
};
fetch("http://localhost:5000/projects")
   .then((response)=> response.json())
   .then((data) => {
    data.forEach((proje)=>{
    section.insertAdjacentHTML("beforeEnd", cardProjects(proje));
})
})



