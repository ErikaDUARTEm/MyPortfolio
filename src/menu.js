const hamburguer = document.querySelector(".menu-hamburguer")

const menu = document.querySelector(".nav").classList;


hamburguer.addEventListener("click", ()=>{
    console.log("click")
    menu.add("spread");
})

window.addEventListener("click", (e)=>{
    if(menu.includes("spread") && e.target !=menu && e.target != hamburguer){
        menu.classList.toggle("spread");
    }
})