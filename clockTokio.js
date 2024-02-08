// Function to update the rotation of clock hands
function updateClockHand(selector, rotation) {
    const hand = document.querySelector(selector);
    hand.style.transform = `rotate(${rotation}deg)`;
  }
  
  // Function to update the clock hands based on the current time
  function updateClock() {
    const now = new Date();
    let hours = now.getHours() + 8; // Plus 8 hours
  
// If the hours exceed 12, adjust them to correspond to the 12-hour format by subtracting 12.
    if (hours >= 12) {
        hours -= 12;
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