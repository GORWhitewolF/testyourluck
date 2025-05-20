
let scorevalue=10;
let attemptsleft=10;
function check(){
    attemptsleft--;
    if(attemptsleft==0){
        document.getElementById("Check").disabled = true;
        document.getElementById("Check").textContent = "GAME OVER";
alert("Game Over")
return;
}

      var input=document.getElementById("input")
var inputvalue=Number(input.value)
var score=document.getElementById("score")

var ourNumber=Math.floor(Math.random()*10)+1
var test=document.getElementById("test")
var dead=document.getElementById("lucky")



if(ourNumber==inputvalue){
test.textContent="RIGHT"
}
else{
   test.textContent="WRONG"
   test.style.color="red";
   scorevalue--;
   score.textContent=scorevalue
   
   if(scorevalue<3){dead.textContent="YOU ARE DEAD"
      dead.style.color="red"
      document.getElementById("Check").disabled = true;
        document.getElementById("Check").textContent = "GAME OVER";

   }
}




  


}