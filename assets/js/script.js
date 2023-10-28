// Get the section elements by their ids
var aboutSection = document.getElementById("about");
var portfolioSection = document.getElementById("portfolio");
var contactSection = document.getElementById("contact");

// Function to show the Portfolio section and hide other sections
function showPortfolio() {
    // Hide other sections
    aboutSection.style.display = "none";
    contactSection.style.display = "none";
    // Show the Portfolio section
    portfolioSection.style.display = "block";
}

// Function to show the About Me section and hide other sections
function showAbout() {
    // Hide other sections
    portfolioSection.style.display = "none";
    contactSection.style.display = "none";
    // Show the About Me section
    aboutSection.style.display = "block";
}

// Function to show the Contact section and hide other sections
function showContact() {
    // Hide other sections
    aboutSection.style.display = "none";
    portfolioSection.style.display = "none";
    // Show the Contact section
    contactSection.style.display = "block";
}

// Add event listeners to the navigation links to show respective sections
document.querySelector('nav ul li:nth-child(1) a').addEventListener('click', showAbout); // About Me link
document.querySelector('nav ul li:nth-child(2) a').addEventListener('click', showPortfolio); // Portfolio link
document.querySelector('nav ul li:nth-child(3) a').addEventListener('click', showContact); // Contact link

// Toggle functionality for the dropdown menu on smaller screens
var dropdownButton = document.querySelector('.dropdown-button');
var navContainer = document.querySelector('.nav-container');

dropdownButton.addEventListener('click', function() {
    navContainer.classList.toggle('show');
});

// JavaScript code to toggle night mode and change button icon
const nightModeToggleBtn = document.getElementById('nightModeToggleBtn');
const body = document.body;

// Check user preference from localStorage or system settings
const isNightMode = localStorage.getItem('nightMode') === 'enabled';

// Apply night mode styles and set button icon based on user preference
if (isNightMode) {
    body.classList.add('night-mode');
    nightModeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>'; // Moon icon for night mode
} else {
    body.classList.remove('night-mode');
    nightModeToggleBtn.innerHTML = '<i class="far fa-moon"></i>'; // Moon icon for day mode
}

// Toggle night mode and change button icon on button click
nightModeToggleBtn.addEventListener('click', function() {
    if (body.classList.contains('night-mode')) {
        // If night mode is currently active, switch to day mode
        body.classList.remove('night-mode');
        localStorage.setItem('nightMode', 'disabled');
        nightModeToggleBtn.innerHTML = '<i class="far fa-moon"></i>'; // Moon icon for night mode
    } else {
        // If day mode is currently active, switch to night mode
        body.classList.add('night-mode');
        localStorage.setItem('nightMode', 'enabled');
        nightModeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>'; // Moon icon for day mode
    }
});
