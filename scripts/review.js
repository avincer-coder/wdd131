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


pTagName.textContent = inputNameValue + " Nombre del usuario 12"
pTagReview.textContent = inputReviewValue + " Review del Usuario"
pTagDate.textContent = inputDateValue + " Date"
pTagSelect.textContent = inputSelectValue + " Product"
pTagRating.textContent = inputRatingValue + " Rate"
pTagCheckbox.textContent = inputCheckboxValue + " Usefull list"


mainTag.appendChild(pTagName);
mainTag.appendChild(pTagReview);
mainTag.appendChild(pTagDate);
mainTag.appendChild(pTagSelect);
mainTag.appendChild(pTagRating);
mainTag.appendChild(pTagCheckbox);
