const colorToggle = document.getElementById('lightmode');
const image = document.getElementById('sunImage');


    image.addEventListener('mouseover', () => {
        image.src = 'assets/images/sun1.png'; 
    });

    image.addEventListener('mouseout', () => {
        image.src = 'assets/images/sun.png'; 
    });



function scrollAnimation() {
    const elements = document.querySelectorAll('.fade-in');
    
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const scrollPercent = Math.max(0, Math.min(1, 1.65 - rect.top / (window.innerHeight * 1)));
        if(window.innerWidth >= 481){
        element.style.opacity = scrollPercent;
        element.style.transform = `translateX(${50 * (1 - scrollPercent)}vw)`;}
        else if(window.innerWidth <= 480 && window.innerWidth >= 410){
            element.style.opacity = scrollPercent;
        element.style.transform = `translateX(${45 * (1 - scrollPercent)}vw)`;}
        else if(window.innerWidth <= 409){
            element.style.opacity = scrollPercent;
        element.style.transform = `translateX(${15 * (1 - scrollPercent)}vw)`;
        }
        
    });
}

function scrollAnimation2() {
    const elements = document.querySelectorAll('.fade-in2');
    
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const scrollPercent = Math.max(0, Math.min(1, 1.7 - rect.top / (window.innerHeight * 1)));
        if(window.innerWidth >= 481){
        element.style.opacity = scrollPercent;
        element.style.transform = `translateX(${50 * (1 - scrollPercent)}vw)`;}
        else if(window.innerWidth <= 480 && window.innerWidth >= 410){
            element.style.opacity = scrollPercent;
        element.style.transform = `translateX(${45 * (1 - scrollPercent)}vw)`;
        }
        else if(window.innerWidth <=409){
            element.style.opacity = scrollPercent;
        element.style.transform = `translateX(${15 * (1 - scrollPercent)}vw)`;
        }
    });
}

function scrollAnimation3() {
    const elements = document.querySelectorAll('.fade-in3');
    
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const scrollPercent = Math.max(0, Math.min(1, 1.65 - rect.top / (window.innerHeight * 1)));
        if(window.innerWidth >= 481){
        element.style.opacity = scrollPercent;
        element.style.transform = `translateX(${-50 * (1 - scrollPercent)}vw)`;}
        else if(window.innerWidth <= 480 && window.innerWidth >=410){
            element.style.opacity = scrollPercent;
        element.style.transform = `translateX(${-100 * (1 - scrollPercent)}vw)`;
        }
        else if(window.innerWidth <=409){
            element.style.opacity = scrollPercent;
        element.style.transform = `translateX(${-100 * (1 - scrollPercent)}vw)`;
        }
    });
}
window.addEventListener('scroll', scrollAnimation);
window.addEventListener('scroll', scrollAnimation2);
window.addEventListener('scroll', scrollAnimation3);

window.addEventListener('load', scrollAnimation);
window.addEventListener('load', scrollAnimation2);
window.addEventListener('scroll', scrollAnimation3);


if (localStorage.getItem('isLightMode') !== null) {
    isLightMode = JSON.parse(localStorage.getItem('isLightMode'));
}else{
    isLightMode = true;
}

var lightmodebutton = document.querySelector('.lightmode');
lightmodebutton.addEventListener('click', toggleColors);

const gthub = document.getElementById("boximg");
const lkdn = document.getElementById("boximg2");

function toggleColors() {
    let root = document.documentElement;

    if (isLightMode) {
        root.style.setProperty('--primary-color', '#171717');
        root.style.setProperty('--secondary-color', '#FFFFFF'); 
        root.style.setProperty('--third-color', '#9791FF'); 
        root.style.setProperty('--fourth-color', '#433BFF'); 
        root.style.setProperty('--sixth-color', "#8e8e8e");
        gthub.src="assets/images/github1.png";
        lkdn.src="assets/images/linkedin1.png";
        localStorage.setItem('isLightMode', true);

    } else {
        root.style.setProperty('--primary-color', '#f2f2f2');
        root.style.setProperty('--secondary-color', '#000000'); 
        root.style.setProperty('--third-color', '#433BFF'); 
        root.style.setProperty('--fourth-color', '#9791FF'); 
        root.style.setProperty('--sixth-color', "#E5E4E4");
        gthub.src="assets/images/github.png";
        lkdn.src="assets/images/linkedin.png";
    }

    isLightMode = !isLightMode;
    localStorage.setItem('isLightMode', false);
}
toggleColors();
