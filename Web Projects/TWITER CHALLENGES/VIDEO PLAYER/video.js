const playButton = document.getElementById('play');
const video = document.getElementById('video');
const videoControls = document.getElementById('video-controls');

// Hide the native controls of the video player
const videoWorks = !!document.createElement('video').canPlayType;
if (videoWorks) {
  video.controls = false;
  videoControls.classList.remove('hidden');
}

// Apply the play and pause controls to the player
function togglePlay() {
    if (video.paused || video.ended) {
      video.play();
    } else {
      video.pause();
    }
  }
  playButton.addEventListener('click', togglePlay);
  