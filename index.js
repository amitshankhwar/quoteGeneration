let quotesArray = [
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    quote:
      "To live is the rarest thing in the world. Most people exist, that is all.",
    author: "Oscar Wilde",
  },
  {
    quote: "True friends stab you in the front.",
    author: "Oscar Wilde",
  },
  {
    quote: "Women are made to be Loved, not understood.",
    author: "Oscar Wilde",
  },
  {
    quote: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    quote:
      "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "No one can make you feel inferior without your consent.",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "Do what you feel in your heart to be right - for you'll be criticized anyway.",
    author: "Eleanor Roosevelt",
  },
  {
    quote: "Do one thing every day that scares you.",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate; only love can do that.",
    author: "Martin Luther King",
  },
  {
    quote:
      "Our lives begin to end the day we become silent about things that matter.",
    author: "Martin Luther King",
  },
  {
    quote:
      "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    author: "Martin Luther King",
  },
];

function generateQuotes(quotesData) {
  return Math.floor(Math.random() * quotesData);
}

let btn = document.getElementsByClassName("btn")[0];
// console.log(btn);
function getQuotes() {
  let bulb = document.getElementById("bulb");

  if (bulb.src.includes("bulb-off")) {
    bulb.src = "bulb-on.gif";
    let randomNumber = generateQuotes(quotesArray.length);
    document.getElementById("quote").innerHTML =
      quotesArray[randomNumber].quote;
    document.getElementById("author").innerHTML =
      "~" + quotesArray[randomNumber].author;
    btn.innerHTML = "Generate Quotes / Bulb ON";
  } else {
    bulb.src = "bulb-off.gif";
    btn.innerHTML = "Generate Quotes/ Bulb OFF";
  }
}
