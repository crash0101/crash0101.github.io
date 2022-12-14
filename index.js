// GLOBAL VARIABLES
const audioFilePath = "assets/white_noise_looped.mp3";
let playing = false;
const oceanAudio = new Audio(audioFilePath);

// check if the HTML has finished loading before continuing
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  const playIconsArray = document.getElementsByClassName("play-icon"); // returns an array of matching classes
  const pauseIconsArray = document.getElementsByClassName("pause-icon"); // returns an array of matching classes
  const volumeSlidersArray = document.getElementsByClassName("volume-slider"); // returns an array of matching classes

  // add event listeners to interactive elements
  for (let i = 0; i < playIconsArray.length; i++) {
    playIconsArray[i].addEventListener("click", toggleAudio);
  }

  for (let i = 0; i < pauseIconsArray.length; i++) {
    pauseIconsArray[i].addEventListener("click", toggleAudio);
  }

  for (let i = 0; i < volumeSlidersArray.length; i++) {
    volumeSlidersArray[i].addEventListener("change", setVolume);
  }
}

function setVolume() {
  // find the tile name of the slider which was clicked
  const tileName = event.target.parentNode.parentNode.innerText;

  if (tileName.includes("Ocean sounds")) {
    let sliderValue = event.target.value; // get the integer input value of the slider
    oceanAudio.volume = Math.floor(sliderValue) / 100; // set the volume as a float
  } else {
    console.log("slider belongs to another Audio object");
  }
}

function toggleAudio() {
  let tileClicked = event?.target.parentNode.firstElementChild.innerText;

  switch (tileClicked) {
    case "Ocean sounds":
      if (!playing) {
        playing = true;
        oceanAudio.loop = true;
        toggleAudioIcons();
        oceanAudio.play();
      } else {
        playing = false;
        toggleAudioIcons();
        oceanAudio.pause();
      }
      break;
    case "Happy baby":
      console.log("Event came from the Happy baby title");
    default:
      console.log("Unknown event location");
  }
}

function toggleAudioIcons() {
  const classArray = event.target.classList; //returns a DOM Object.

  if (classArray.contains("play-icon")) {
    event.target.style.display = "none"; // hide the play icon
    event.target.nextElementSibling.style.display = "inline"; //show the pause icon
  } else {
    event.target.style.display = "none"; // hide the pause icon
    event.target.previousElementSibling.style.display = "inline"; // show the play icon
  }
}
