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
    // Add more temple objects here...
  ];

console.log(temples[0])


figureLable = document.createElement('figure')
sectionHomePictures = document.getElementsByClassName("homePictures")[0]


imgLable = document.createElement('img')
imgLable.src = temples[0].imageUrl
imgLable.alt = temples[0].templeName

pLabelLocation = document.createElement('p')
pLabelLocation.textContent = temples[0].location

pLabelDedicated = document.createElement('p')
pLabelDedicated.textContent = temples[0].dedicated

pLabelArea = document.createElement('p')
pLabelArea.textContent = temples[0].area

figcaptionLable = document.createElement('figcaption')
figcaptionLable.textContent = temples[0].templeName

console.log(figureLable)
console.log(sectionHomePictures)

sectionHomePictures.appendChild(figureLable)
figureLable.appendChild(imgLable)
figureLable.appendChild(figcaptionLable)
figureLable.appendChild(pLabelLocation)
figureLable.appendChild(pLabelDedicated)
figureLable.appendChild(pLabelArea)




