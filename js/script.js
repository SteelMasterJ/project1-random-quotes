/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array Mitch Hedberg quotes, they all have citations and years, except for the final element in the quotes array
***/
const quotes = [
  { quote : "I bought a $7 pen because I always lose pens and I got sick of not caring.",
  source: "Mitch Hedberg",
  citation: `<a href="https://en.wikipedia.org/wiki/Strategic_Grill_Locations">Strategic Grill Locations</a>`,
  year: 1999
  },
  {
    quote: "\"My friend asked me if I wanted a frozen banana, I said \"No, but I want a regular banana later, so … yeah\".",
    source: "Mitch Hedberg",
    citation: `<a href="https://en.wikipedia.org/wiki/Strategic_Grill_Locations">Strategic Grill Locations</a>`,
    year: 1999
  },
  {
    quote : "On a traffic light green means 'go' and yellow means 'yield', but on a banana it's just the opposite. Green means 'hold on,' yellow means 'go ahead,' and red means, 'where did you get that banana at?'",
    source: "Mitch Hedberg",
    citation: `<a href="https://en.wikipedia.org/wiki/Strategic_Grill_Locations">Strategic Grill Locations</a>`,
    year: 1999
  },
  {
    quote: "My friend said to me \"I think the weather's trippy.\" I said \"No, man, it's not the weather that's trippy, perhaps it is the way that we perceive it that is indeed trippy.\" Then I thought \"Man, I should have just said \'Yeah.'\"",
    source: "Mitch Hedberg",
    citation: `<a href="https://en.wikipedia.org/wiki/Strategic_Grill_Locations">Strategic Grill Locations</a>`,
    year: 1999
  },
  {
    quote: "I'm against picketing, but I don't know how to show it.",
    source: "Mitch Hedberg",
    citation: `<a href="https://en.wikipedia.org/wiki/Strategic_Grill_Locations">Strategic Grill Locations</a>`,
    year: 1999
  },
  {
    quote: "My apartment is infested with koala bears. Its the cutest infestation ever. Much better than cockroaches. I turn the lights on and a bunch of koala bears scatter. I'm like \"hey, hold on fellas! Lemme hold one of you, and feed you a leaf\".",
    source: "Mitch Hedberg",
    citation: `<a href="https://en.wikipedia.org/wiki/Strategic_Grill_Locations">Strategic Grill Locations</a>`,
    year: 1999
  },
  {
    quote: "My fake plants died because I did not pretend to water them.",
    source: "Mitch Hedberg",
    citation: `<a href="https://en.wikipedia.org/wiki/Mitch_All_Together">Mitch All Together</a>`,
    year: 2003
  },
  {
    quote: "My hotel doesn't have a 13th Floor because of superstition, but c'mon man... People on the 14th Floor, you know what floor you're really on. ",
    source: "Mitch Hedberg",
    citation: `<a href="https://en.wikipedia.org/wiki/Mitch_All_Together">Mitch All Together</a>`,
    year: 2003
  },
  {
    quote: "I saw this wino, he was eating grapes. I was like \"Dude, you have to wait.\"",
    source: "Mitch Hedberg",
    citation: `<a href="https://en.wikipedia.org/wiki/Mitch_All_Together">Mitch All Together</a>`,
    year: 2003
  },
  {
    quote: "You know, I'm sick of following my dreams, man. I'm just going to ask where they're going and hook up with 'em later.",
    source: "Mitch Hedberg",
    citation: `<a href="https://en.wikipedia.org/wiki/Mitch_All_Together">Mitch All Together</a>`,
    year: 2003
  },
  {
    quote: "I like an escalator, because an escalator can never break, it can only become stairs. You would never see an \"Escalator Temporarily Out Of Order\" sign, just an, \"Escalator Temporarily Stairs. Sorry for the convenience. We apologize for the fact that you can still get up there.\"",
    source: "Mitch Hedberg",
    citation: `<a href="https://en.wikipedia.org/wiki/Mitch_All_Together">Mitch All Together</a>`,
    year: 2003
  },
  {
    quote: "Is a hippopotamus a hippopotamus or just a really cool opotamus?",
    source: "Mitch Hedberg",
    citation: `<a href="https://en.wikipedia.org/wiki/Do_You_Believe_in_Gosh%3F">Do You Believe in Gosh?</a>`,
    year: 2005
  },
  {
    quote: "Steam rollers run stuff over to make sure it's good. Like if they want to test a product, they'll run over it with a steam roller. How do you know the steam roller's good? Who ran over the steam roller?",
    source: "Mitch Hedberg",
    citation: `<a href="https://en.wikipedia.org/wiki/Do_You_Believe_in_Gosh%3F">Do You Believe in Gosh?</a>`,
    year: 2005
  },
  {
    quote: "My belt holds up my pants and my pants have belt loops that hold up the belt. What’s really going on down there? Who is the real hero?",
    source: "Mitch Hedberg",
    citation: `<a href="https://en.wikipedia.org/wiki/Do_You_Believe_in_Gosh%3F">Do You Believe in Gosh?</a>`,
    year: 2005
  },
  {
    quote: "A fly was very close to being called a \"land,\" cause that's what they do half the time.",
    source: "Mitch Hedberg",
    citation: `<a href="https://en.wikipedia.org/wiki/Do_You_Believe_in_Gosh%3F">Do You Believe in Gosh?</a>`,
    year: 2005
  },
  {
    quote: "A burrito is a sleeping bag for ground beef.",
    source: "Mitch Hedberg",
    citation: `<a href="https://en.wikipedia.org/wiki/Do_You_Believe_in_Gosh%3F">Do You Believe in Gosh?</a>`,
    year: 2005
  },
  {
    quote: "I find a duck's opinion of me is very much influenced by whether or not I have bread.",
    source: "Mitch Hedberg",
    citation: `<a href="https://www.youtube.com/watch?v=NZJ4nyFWNTE">Just For Laughs: On The Edge</a>`,
    year: 2002
  },
  {
    quote: "I would imagine if you could understand Morse Code, a tap dancer would drive you crazy.",
    source: "Mitch Hedberg"
  }
];

/***
 * `getRandomQuote` function - This gets a random object from the quotes array and returns it.
***/
function getRandomQuote(quotes){
  let randomNumber = Math.floor(Math.random() * quotes.length)
  return quotes[randomNumber];
}

//console.log(getRandomQuote());
/***
 * `printQuote` function - This calls teh getRandomQuote function and adds in the HTML script so it prints to the page when the page is loaded and whenever the get quote button is pushed
***/
function printQuote() {
  randomObject = getRandomQuote(quotes);
  htmlString = `<p class="quote"> ${randomObject.quote} </p>` + `<p class="source"> ${randomObject.source}`;
  if (randomObject.citation) {
    htmlString += `<span class="citation"> ${randomObject.citation} </span>`;
  }
  if (randomObject.year) {
    htmlString += `<span class="year"> ${randomObject.year} </span></p>`;
  } else {
    htmlString += '</p>';
  }
  document.getElementById('quote-box').innerHTML = htmlString;
  return htmlString;
}
//console.log(printQuote());  these lines were just for testing

//console.log(htmlString);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);