
var lyric = "maybe";
function callMe() {
  console.log("I just met you...");
  console.log("and this is crazy..");
  console.log("but here's my number..");
  console.log("so call me");
  return lyric (callMe("maybe"));
}
callMe();

var thisIsCrazy = "hey";
function crazy() {
  var thisIsCrazy = function (){
    console.log( thisIsCrazy("hey!!!"));
  }
}
thisIsCrazy();


var name = "Crickey";
function sayMyName() {
  function sayMy() {
    console.log(name);
  }
}
sayMyName()