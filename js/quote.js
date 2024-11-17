const quotes = 
[
    {text: '“ Be yourself; everyone else is already taken. ”',author: ' ― Oscar Wilde '},
    {text: '“So many books, so little time.”',author: '― Frank Zappa'},
    {text: '“A room without books is like a body without a soul.”',author: '― Marcus Tullius Cicero'},
    {text: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",author: '― Bernard M. Baruch'},
    {text: '“You only live once, but if you do it right, once is enough.”',author: "― Mae West"},
];
 let lastIndex = -1;

function displayNewQuote() {
    let randomIndex;
    do{
         randomIndex = Math.floor(Math.random() * quotes.length);

    }
    while(randomIndex === lastIndex)
    {
        lastIndex=randomIndex;
    }
    const newQuote = quotes[randomIndex];
    const quoteText = newQuote.text;
    const quoteAuthor = newQuote.author;

    document.getElementById("quote").innerHTML = `<p class="quoteText">${quoteText}</p>`+`<p class="author">${quoteAuthor}</p>`;
}

   document.getElementById("quoteButton").addEventListener("click", displayNewQuote); 