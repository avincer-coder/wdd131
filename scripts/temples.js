btnNav = document.getElementById("btnHamburger")
console.log(btnNav)
deployNav = document.getElementById("navMenu")
clickCloseNav = document.getElementById("closeNavClick")

console.log(clickCloseNav)

btnNav.addEventListener("click", function(){
    deployNav.style.transform = "translate(0, -40px)" 
    deployNav.style.marginBottom = 
    "70px"
})

clickCloseNav.addEventListener("click", function(){
    deployNav.style.transform = "translate(0, -170px)"
    deployNav.style.marginBottom =
    "0"
})

