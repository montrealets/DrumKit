/// long wey to select buttons
/*document.querySelector(".w.drum").addEventListener("click",handleClick);
document.querySelector(".a.drum").addEventListener("click",handleClick);
document.querySelector(".s.drum").addEventListener("click",handleClick);
document.querySelector(".d.drum").addEventListener("click",handleClick);
document.querySelector(".j.drum").addEventListener("click",handleClick);
document.querySelector(".k.drum").addEventListener("click",handleClick);
document.querySelector(".l.drum").addEventListener("click",handleClick);*/

function makeMusic(button){

      switch (button) {
        case "w":
          var tom1 = new Audio('sounds/tom-1.mp3');
          tom1.play();
          break;

        case "a":
          var tom2 = new Audio('sounds/tom-2.mp3');
          tom2.play();
          break;

        case "s":
          var tom3 = new Audio('sounds/tom-3.mp3');
          tom3.play();
          break;

        case "d":
          var tom4 = new Audio('sounds/tom-4.mp3');
          tom4.play();
          break;

        case "j":
          var tom4 = new Audio('sounds/snare.mp3');
          tom4.play();
          break;

        case "k":
          var crash = new Audio('sounds/crash.mp3');
          crash.play();
          break;

        case "l":
          var kick = new Audio('sounds/kick-bass.mp3');
          kick.play();
          break;
                  
        case "lol":
          var lol = new Audio('sounds/Lol.mp3');
          lol.play();
          break;
      }
}
function buttonAnimation(currentKey){
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
      activeButton.classList.remove("pressed");
    },100)

}
document.addEventListener("keydown",function(event){
  var key= event.key;
  makeMusic(event.key);
  buttonAnimation(event.key);
})
document.addEventListener("click",function(event){
  var click=event.path[0].innerHTML;
  makeMusic(click);
  buttonAnimation(click);
})
