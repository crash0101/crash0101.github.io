// GLOBAL VARIABLES
const audioFilePath = "assets/white_noise_looped.mp3";
let playing = false;
let oceanAudio = new Audio(audioFilePath);
const oceanTile = document.getElementsByClassName("ocean-tile")[0];
const playIcon = document.getElementsByClassName("play-icon")[0];
const pauseIcon = document.getElementsByClassName("pause-icon")[0];

// check if the HTML has finished loading before continuing
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  // Add event listeners to elements
  document
    .getElementsByClassName("ocean-tile")[0]
    .addEventListener("click", toggleAudio);

  document
    .getElementsByClassName("volume-slider")[0]
    .addEventListener("click", setVolume);
}

// MAIN FUNCTIONS

function setVolume() {
  let sliderValue = document.getElementsByClassName("volume-slider")[0].value;
  oceanAudio.volume = Math.floor(sliderValue) / 100;
}

function toggleAudio() {
  if (!playing) {
    playing = true;
    oceanAudio.loop = true;
    hidePlayIcon();
    showPauseIcon();
    oceanAudio.play();
  } else {
    playing = false;
    hidePauseIcon();
    showPlayIcon();
    oceanAudio.pause();
  }
}

// FUNCTION HELPERS

function hidePlayIcon() {
  document.getElementsByClassName("play-icon")[0].style.display = "none";
}

function showPlayIcon() {
  document.getElementsByClassName("play-icon")[0].style.display = "inline";
}

function hidePauseIcon() {
  document.getElementsByClassName("pause-icon")[0].style.display = "none";
}

function showPauseIcon() {
  document.getElementsByClassName("pause-icon")[0].style.display = "inline";
}
