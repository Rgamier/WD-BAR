
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

function changeVideo(index) {
    currentVideoIndex = index;
    videoSource.src = videos[currentVideoIndex];
    videoElement.load();  
    videoElement.play();  

    updateIndicators();   
}

function updateIndicators() {
    indicators.forEach((indicator, index) => {
        if (index === currentVideoIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

changeVideo(currentVideoIndex);


setInterval(() => {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    changeVideo(currentVideoIndex); 
}, 4000); 


function toggleMenu() {
    var menu = document.getElementById('dropdownMenu');
    var button = document.querySelector('.dropdown-btn');
    menu.classList.toggle('open');
    button.classList.toggle('active');
}
