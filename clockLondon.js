// Function to update the rotation of clock hands
function updateClockHand(selector, rotation) {
  const hand = document.querySelector(selector);
  hand.style.transform = `rotate(${rotation}deg)`;
}

// Function to update the clock hands based on the current time
function updateClock() {
  const now = new Date();
  let hours = now.getHours() - 1; // Minus 1 hour

  // If the hours become negative, set them to 11 (for 12-hour format)
  if (hours < 0) {
      hours = 11;
  }
  
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Update rotation angles for each clock hand
  updateClockHand('.hour-hand', (360 / 12) * hours + (360 / 12) * (minutes / 60));
  updateClockHand('.min-hand', (360 / 60) * minutes);
  updateClockHand('.second-hand', (360 / 60) * seconds);
}

// Function to set a random background image based on the time of day
window.onload = function() {
  const now = new Date();
  const hours = now.getHours() % 24 || 24; // Convert to 24-hour format
  
  // Initial call to update the clock
  updateClock();

  // Update the clock every second
  setInterval(updateClock, 1000);
};

  
    