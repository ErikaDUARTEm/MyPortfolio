export const mensaje = () => {
    const msj = `
    <article class="container">
          
          <div class="welcome">
            <div class="container-presentacion">
            <h1 class="text-presentacion">Bienvenid@!
            <br>soy <span class="nombre">Erika Duarte</span> <span>Desarrolladora web</span>,</h1>
            </div>
            <div class="presentacion">
            <p class="text">
            Abogada, madre de un hermoso niño de 6 años, ah! también panadera, un don que descubrí durante la pandemia. 
            Me gusta estar en constante aprendizaje y me siento cómoda investigando lo desconocido. 
            Si quieres saber más de mí continua navegando en mi sitio... 😁 </p>
            </div>
          </div>
          <div class="container-fotoperfil">
          <img class="fotoperfil" src="/src/img/Erikaperfil.jpg" alt="foto de perfil"/>
          <div class="overlay"></div>
          </div>
        </article>
    `
    return msj;
}
const section = document.querySelector(".mensaje");
section.insertAdjacentHTML("afterbegin", mensaje());