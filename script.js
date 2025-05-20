
let scorevalue=10;
let attemptsleft=10;
function check(){
    attemptsleft--;
    if(attemptsleft==0){
        document.getElementById("Check").disabled = true;
        document.getElementById("Check").textContent = "GAME OVER";
alert("Game Over!You Lost.")
return;
}

      var input=document.getElementById("input")
var inputvalue=Number(input.value)
var score=document.getElementById("score")

var ourNumber=Math.floor(Math.random()*10)+1
var test=document.getElementById("test")
var dead=document.getElementById("lucky")



if(ourNumber==inputvalue){
    alert("Your score is "+scorevalue)
document.getElementById("Check").disabled = true;
test.textContent="RIGHT"
if(scorevalue>3 ){
    dead.textContent="YOU ARE LUCKY"
      dead.style.color="Yellow"
   }
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