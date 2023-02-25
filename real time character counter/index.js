const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remaingCounterEl = document.getElementById("remaining-counter");

textareaEl.addEventListener("keyup", () => {

    updateCounter()

});

updateCounter()

function updateCounter(){
    totalCounterEl.innerText = textareaEl.value.length

    remaingCounterEl.innerText = textareaEl.getAttribute("maxlength") - textareaEl.value.length;
}