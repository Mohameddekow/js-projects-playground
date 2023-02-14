const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "5dfaqMcEAtokFF8eW24yQQ==in723ZLu7WjGCPUM";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke(){
    try {
        jokeEl.innerText = "Updating..."

        btnEl.disabled = true
        btnEl.innerText = "Loading..."

        const response = await fetch(apiURL, options);
        const data = await response.json()

        jokeEl.innerText = data[0].joke;


        btnEl.disabled = false
        btnEl.innerText = "Tell me a joke"
    } catch (error) {
        jokeEl.innerText = "an error occured, please try again laiter";
        
        btnEl.disabled = false
        btnEl.innerText = "Tell me a joke"

        console.log(error);
    }
    

    
};

btnEl.addEventListener("click", getJoke);