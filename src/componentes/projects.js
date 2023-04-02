const section = document.getElementById("projects");

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
            <figcaption class="text">${data.name}</figcaption> 
          </figure>
          <p class="text-card">${data.technologies}</p>
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



