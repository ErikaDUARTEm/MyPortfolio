const hamburguer = document.querySelector(".menu-hamburguer")

const menu = document.querySelector(".nav");
console.log(menu)
console.log(hamburguer)

hamburguer.addEventListener("click", ()=>{
    menu.classList.add("spread");
})

window.addEventListener("click", (e)=>{
    if(menu.classList.contains("spread") && e.target !=menu && e.target != hamburguer){
        menu.classList.toggle("spread");
    }
})