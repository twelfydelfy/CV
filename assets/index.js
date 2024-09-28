const image = document.getElementById('sunImage');

    // Add event listener for hover (mouseover)
    image.addEventListener('mouseover', () => {
        image.src = 'assets/images/sun1.png';  // Change to moon image on hover
    });

    // Add event listener for when the mouse leaves (mouseout)
    image.addEventListener('mouseout', () => {
        image.src = 'assets/images/sun.png'; 
    });



// Function to handle the scroll animation
function scrollAnimation() {
    const elements = document.querySelectorAll('.fade-in');
    
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        
        // Calculate how far the element is from the top of the viewport
        const scrollPercent = Math.max(0, Math.min(1, 1.65 - rect.top / (window.innerHeight * 1)));
        
        // Apply dynamic opacity and translation based on scrollPercent
        element.style.opacity = scrollPercent;
        element.style.transform = `translateX(${50 * (1 - scrollPercent)}vw)`;
    });
}

function scrollAnimation2() {
    const elements = document.querySelectorAll('.fade-in2');
    
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        
        // Calculate how far the element is from the top of the viewport
        const scrollPercent = Math.max(0, Math.min(1, 1.7 - rect.top / (window.innerHeight * 1)));
        
        // Apply dynamic opacity and translation based on scrollPercent
        element.style.opacity = scrollPercent;
        element.style.transform = `translateX(${50 * (1 - scrollPercent)}vw)`;
    });
}

function scrollAnimation3() {
    const elements = document.querySelectorAll('.fade-in3');
    
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        
        // Calculate how far the element is from the top of the viewport
        const scrollPercent = Math.max(0, Math.min(1, 1.65 - rect.top / (window.innerHeight * 1)));
        
        // Apply dynamic opacity and translation based on scrollPercent
        element.style.opacity = scrollPercent;
        element.style.transform = `translateX(${-50 * (1 - scrollPercent)}vw)`;
    });
}
// Attach scroll event listener
window.addEventListener('scroll', scrollAnimation);
window.addEventListener('scroll', scrollAnimation2);
window.addEventListener('scroll', scrollAnimation3);

// Run once on page load in case the elements are already in view
window.addEventListener('load', scrollAnimation);
window.addEventListener('load', scrollAnimation2);
window.addEventListener('scroll', scrollAnimation3);
