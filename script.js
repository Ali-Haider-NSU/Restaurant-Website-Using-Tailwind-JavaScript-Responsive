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


// Background Slide with time interval

let slidecontainer = document.getElementById('slide-container');
let singlediv = document.querySelectorAll('#slide-container  .slide-img');
let leftbtn = document.getElementById('leftbtn');
let rightbtn = document.getElementById('rightbtn');
let btncolor = document.querySelectorAll('.colorbtn');

// For adding color effect on sliding button

rightbtn.addEventListener('mouseover', () => {
    btncolor[0].style.opacity = '.5'
})
rightbtn.addEventListener('mouseout', () => {
    btncolor[0].style.opacity = '.3'
})
leftbtn.addEventListener('mouseover', () => {
    btncolor[1].style.opacity = '.5'
})
leftbtn.addEventListener('mouseout', () => {
    btncolor[1].style.opacity = '.3'
})

// For Automatic Slider with interval

let index = 0;
let interval = setInterval(run, 2500)

function run() {
    index++;
    changeSlide()
}

function changeSlide() {
    if (index > singlediv.length - 1) {
        index = 0;
    } else if (index < 0) {
        index = singlediv.length - 1;
    }
    let value = -(index * 100);
    slidecontainer.style.transform = `translateX(${value}%)`;
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2500)
}

// For Clicking Button And Slide Manually

rightbtn.addEventListener('click', () => {
    index++;
    changeSlide()
    resetInterval()
})

leftbtn.addEventListener('click', () => {
    index--;
    changeSlide()
    resetInterval()
})