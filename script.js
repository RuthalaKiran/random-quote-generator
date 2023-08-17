const quotebody = document.querySelector(".quote-body");
const quoteauther = document.querySelector(".quote-author");

const api = "https://api.quotable.io/random";
async function  newquote(url){
  const response = await fetch(url);
  var data = await response.json();
  console.log(data);
  quotebody.innerHTML = data.content;
  quoteauther.innerHTML = ` 𑁋 ${data.author}`;
}
newquote(api);

function twiter(){
  window.open("https://twitter.com/intent/tweet?text=" +quotebody.innerHTML)
}
function copy(){
  navigator.clipboard.writeText(quotebody.innerHTML);
}
