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
