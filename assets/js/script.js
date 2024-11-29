// List of video sources
const videos = [
    "assets/vid/Home.mov",
    "assets/vid/about us.mov",
    "assets/vid/contact us.mov",
    "assets/vid/book now.mov"
];

let currentVideoIndex = 0;

const videoElement = document.getElementById('backgroundVideo');
const videoSource = videoElement.querySelector('source'); // Use querySelector to grab the source element
const indicators = document.querySelectorAll('.indicator');

// Function to change video
function changeVideo(index) {
    currentVideoIndex = index;
    videoSource.src = videos[currentVideoIndex];  // Change the video source
    videoElement.load();  // Reload the video source
    videoElement.play();  // Start playing the new video

    updateIndicators();   // Update indicators
}

// Function to update indicators
function updateIndicators() {
    indicators.forEach((indicator, index) => {
        if (index === currentVideoIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// Set the initial video when the page loads
changeVideo(currentVideoIndex);

// Use setInterval to change the video every 4 seconds
setInterval(() => {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;  // Loop to the first video after the last one
    changeVideo(currentVideoIndex);  // Change to the next video
}, 4000);  // Change every 4 seconds

// Dropdown menu toggle function
function toggleMenu() {
    var menu = document.getElementById('dropdownMenu');
    var button = document.querySelector('.dropdown-btn');
    menu.classList.toggle('open');
    button.classList.toggle('active');
}
