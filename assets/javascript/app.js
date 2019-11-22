// Psudocode from MRusso

var questions = [
  {
    prompt:
      "Who is attributed as writing the first peice of fishing literature ever and at what date?",
    A: "A. Dame Juliana Berners, 'A Treatyse of Fysshynge wyth an Angle', 1486",
    B: "Brad Pitt, 'A River Runs Through It', 1992",
    C: "Ernest Hemingway, 'Old Man And The Sea', 1952",
    D: "Izaak Walton, 'Compleat Angler', 1653",
    answer: "a"
  },
  {
    prompt:
      "Who is wideley credited as being the first angler to us  artificial flies (ie, not worms live bait)?",
    A: "Jeremy Wade in 2011 on Discovery Channel's TV show 'River Monsters'",
    B:
      "Roman author Claudius Aelianus near the end of the 2nd century.C. Teddy Roosevelt, 1914 in the Amzon Rainforest.",
    C: "Teddy Roosevelt, 1914 in the Amzon Rainforest",
    D: "No one does this.",
    answer: "B"
  },
  {
    prompt: "Catch and release refers to?",
    A: "A mid-2000's CLASSIC film with Jennifer Garner.",
    B: "Dating in NYC.",
    C:
      "A fishing style where you land the fish and return it back to, the river or ocean to live another day.",
    D: "When an umpire ejects a catcher from a baseball game.",
    answer: "C"
  },
  {
    prompt: "Which of these is NOT a kind or type of fishing?",
    A: "Trolling",
    B: "Fly fishing",
    C: "Drone fishing",
    D: "Hydro-foiling",
    answer: "D"
  },
  {
    prompt: "Where is the home to the world most famous fish?",
    A: "P. Sherman 42 Wallaby Way, Sidney, Australia",
    B: "Loch Ness, Scotland",
    C: "Dr. Evil's pool for sharks with *lasers*",
    D: "Jiro's suhsi shop, Japan",
    answer: "A"
  }
];

var timeResest;
var wins = 0;
var losses = 0;
var correct = 0;
var incorrec = 0;

for (var i = 0; i < questions.length; i++) {
  var response = $("");
}

// write one parent element container in html, write a function to add innerhtm function to run through array when called 


// once page loads, start timer

// display only q1,



$("#start").on("reload", function() {
  //  Set timeout to run 10 seconds after page loads for q1

  if (correct) 
  
  $("#correct").on("click", function() {
    // Clear the button alert's timeout.
    clearTimeout(correct);
  });
  // if click button and guess correct answer, === display correct, 
  
  timeResest = setTimeout(function() {
    if ()  // click correctAnswer
  
}, 10 * 1000);
});
  // log questions  

  // display next question

  //reset the timer

  else () 
  
  // if click != answer display incorrect

  // log loss

  // display next question

  // run again
  



// set interval count down, var counter decriment
// if counter gtes to 0 move on to next question
// if user clicks, clear interval,
// if correct, display correct
// timeout show page
// if incorrec, display incorrect

// Psudocode I came up with

// store correct answers

// if you click q1 A, B, C, or D, log value
// if you click q2 A, B, C, or D, log value
// if you click q3 A, B, C, or D, log value
// if you click q4 A, B, C, or D, log value
// if you click q5 A, B, C, or D, log value
// if you click q6 A, B, C, or D, log value

// if you submit answers for all 6 questions grade the submission

// if the LETTER element you click on in q1 is correct, ++ score
// if the LETTER element you click on in q2 is correct, ++ score
// if the LETTER element you click on in q3 is correct, ++ score
// if the LETTER element you click on in q4 is correct, ++ score
// if the LETTER element you click on in q5 is correct, ++ score
// if the LETTER element you click on in q6 is correct, ++ score */
