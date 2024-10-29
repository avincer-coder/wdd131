getContador = localStorage.getItem("contador")
console.log(getContador)

const params = new URLSearchParams(
    window.location.search
    );
    const selectedProductId = params.get('product');
    const inputNameValue = params.get('name');
    const inputReviewValue = params.get('review');
    const inputRatingValue = params.get('rating');
    const inputDateValue = params.get('installation-date');
    const inputCheckboxValue = params.get('feature') ? params.get('feature').split(',') : [];
    const inputSelectValue = params.get('product');

console.log(inputNameValue + inputReviewValue + inputRatingValue + inputDateValue + inputCheckboxValue + inputSelectValue)
console.log("hola")

mainTag = document.getElementsByTagName("main")[0]

pTagName = document.createElement("p");
pTagReview = document.createElement("p");
pTagDate = document.createElement("p");
pTagSelect = document.createElement("p");
pTagRating = document.createElement("p");
pTagCheckbox = document.createElement("p");
pTagContador = document.createElement("p")

pTagName.textContent =  " Nombre del usuario: " + inputNameValue
pTagReview.textContent = "Review del Usuario: " + inputReviewValue
pTagDate.textContent = "Date: " + inputDateValue
pTagSelect.textContent = "Product: " + inputSelectValue
pTagRating.textContent = "Rate: " + inputRatingValue 
pTagCheckbox.textContent = "Usefull list: " + inputCheckboxValue
pTagContador.textContent = " Number of views: " + getContador

mainTag.appendChild(pTagName);
mainTag.appendChild(pTagReview);
mainTag.appendChild(pTagDate);
mainTag.appendChild(pTagSelect);
mainTag.appendChild(pTagRating);
mainTag.appendChild(pTagCheckbox);
mainTag.appendChild(pTagContador)