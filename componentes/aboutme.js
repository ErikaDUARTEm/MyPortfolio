export const aboutme = () => {
    const about = `
    <article class="container-aboutme">
          <h2 class="skills">About me</h2>
          <article class="text-about 
          ">
            <p class="allText">I entered the world of web development as a self-taught learner and later applied to Laboratoria's bootcamp, 
              where I met and shared with women of different ages and cultures, all united by a common goal, to become web developers. 
              For 6 months, we worked on real projects, using agile methodology with the Scrum framework and developing life skills. 
              In my future goals, I hope to continue acquiring new knowledge and growing professionally. 
              I would like to become a full-stack developer and eventually lead a development team. 
            </p>
          </article>
          
        </article>
    `
    return about;
}
const section = document.querySelector(".aboutme");

section.insertAdjacentHTML("afterbegin", aboutme());