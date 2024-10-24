btnNav = document.getElementById("btnHamburger")
console.log(btnNav)
deployNav = document.getElementById("navMenu")
clickCloseNav = document.getElementById("closeNavClick")
mainTag = document.getElementsByTagName("main")[0]
console.log(clickCloseNav)
btnHome = document.getElementById("btnHome")
btnOld = document.getElementById("btnOld")
btnNew = document.getElementById("btnNew")
btnLarge = document.getElementById("btnLarge")
btnSmall = document.getElementById("btnSmall")

btnHome.addEventListener("click", function(){
  console.log("Mostrar todas las imagenes")
})
btnOld.addEventListener("click", function(){
  oldDateFilter = temples.filter(old=>{
    const oldDate = parseInt(old.dedicated.split(",")[0])
    return oldDate<1900
  })
  console.log(oldDateFilter)
  cardImageCreation(oldDateFilter)
  
})
btnNew.addEventListener("click", function(){
    newDateFilter = temples.filter(newDate=>{
    const newFilteredDate = parseInt(newDate.dedicated.split(",")[0])
    return newFilteredDate>2000
  })
  console.log(newDateFilter)
})

btnLarge.addEventListener("click", function(){
  const templesFilteredLarge = temples.filter(date=>date.area>=90000)
  console.log("btn large")
  console.log(templesFilteredLarge)
})
btnSmall.addEventListener("click", function(){
  const templesFilteredSmall =  temples.filter(date=>date.area<=10000)
  console.log("btn small")
  console.log(templesFilteredSmall)
})

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

// ------------Dynamic image generation--------------

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Charlotte North Carolina Temple",
      location: "Weddington, North Carolina",
      dedicated: "2023, April, 2",
      area: 30000,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/charlotte-north-carolina-temple/charlotte-north-carolina-temple-38371.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },



    // Add more temple objects here...
  ];

function cardImageCreation(templeArray){
  console.log("esta funcion es de prueba")
sectionHomePictures = document.getElementsByClassName("homePictures")[0]

templeArray.forEach(function(temple, indice){
    figureLable = document.createElement('figure')
    

    imgLable = document.createElement('img')
    imgLable.src = templeArray[indice].imageUrl
    imgLable.alt = templeArray[indice].templeName

pLabelLocation = document.createElement('p')
pLabelLocation.textContent = templeArray[indice].location

pLabelDedicated = document.createElement('p')
pLabelDedicated.textContent = templeArray[indice].dedicated

pLabelArea = document.createElement('p')
pLabelArea.textContent = templeArray[indice].area

figcaptionLable = document.createElement('figcaption')
figcaptionLable.textContent = templeArray[indice].templeName

sectionHomePictures.appendChild(figureLable)
figureLable.appendChild(imgLable)
figureLable.appendChild(figcaptionLable)
figureLable.appendChild(pLabelLocation)
figureLable.appendChild(pLabelDedicated)
figureLable.appendChild(pLabelArea)
})








}

cardImageCreation(temples)




