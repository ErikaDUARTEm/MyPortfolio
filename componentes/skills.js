export const skills = () => {
    const skill = `
    <article class="tecno">
          <h2 class="skills">Skills</h2>
          <article class="allTecno">
            <ul class="allTecno">
              <li>
                <figure class="card">
                <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
              >
                <img
                  src="https://img.icons8.com/color/48/000000/javascript.png"
                 
                />
              </a>
              <figcaption>Javascript</figcaption> 
            </figure>
              </li>
              <li>
              <figure class="card"> 
                <a href="https://www.w3.org/html/" target="_blank">
                  <img src="https://img.icons8.com/color/48/000000/html-5.png" />
                </a>
                <figcaption>Html5</figcaption> 
              </figure>
            </li>
              <li> 
                <figure class="card">
                <a href="https://www.w3schools.com/css/" target="_blank">
                  <img src="https://img.icons8.com/color/48/000000/css3.png"/>
                </a>
                <figcaption>Css3</figcaption> 
              </figure>
              </li>
              <li>
                <figure class="card">
                <a href="https://firebase.google.com/" target="_blank">
                  <img src="https://img.icons8.com/color/48/000000/firebase.png" />
                </a>
                <figcaption>Firebase</figcaption> 
              </figure>
              </li>
             <li>
              <figure class="card">
              <a href="https://www.figma.com/" target="_blank">
                <img src="https://img.icons8.com/office/45/000000/figma.png" />
              </a>
              <figcaption>Figma</figcaption> 
            </figure>
             </li>
             <li>
              <figure class="card">
              <a href="https://git-scm.com/" target="_blank">
                <img src="https://img.icons8.com/color/48/000000/git.png" />
              </a>
              <figcaption>Git</figcaption>
            </figure> 
             </li>
             <li>
              <figure class="card">
              <a href="https://trello.com/" target="_blank"
              ><img
                src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/null/external-trello-a-web-based-list-making-application-for-multi-platform-logo-color-tal-revivo.png"
              />
            </a>
            <figcaption>Trello</figcaption>
          </figure> 
             </li>
            <li>
              <figure class="card">
              <a href="https://nodejs.org/api/path.html" target="_blank"
              ><img src="https://img.icons8.com/color/48/null/nodejs.png"
            /></a>
            <figcaption>Node.js</figcaption>
          </figure> 
            </li>
            <li>
              <figure class="card">
              <a href="https://github.com/ErikaDUARTEm" target="_blank"
              ><img src="https://img.icons8.com/fluency/48/null/github.png"/></a>
              <figcaption>Github</figcaption> 
            </figure>
            </li>
            <li>
              <figure class="card">
              <a href="https://jestjs.io/" target="_blank"
            ><img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/null/external-jest-can-collect-code-coverage-information-from-entire-projects-logo-color-tal-revivo.png"/></a>
              <figcaption>Jest</figcaption>
          </figure> 
          </li>
          </ul>
          </article>
        </article>
    `
    return skill;
}
const section = document.querySelector(".skill");

section.insertAdjacentHTML("beforeEnd", skills());