var number = 20;
var intervalId;

function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}

function decrement() {
  //  Decrease number by one.
  number--;
  $("#timer").html("<h2>" + number + "</h2>");
  if (number === 0) {
    stop();
    alert("Time Up");
  }
}

function stop() {
  //  Clears our intervalId
  //  We just pass the name of the interval
  //  to the clearInterval function.
  clearInterval(intervalId);
}

$("#start").on("click", run);

if (number < 10) {
  number = "0" + number;
}

var i;
var questions = [
  {
    questionText:
      "Who is attributed as writing the first peice of fishing literature ever and at what date?",
    choices: [
      "Dame Juliana Berners, 'A Treatyse of Fysshynge wyth an Angle', 1486",
      "Brad Pitt, 'A River Runs Through It', 1992",
      "Ernest Hemingway, 'Old Man And The Sea', 1952",
      "Izaak Walton, 'Compleat Angler', 1653"
    ],
    answer:
      "Dame Juliana Berners, 'A Treatyse of Fysshynge wyth an Angle', 1486"
  },

  {
    questionText:
      "Who is wideley credited as being the first angler to us  artificial flies (ie, not worms live bait)?",
    choices: [
      "Jeremy Wade in 2011 on Discovery Channel's TV show 'River Monsters'",
      "Roman author Claudius Aelianus near the end of the 2nd century",
      "Teddy Roosevelt, 1914 in the Amzon Rainforest",
      "No one does this."
    ],
    answer: "Roman author Claudius Aelianus near the end of the 2nd century"
  },
  {
    questionText: "Catch and release refers to?",
    choices: [
      "A mid-2000's CLASSIC film with Jennifer Garner.",
      "Dating in NYC.",
      "A fishing style where you land the fish and return it back to, the river or ocean to live another day.",
      "When an umpire ejects a catcher from a baseball game."
    ],
    answer:
      "A fishing style where you land the fish and return it back to, the river or ocean to live another day."
  },
  {
    questionText: "Which of these is NOT a kind or type of fishing?",
    choices: ["Trolling", "Fly fishing", "Drone fishing", "Hydro-foiling"],
    answer: "Hydro-foiling"
  },
  {
    questionText:
      "What address is home to one of the world's most famous fish, who also happens to share the name with the Captain of the submarine 'Nautilus' in the novel '20,000 Leagues Under The Sea?'",
    choices: [
      "P. Sherman 42 Wallaby Way, Sidney, Australia",
      "Loch Ness, Scotland",
      "Dr. Evil's pool for sharks with *lasers*",
      "Jiro's suhsi shop, Japan"
    ],
    answer: "P. Sherman 42 Wallaby Way, Sidney, Australia"
  }
];

//  Start on click.

//  Set the button alert's timeout to run three seconds after the function's called.

var math = Math.floor(Math.random() * questions.length);
console.log(math);

//for (i = 0; i < questions.length; i++) {
$("#question").html(questions[math].questionText);
$("#choice-A").html(questions[math].choices[0]);
$("#choice-B").html(questions[math].choices[1]);
$("#choice-C").html(questions[math].choices[2]);
$("#choice-D").html(questions[math].choices[3]);
//

// if ((questions[1].answer = questions[1].choices[1])) {
//add to total score, stop timeout

// display only q1,
// index or answer
// grab question from question array, grab index of quetions array,
// render quetion 0, pass it some quesiton objuect to pass it onto the screen, take object buld emelemt for quesitons,
// buid element for choice, add click listener for all chocies, as soon as click choice, cancel timer,
// firs check to see if = to answer, then empty container, the render results, "you got the anser correct" set timeout for 3 second, empy success
// current quesiton 1, render
// var timeResest;
// var wins = 0;
// var losses = 0;
// var correct = 0;
// var incorrec = 0;
// for (var i = 0; i < questions.length; i++)   var response = $("");}
// write one parent element container in html, write a function to add innerhtm function to run through array when called
// once page loads, start timer
//  Set timeout to run 10 seconds after page loads for q1
// Clear the button alert's timeout.
// if click button and guess correct answer, === display correct,
// click correctAnswer
// log questions

// display next question

//reset the timer

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
// if the LETTER element you click on in q6 is correct, ++ score

// Psudocode from MRusso

/* if (timer === 0) {
  currentQuestion++;
  renderTimesUpMessage();
  setTimeout(() => {
    renderQuestion;
  }, timeout);
}
1000; */
