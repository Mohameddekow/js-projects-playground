// grab all the dom elements
const input = document.querySelector("#input");
const div = document.querySelector(".card");
const radio = document.querySelectorAll("#answer");
const score = document.querySelector(".score-num");

// convert nodeList to an Array
const radios = Array.from(radio);

//loop through the empty buttons
radios.forEach((radio) => {
    //add a click event to the radio buttons
    radio.addEventListener("click", (e) => {
        //validate input field

        if (!input.value) {
            alert("Please enter a number ☹️☹️");
        } else {
            if (input.value === e.target.value) {
                alert("Numbers matched 😸😸");
                score.innerHTML = Number(score.innerHTML) + Number(input.value);

                // set input field to empty
                input.value = "";
            } else {
                alert("Numbers didn't matched ☹️☹️ try again!");
            }
        }
    });
});
