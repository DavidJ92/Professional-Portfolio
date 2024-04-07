document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;

    // Create the cursor element
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    body.appendChild(cursor);

    // Create an array to store the trail elements
    const trail = [];

    // Function to update cursor position and trail
    const updateCursor = function (e) {
        const x = e.pageX;
        const y = e.pageY;

        // Update cursor position
        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';

        // Update trail elements
        trail.forEach((trailItem, index) => {
            const speed = 0.5 * (index + 1); // Adjust the speed of each trail item
            const newX = x - speed * (x - trailItem.x);
            const newY = y - speed * (y - trailItem.y);
            trailItem.element.style.left = newX + 'px';
            trailItem.element.style.top = newY + 'px';
        });
    };

    // Function to add a new trail element
    const addTrailElement = function (x, y) {
        const trailElement = document.createElement('div');
        trailElement.classList.add('cursor-trail');
        body.appendChild(trailElement);
        trail.push({ element: trailElement, x, y });
    };

    // Function to remove the oldest trail element
    const removeOldestTrailElement = function () {
        const oldestTrail = trail.shift();
        if (oldestTrail) {
            body.removeChild(oldestTrail.element);
        }
    };

    // Function to handle mouse move event
    const handleMouseMove = function (e) {
        addTrailElement(e.pageX, e.pageY);
        if (trail.length > 10) { // Limit the number of trail elements
            removeOldestTrailElement();
        }
        updateCursor(e);
    };

    // Function to handle mouse enter event
    const handleMouseEnter = function () {
        cursor.classList.add('hover');
    };

    // Function to handle mouse leave event
    const handleMouseLeave = function () {
        cursor.classList.remove('hover');
    };

    // Event listeners for mouse movement and mouse enter/leave
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
});



// Get all the gallery images
const galleryImages = document.querySelectorAll('.gallery-image');

// Add mouseover and mouseout event listeners to each image
galleryImages.forEach(image => {
    image.addEventListener('mouseover', () => {
        // Increase the z-index to bring the hovered image to the top
        image.style.zIndex = '1';
        // Adjust the margin to spread images slightly when hovered
        adjustMargin(image, '20px');
    });

    image.addEventListener('mouseout', () => {
        // Reset the z-index to its default value
        image.style.zIndex = 'auto';
        // Reset the margin
        adjustMargin(image, '0');
    });
});

// Function to adjust the margin of adjacent images
function adjustMargin(image, margin) {
    // Get the next sibling element (adjacent image)
    const nextSibling = image.nextElementSibling;
    // If there's a next sibling, adjust its margin
    if (nextSibling) {
        nextSibling.style.marginLeft = margin;
    }
}

