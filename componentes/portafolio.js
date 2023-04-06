export const mensaje = () => {
    const msj = `
    <article class="container rgb">
          <picture class="foto">
            <source media="(min-width:1300px)" srcset="./img/large.jpg"/>
            <source media="(min-width:1000px)" srcset="./img/medium.jpg"/>
            <img src="./img/Erikaperfil.jpg" />
          </picture>
          <div class="welcome">
            <h1 class="text">Welcome,</h1>
            <p class="text">thank you for coming to meet me.</p>
            <p class="text">I'm a front-end web developer </p>
            <p class="text">
              and I invite you to continue exploring my website and getting to know my projects and the technologies I've used.
            </p>
          </div>
        </article>
    `
    return msj;
}
const section = document.querySelector(".mensaje");
section.insertAdjacentHTML("afterbegin", mensaje());