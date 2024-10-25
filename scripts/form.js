form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", function(event){
    event.preventDefault();

    inputName = document.getElementById("name").value
    localStorage.setItem("name", inputName);

    inputReview = document.getElementById("review").value
    localStorage.setItem("review", inputReview)

    inputRating = document.querySelector("input[name='rating']:checked").value
    localStorage.setItem("rating", inputRating)

    inputDate = document.getElementById("installation-date").value
    localStorage.setItem("date", inputDate)


    inputCheckboxFeature = Array.from(document.querySelectorAll("input[name='feature']:checked")).map(checkbox=>checkbox.value)
    localStorage.setItem("checkbox", inputCheckboxFeature)
    console.log(inputCheckboxFeature)



    window.location.href = "review.html"
})