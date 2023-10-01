var timer = 60;
var score = 0;
function increaseScore(){
  score +=10;
  document.querySelector("#scoreValue").textContent = score;
}

function getNewHit(){
  var hit = Math.floor(Math.random()*10)
  console.log(hit);
  document.querySelector("#hitValue").textContent = hit;
}

function makeBubbles() {
  var gameBubbles = "";

  for (let i = 1; i <= 75; i++) {
    gameBubbles += `<div class="bubble">${Math.floor(
      Math.random() * 10
    )}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = gameBubbles;
}

function runTimer(){
  var timeInterval = setInterval(() => {
    if(timer>0){
      timer --;
      document.querySelector("#timerValue").textContent = timer;
    }
    else{
      clearInterval(timeInterval);
    }
  }, 1000);
}





runTimer();
makeBubbles();
getNewHit();
increaseScore();
