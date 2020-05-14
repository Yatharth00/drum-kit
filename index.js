var i;
var no = document.querySelectorAll(".drum").length;
 for(i=0;i<no;i++)
{
document.querySelectorAll("button")[i].addEventListener("click",function ()
{
  var key = this.innerHTML;
  makeSoundKey(key);
  buttonAnimation(key);

});
}

document.addEventListener("keydown",function(event){
makeSoundKey(event.key);
buttonAnimation(event.key);
});


function makeSoundKey(key)
{
  switch (key) {
        case "w":
              var snd = new Audio("sounds/tom-1.mp3");
              snd.play();
          break;
        case "a":
              var snd = new Audio("sounds/tom-2.mp3");
              snd.play();
          break;
        case "s":
              var snd = new Audio("sounds/tom-3.mp3");
              snd.play();
          break;
        case "d":
              var snd = new Audio("sounds/tom-4.mp3");
              snd.play();
          break;
        case "j":
              var snd = new Audio("sounds/crash.mp3");
              snd.play();
          break;
        case "k":
              var snd = new Audio("sounds/kick-bass.mp3");
              snd.play();
          break;
        case "l":
              var snd = new Audio("sounds/snare.mp3");
              snd.play();
          break;
    default:alert("invalid input")
  }
}

function buttonAnimation(key)
{
  var activeButton = document.querySelector("."+ key);
  activeButton.classList.add("pressed");
    setTimeout(function() {
      activeButton.classList.remove("pressed");
  },100);
}
