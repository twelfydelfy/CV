const image = document.getElementById('sunImage');

    // Add event listener for hover (mouseover)
    image.addEventListener('mouseover', () => {
        image.src = 'assets/images/sun1.png';  // Change to moon image on hover
    });

    // Add event listener for when the mouse leaves (mouseout)
    image.addEventListener('mouseout', () => {
        image.src = 'assets/images/sun.png'; 
    });