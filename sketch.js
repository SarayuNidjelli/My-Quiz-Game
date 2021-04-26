var canvas;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var quiz, player, question;

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  Quiz = new Quiz();
  Quiz.getState();
}


function draw(){
  background("pink");
  

}
