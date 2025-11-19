let btn = document.querySelector(".btn");
let author_txt = document.querySelector(".author")
let quote_txt = document.getElementById("quote-txt");
let speech = document.getElementById("speech");
let copy = document.getElementById("copy");
let share = document.getElementById("share");

btn.addEventListener("click", ()=>{
    btn.innerText = "Loading Quotes";
    btn.classList.add("load");
    fetch("https://dummyjson.com/quotes/random")
    .then(res =>{
        return res.json();
    }).then(data =>{
        btn.classList.remove("load");
        btn.innerText = "New Quotes"
        quote_txt.innerText = `${data.quote}`
        author_txt.innerText = `By ${data.author}`
    })
    .catch(err =>{
        console.log(err)
    })
})

speech.addEventListener("click",() =>{
    let txtToSpeech = new SpeechSynthesisUtterance(`${quote_txt.innerText} by ${author_txt.innerText}`);
    speechSynthesis.speak(txtToSpeech)
})


copy.addEventListener("click",()=>{
    navigator.clipboard.writeText(quote_txt.innerText)
})

share.addEventListener("click",()=>{
    let url = `https://twitter.com/intent/tweet?url=${quote_txt.innerText}`;
    window.open(url,"_blank")
})