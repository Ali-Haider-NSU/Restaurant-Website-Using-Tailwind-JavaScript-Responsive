// Navigation Part Code

let gallery = document.getElementById('gallery');
let gallink = document.querySelectorAll('.gallink');
let subul = document.getElementById('sub-ul');
let menubar = document.getElementById('menubar');
let crossbar = document.getElementById('crossbar');
let mainul = document.getElementById('mainul');
let angleup = document.getElementById('angleup');
let angledown = document.getElementById('angledown');

// Hover on Gallery in Large screen

gallery.addEventListener('mouseover', () => {
    gallink[0].style.color = '#FFB03B'
    gallink[1].style.color = '#FFB03B'
    if (window.innerWidth >= 1000) {
        subul.style.display = 'block';
    }
})
gallery.addEventListener('mouseout', () => {
    gallink[0].style.color = ''
    gallink[1].style.color = ''
    if (window.innerWidth >= 1000) {
        subul.style.display = 'none';
    }
})

// Showing Navigation Link when Large Screen

function handleResize() {
    if (window.innerWidth >= 1000) {
        mainul.style.display = 'block'
        crossbar.style.display = 'block'
        menubar.style.display = 'none'
    } else {
        mainul.style.display = 'none'
        menubar.style.display = 'block'
        crossbar.style.display = 'none'
    }
}
window.addEventListener("resize", handleResize);
handleResize();

// Clicking Hamburger/Menubar to Block UL when small screen

menubar.addEventListener('click', () => {
    mainul.style.display = 'block'
    menubar.style.display = 'none'
    crossbar.style.display = 'block'
})
crossbar.addEventListener('click', () => {
    mainul.style.display = 'none'
    menubar.style.display = 'block'
    crossbar.style.display = 'none'
})

// Showing Sub Ul inside the Gallery by clicking angleup and angledown

angledown.addEventListener('click', () => {
    subul.style.display = 'block'
    angleup.style.display = 'block'
    angledown.style.display = 'none'
})
angleup.addEventListener('click', () => {
    subul.style.display = 'none'
    angleup.style.display = 'none'
    angledown.style.display = 'block'
})