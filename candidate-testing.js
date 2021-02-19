const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = ""

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? "
let correctAnswer = "Sally Ride"
let candidateAnswer = ""
let questions = [ 'Who was the first American woman in space? ', 'True or false: 5 kilometer == 5000 meters? ', '(5 + 3)/2 * 10 = ? ', 'Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ', 'What is the minimum crew size for the ISS? ' ];
let correctAnswers = [ 'Sally Ride', 'true', '40', 'Trajectory', '3' ];
let candidateAnswers = [];
let numberOfCorrect = [];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question(`What is your name? `);  
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
for (let i = 0; i < questions.length; i++){
candidateAnswers.push(input.question(`${[1+i]}) ${questions[i]}\n`));
}
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
for (i = 0; i < correctAnswers.length; i++){
  console.log(`${[1+i]}) Your answer: ${candidateAnswers[i]}. Correct answer: ${correctAnswers[i]}.`)
}
for (i = 0; i < correctAnswers.length; i++){
  if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()){
numberOfCorrect.push(1)
  }
}
  let grade = (numberOfCorrect.length/questions.length*100)
console.log(`\n>>> Overall Grade: ${grade}% (${numberOfCorrect.length} of 5 responses correct) <<<`)  

if (grade < 79){
  console.log(`>>> Status: FAILED <<<`)
} else {
  console.log(`>>> Status: SUCCESS <<<`)
}
  return grade;
}

function runProgram() {
  
  // TODO 1.1c: Ask for candidate's name //
   askForName(); 
  console.log(`\nWelcome, ${candidateName}. The astronaut training program application will now begin.\n`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};