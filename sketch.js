var canvas;
var database; 
var gameState = 0;
var contestantCount, quiz, question, contestant,options;




function setup(){
  canvas = createCanvas(800,400);
  database = firebase.database()

  question = new Question()

  quiz = new Quiz()
  quiz.start()
  quiz.getState()
}


function draw(){
    if(playerCount===4){
      quiz.update(1)
    }
   if(gameState===1){
    quiz.play()
   }


  background("purple");

  question.display()
}
