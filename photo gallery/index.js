const btnEl = document.getElementById("btn");
const errorMessageEl = document.getElementById("errorMessage");

async function fetchImages(){
    const inputValue = document.getElementById("input").value;

    const galleryEl = document.getElementById("gallery");

    imgs = ""

    if(inputValue > 10 || inputValue < 1){
        errorMessageEl.style.display = "block";
        return
    }

    try {
        btnEl.style.display = "none"
        const loading = `<img src="spinner.svg" alt="spinner"/>`;

        galleryEl.innerHTML = loading

        await fetch(`https://api.unsplash.com/photos?
        per_page=${4}&page=${Math.round(
            Math.random() * 1000
        )}&client_id=08PNzfnUJ6786nahwtwV6kCikSq2pv82lIeFdEZTxi8`)
        .then((res) => 
            
            res.json().then((data) => {

                if (data) {
                    data.forEach( (pic) => {
                        imgs += `
                        <img src= ${pic.urls.small} alt= "imges"/>
                        `;

                        galleryEl.style.display = "block"
                        galleryEl.innerHTML = imgs
                        btnEl.style.display = "block"
                        errorMessageEl.style.display = "none";
                    });
                }
                console.log(data)
            })
        );


    } catch (error) {
        btnEl.style.display = "block"
        errorMessageEl.style.display = "block"
        errorMessageEl.innerText = "An error  occured, please try again later"
    }

    

}

btnEl.addEventListener("click", fetchImages);