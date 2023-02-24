const ratingEls = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");
const containerEl = document.getElementById("container");

let selectedRating = "";

ratingEls.forEach( (ratingEl) => {

    ratingEl.addEventListener( "click", (event) => {
        removeActive();

        selectedRating = event.target.parentNode.innerText || event.target.innerText;

        console.log(selectedRating);
        event.target.parentNode.classList.add("active");
        event.target.classList.add("active");
    } );

} );

function removeActive(){
    ratingEls.forEach( (ratingEl) => {
        ratingEl.classList.remove("active");
    })
}

btnEl.addEventListener("click", () => {
    if(selectedRating !== ""){
        containerEl.innerHTML = `
            <strong>Thanks you!</strong>
            <br>
            <br>
            <strong>Feedback: ${selectedRating}</strong>

            <p>We'll use yout feedback to improve our customer support.</p>
        `;
    }
});