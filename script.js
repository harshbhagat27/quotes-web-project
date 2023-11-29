const quotes = document.getElementById("quotes")
const author = document.getElementById("author")
const next = document.getElementById("next")
const tweet = document.getElementById("tweet")




let realData = ""
let quotesData =""

const tweetNow = () => {
    let tweetPost = `https://twitter.com/intent/tweet?text=${quotesData.text}`;
    window.open(tweetPost);
}
const getNewQuotes = () => {
    let rnum = Math.floor(Math.random() * 17);
    quotesData =realData[rnum]

  
    quotes.innerText = `${quotesData.text}`;
    author.innerText = `${quotesData.author}`;

}
const getQuotes = async () => {
    const api = "https://type.fit/api/quotes"
try {
    let data = await fetch(api);
    realData = await data.json();
//   console.log(realData.length) 
getNewQuotes();
} catch (error) {}
};
tweet.addEventListener("click", tweetNow);
next.addEventListener("click", getNewQuotes);
getQuotes();