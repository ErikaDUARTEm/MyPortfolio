export const skills = () => {
    const skill = `
    <article class="tecno">
          <h2 class="skills">Skills</h2>
          <article class="allTecno">
            <ul class="allTecno">
              <li>
                <figure class="card">
                <img
                  src="https://img.icons8.com/color/48/000000/javascript.png"/>
              <figcaption>Javascript</figcaption> 
            </figure>
              </li>
              <li>
              <figure class="card"> 
                  <img src="https://img.icons8.com/color/48/000000/html-5.png"/>
                <figcaption>Html5</figcaption> 
              </figure>
            </li>
              <li> 
                <figure class="card">
                  <img src="https://img.icons8.com/color/48/000000/css3.png"/>
                <figcaption>Css3</figcaption> 
              </figure>
              </li>
              <li>
                <figure class="card">
                  <img src="https://img.icons8.com/color/48/000000/firebase.png" />
                <figcaption>Firebase</figcaption> 
              </figure>
              </li>
             <li>
              <figure class="card">
                <img src="https://img.icons8.com/office/45/000000/figma.png" />
              <figcaption>Figma</figcaption> 
            </figure>
             </li>
             <li>
              <figure class="card">
                <img src="https://img.icons8.com/color/48/000000/git.png" />
              <figcaption>Git</figcaption>
            </figure> 
             </li>
             <li>
              <figure class="card">
              <img
                src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/null/external-trello-a-web-based-list-making-application-for-multi-platform-logo-color-tal-revivo.png"
              />
            <figcaption>Trello</figcaption>
          </figure> 
             </li>
            <li>
              <figure class="card">
              <img src="https://img.icons8.com/color/48/null/nodejs.png"/>
            <figcaption>Node.js</figcaption>
          </figure> 
            </li>
            <li>
              <figure class="card">
              <img src="https://img.icons8.com/fluency/48/null/github.png"/>
              <figcaption>Github</figcaption> 
            </figure>
            </li>
            <li>
              <figure class="card">
              <img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/null/external-jest-can-collect-code-coverage-information-from-entire-projects-logo-color-tal-revivo.png"/>
              <figcaption>Jest</figcaption>
          </figure> 
          </li>
          <li>
              <figure class="card">
              <img width="48" height="48" src="https://img.icons8.com/plasticine/48/react.png" alt="react"/>
              <figcaption>React</figcaption>
          </figure> 
          </li>
          <li>
              <figure class="card">
              <img width="48" height="48" src="https://img.icons8.com/fluency/48/my-sql.png" alt="my-sql"/>
              <figcaption>MySQL</figcaption>
          </figure> 
          </li>
          <li>
              <figure class="card">
              <img width="48" height="48" src="https://img.icons8.com/officel/48/php-logo.png" alt="php-logo"/>
              <figcaption>Php</figcaption>
          </figure> 
          </li>
          <li>
              <figure class="card">
              <img width="48" height="48" src="https://img.icons8.com/color/48/bootstrap.png" alt="bootstrap"/>
              <figcaption>Bootstrap</figcaption>
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