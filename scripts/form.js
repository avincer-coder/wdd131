const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

form = document.getElementsByTagName("form")[0];
selectLable = document.getElementById("product")

products.forEach(product=>{
    const optionLabel = document.createElement('option');
    optionLabel.value = product.name
    optionLabel.textContent = product.name
    selectLable.appendChild(optionLabel);
})




form.addEventListener("submit", function(event){
  // event.preventDefault();
  if (localStorage.getItem("contador") === null) {
    // Si no existe, inicialízala en 1
    localStorage.setItem("contador", 1);
} else {
    // Si existe, obtén el valor actual, conviértelo a número, súmale 1 y vuelve a guardarlo
    let contador = parseInt(localStorage.getItem("contador"));
    contador += 1;
    localStorage.setItem("contador", contador);
}

// Muestra el valor actual de "contador"
console.log("Contador:", localStorage.getItem("contador"));

//     event.preventDefault();

    
//     inputName = document.getElementById("name").value
//     localStorage.setItem("name", inputName);

//     inputReview = document.getElementById("review").value
//     localStorage.setItem("review", inputReview)

//     inputRating = document.querySelector("input[name='rating']:checked").value
//     localStorage.setItem("rating", inputRating)

//     inputDate = document.getElementById("installation-date").value
//     localStorage.setItem("date", inputDate)

//     inputSelect = document.getElementById("product").value
//     localStorage.setItem("select", inputSelect)

//     inputCheckboxFeature = Array.from(document.querySelectorAll("input[name='feature']:checked")).map(checkbox=>checkbox.value)
//     localStorage.setItem("checkbox", inputCheckboxFeature)
//     console.log(inputCheckboxFeature)

    // window.location.href = "review.html"
})