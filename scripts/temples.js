btnNav = document.getElementById("btnHamburger")
console.log(btnNav)
deployNav = document.getElementById("navMenu")
clickCloseNav = document.getElementById("closeNavClick")
mainTag = document.getElementsByTagName("main")[0]
console.log(clickCloseNav)

btnNav.addEventListener("click", function(){
    deployNav.style.top = "0" 
    mainTag.style.marginTop = "70px"
})

clickCloseNav.addEventListener("click", function(){
    deployNav.style.top = "-200px"
    mainTag.style.marginTop = "0"
})

// window seleciona toda la pantalla no viene en elementos porque esta oculto
window.addEventListener("resize", function(){
    if(window.innerWidth > 850 ){
        deployNav.style.top = "0" 
    }
    else{
        mainTag.style.marginTop = "70px"
    }
})