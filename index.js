var numberDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberDrums; i++) {

  var drum = document.querySelectorAll(".drum")[i];

  drum.addEventListener("click", function() {

    makeSound(this.innerHTML);
    buttonAnimator(this.innerHTML);
  });
}

document.addEventListener("keydown", function(event) {
  if (event.isComposing || event.keyCode === 229) {
    return;
  }
  // do something
  makeSound(event.key);
  buttonAnimator(event.key);
});

function makeSound(letter) {
  switch (letter) {

    case 'w':
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    case 'a':
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

    case 's':
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

    case 'd':
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

    case 'j':
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;

    case 'k':
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;

    case 'l':
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    default:
  }
}

function buttonAnimator(button){
  var activeButton = document.querySelector("." + button);

  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}
