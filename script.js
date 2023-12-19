/*Add your JavaScript here*/

// initial scoring 
var minecraftScore = 0;
var valorantScore = 0;
var questionPosition = 0;
// we want the user to make 2 choices that will add up over time
var majority = 2;

// questions that will be asked
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

// on-click 
q1a1.addEventListener("click", valorant);
q1a2.addEventListener("click", minecraft);

q2a1.addEventListener("click", minecraft);
q2a2.addEventListener("click", valorant);

q3a1.addEventListener("click", valorant);
q3a2.addEventListener("click", minecraft);


// function objects: if they press minecraft, we up the mc
// and the question scores up by one 
// results are only available if there are more than three answers 

function minecraft() {
    minecraftScore += 1;
    questionPosition += 1;
    if (questionPosition >=3) {
      updateResult();
    }
}


// function objects: if they press valorant, we up the mc
// and the question scores up by one 
// results are only available if there are more than three answers 
// maybe we can abstract this later

function valorant() {
    valorantScore += 1;
    questionPosition += 1;
    if (questionPosition >= 3) {
      updateResult();
    }
}


var result = document.getElementById("result");


function updateResult() {
  if (valorantScore >= majority) {
    result.innerHTML = "You are a valorant player!!!!!!!";
  } 
   else if (minecraftScore >= majority) 
     result.innerHTML = "You are a minecrafter steve!!!";
  else { 
    result.innerHTML = "you like both games, don't you?"
  }

}


// restarting the quiz 
var restart = document.getElementById("restart");
restart.addEventListener("click", restartQuiz);

// reset all the numbers all to 0
function restartQuiz() {
  result.innerHTML = "Your result is..."; 
  questionPosition = 0; 
  valorantScore = 0;
  minecraftScore = 0;
  enableQuestions(); 
}

function disableQ1() {
  q1a1.disabled = true;
  q1a2.disabled = true;
}

q1a1.addEventListener("click", disableQ1);
q1a2.addEventListener("click", disableQ1);


function disableQ2() {
  q2a1.disabled = true;
  q2a2.disabled = true;
}

q2a1.addEventListener("click", disableQ2);
q2a2.addEventListener("click", disableQ2);

function disableQ3() {
  q3a1.disabled = true;
  q3a2.disabled = true;
}

q3a1.addEventListener("click", disableQ3);
q3a2.addEventListener("click", disableQ3);


function enableQuestions() {
  q1a1.disabled = false;
  q1a2.disabled = false;
  q2a1.disabled = false;
  q2a2.disabled = false;
  q3a1.disabled = false;
  q3a2.disabled = false;

}