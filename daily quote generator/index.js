const quoteText = document.querySelector("#quote-text");
const quoteAuthor = document.querySelector("#quote-author");
const qouteContent = document.querySelector("#quote-content");
const generateButton = document.querySelector("#generate-btn");

const url = "https://api.quotable.io/quotes/random";

const getDailyQuote = async () => {
  try {
    quoteText.innerHTML = "<p>Getting quote...</p>";
    quoteAuthor.innerHTML = "<p>Getting author...</p>";
    generateButton.innerHTML = "Generating...";

    const res = await fetch(url);
    const data = await res.json();

    quoteText.innerHTML = data[0].content;
    quoteAuthor.innerHTML = "~" + data[0].author;
    generateButton.innerHTML = "Generate Joke";
  } catch (error) {
    console.error(error);
  }
};

generateButton.addEventListener("click", getDailyQuote);
