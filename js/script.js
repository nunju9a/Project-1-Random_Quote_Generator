/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator - Star Wars Edition
******************************************/


// CREATES ARRAY OF OBJECTS TO HOLD ALL QUOTES

var quotes = [
  {
      quote: 'Do. Or do not. There is no try.',
      source: 'Yoda',
      citation: 'Star Wars Episode V',
      year: '1980, ',
      tag: 'My favorite quote.'
  },

  {
    quote: 'I find your lack of faith disturbing.',
    source: 'Darth Vader',
    citation: 'Star Wars Episode IV',
    year: 1977
  },

  {
    quote: 'Never tell me the odds!',
    source: 'Han Solo',
    citation: 'Star Wars Episode V',
    year: '1980, ',
    tag: 'My least favorite quote.'
  },

  {
    quote: 'Your focus determines your reality.',
    source: 'Qui-Gon Jinn',
    citation: 'Star Wars Episode I',
    year: 1999
  },

  {
    quote: 'Fear is the path to the dark side. Fear leads to anger; anger leads to hate; hate leads to suffering.',
    source: 'Yoda',
    citation: 'Star Wars Episode I',
    year: 1999
  },

  {
    quote: 'May the force be with you.',
    source: 'Obi Wan Kenobi',
    citation: 'Star Wars Episode IV',
    year: 1977
  }

];


// FUNCTION TO ACCESS RANDOM QUOTE

function getRandomQuote () {

  var num = Math.floor(Math.random () * quotes.length);
  return quotes[num];
}


//FUNCTION THAT RETURNS RANDOM INTEGER BETWEEN 0 AND 255

 function randomRGB () {
   
  return Math.floor(Math.random() *256);
 }


//CREATES FUNCTION TO AUTOMATICALLY REFRESH AFTER 10 SECONDS

 function autoRefresh() {
  
  var timer = setInterval (printQuote, 10000);
 }


// CREATES FUNCTION TO BUILD AND PRINT HTML STRING

function printQuote () {
  var ranQuote = getRandomQuote();
  var message = '';
  message+= "<p class = 'quote'>" + ranQuote.quote + "</p>";
  message+= "<p class = 'source'>" + ranQuote.source;

               // CONDITIONAL STATEMENT TO TEST IF THERE IS A CITATION TO PRINT
  if (ranQuote.citation) {
    message+= "<span class = 'citation'>" + ranQuote.citation + "</span>";
  }

              // CONDITIONAL STATEMENT TO TEST IF THERE IS A YEAR TO PRINT
  if (ranQuote.year){
    message+= "<span class = 'year'>" + ranQuote.year + "</span>";
  }

              // CONDITIONAL STATEMENT TO TEST IF THERE IS A TAG TO PRINT
  if (ranQuote.tag) {
    message+= "<span class = 'tag'>" + ranQuote.tag + "</span>";
  }

  message+= "</p>";

             // RANDOM COLOR VARIABLES WITHIN PRINTQUOTE FUNCTION 
  var red = randomRGB();
  var green = randomRGB();
  var blue = randomRGB();
  var rgbColor = 'rgb(' + red + ',' + green +',' + blue + ')';
  
             // SETS A RANDOM BACKGROUND COLOR
document.body.style.backgroundColor = rgbColor;

            // TAKES HTML STRING AND PASSES IT TO QUOTE-BOX IN HTML
  document.getElementById('quote-box').innerHTML = message;
}


// PRINTS THE RANDOM QUOTE WITH RANDOM BACKGROUND COLOR
printQuote ();


// WHEN BUTTON IS CLICKED IT WILL CALL TO THE PRINTQUOTE FUNCTION AND REFRESH NEW RANDOM QUOTE/COLOR
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// CALLS FUNCTION TO AUTOMATICALLY RELOAD PAGE EVERY 10 SECONDS
autoRefresh();
