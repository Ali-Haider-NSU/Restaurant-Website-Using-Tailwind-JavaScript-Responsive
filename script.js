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

// For Promo Video Playing 

let playvideo = document.getElementById('play-video');
let video = document.getElementById('video');
let cross = document.getElementById('cross');
let videopause = document.getElementById('myVideo');

playvideo.addEventListener('click', () => {
    videopause.play();
    video.style.opacity = '1';
    playvideo.style.zIndex = '0'
    cross.style.display = 'block'
})

cross.addEventListener('click', () => {
    videopause.pause();
    cross.style.display = 'none'
    video.style.opacity = '0'
    playvideo.style.zIndex = '10'
})


// Check Our Special Section

let special1 = document.getElementById('special1');
let special2 = document.getElementById('special2');
let special3 = document.getElementById('special3');
let special4 = document.getElementById('special4');
let special5 = document.getElementById('special5');

let dish1 = document.getElementById('dish1');
let dish2 = document.getElementById('dish2');
let dish3 = document.getElementById('dish3');
let dish4 = document.getElementById('dish4');
let dish5 = document.getElementById('dish5');

let special = document.querySelectorAll('.special');
let dish = document.querySelectorAll('.dish');

function setInitial() {
    if (window.innerWidth < 1000) {
        special1.click();
    } else {
        special1.click();
    }
}
window.addEventListener('resize', setInitial);
setInitial();

special1.addEventListener('click', () => {
    if (window.innerWidth < 1000) {
        special1.style.backgroundColor = '#FFB03B'
        dish1.style.display = 'block';
        special[0].style.borderRight = ''
        special[0].style.color = '#FFFFFF'
        for (var i = 0; i < special.length; i++) {
            if (i == 0) {} else {
                special[i].style.borderRight = ''
                dish[i].style.dish = 'none'
                special[i].style.backgroundColor = '#FFFFFF'
                special[i].style.color = '#433F39'
            }
        }
    } else {
        special1.style.backgroundColor = '#FFFFFF'
        special1.style.color = '#FFB03B'
        special[0].style.borderRight = '3px solid #FFB03B'
        dish1.style.display = 'block'
        for (var i = 0; i < special.length; i++) {
            if (i == 0) {} else {
                special[i].style.borderRight = '2px solid #E5E7EB'
                dish[i].style.display = 'none'
                special[i].style.backgroundColor = '#FFFFFF'
                special[i].style.color = '#433F39'
            }
        }
    }
})

special2.addEventListener('click', () => {
    if (window.innerWidth < 1000) {
        special2.style.backgroundColor = '#FFB03B'
        dish2.style.display = 'block';
        special[1].style.borderRight = ''
        special[1].style.color = '#FFFFFF'
        for (var i = 0; i < special.length; i++) {
            if (i == 1) {} else {
                special[i].style.borderRight = ''
                dish[i].style.display = 'none'
                special[i].style.backgroundColor = '#FFFFFF'
                special[i].style.color = '#433F39'
            }
        }
    } else {
        special2.style.color = '#FFB03B'
        special[1].style.borderRight = '3px solid #FFB03B'
        dish2.style.display = 'block'
        for (var i = 0; i < special.length; i++) {
            if (i == 1) {} else {
                special[i].style.borderRight = '2px solid #E5E7EB'
                dish[i].style.display = 'none'
                special[i].style.backgroundColor = '#FFFFFF'
                special[i].style.color = '#433F39'
            }
        }
    }
})

special3.addEventListener('click', () => {
    if (window.innerWidth < 1000) {
        special3.style.backgroundColor = '#FFB03B'
        dish3.style.display = 'block';
        special[2].style.borderRight = ''
        special[2].style.color = '#FFFFFF'
        for (var i = 0; i < special.length; i++) {
            if (i == 2) {} else {
                special[i].style.borderRight = ''
                dish[i].style.display = 'none'
                special[i].style.backgroundColor = '#FFFFFF'
                special[i].style.color = '#433F39'
            }
        }
    } else {
        special3.style.color = '#FFB03B'
        special[2].style.borderRight = '3px solid #FFB03B'
        dish3.style.display = 'block'
        for (var i = 0; i < special.length; i++) {
            if (i == 2) {} else {
                special[i].style.borderRight = '2px solid #E5E7EB'
                dish[i].style.display = 'none'
                special[i].style.backgroundColor = '#FFFFFF'
                special[i].style.color = '#433F39'
            }
        }
    }
})

special4.addEventListener('click', () => {
    if (window.innerWidth < 1000) {
        special4.style.backgroundColor = '#FFB03B'
        dish4.style.display = 'block';
        special[3].style.borderRight = ''
        special[3].style.color = '#FFFFFF'
        for (var i = 0; i < special.length; i++) {
            if (i == 3) {} else {
                special[i].style.borderRight = ''
                dish[i].style.display = 'none'
                special[i].style.backgroundColor = '#FFFFFF'
                special[i].style.color = '#433F39'
            }
        }
    } else {
        special4.style.color = '#FFB03B'
        special[3].style.borderRight = '3px solid #FFB03B'
        dish4.style.display = 'block'
        for (var i = 0; i < special.length; i++) {
            if (i == 3) {} else {
                special[i].style.borderRight = '2px solid #E5E7EB'
                dish[i].style.display = 'none'
                special[i].style.backgroundColor = '#FFFFFF'
                special[i].style.color = '#433F39'
            }
        }
    }
})

special5.addEventListener('click', () => {
    if (window.innerWidth < 1000) {
        special5.style.backgroundColor = '#FFB03B'
        dish5.style.display = 'block';
        special[4].style.borderRight = ''
        special[4].style.color = '#FFFFFF'
        for (var i = 0; i < special.length; i++) {
            if (i == 4) {} else {
                special[i].style.borderRight = ''
                dish[i].style.display = 'none'
                special[i].style.backgroundColor = '#FFFFFF'
                special[i].style.color = '#433F39'
            }
        }
    } else {
        special5.style.color = '#FFB03B'
        special[4].style.borderRight = '3px solid #FFB03B'
        dish5.style.display = 'block'
        for (var i = 0; i < special.length; i++) {
            if (i == 4) {} else {
                special[i].style.borderRight = '2px solid #E5E7EB'
                dish[i].style.display = 'none'
                special[i].style.backgroundColor = '#FFFFFF'
                special[i].style.color = '#433F39'
            }
        }
    }
})

// Organize Your Events in our Restaurant

let eventparent = document.getElementById('event-parent');
let singleevent = document.querySelectorAll('.event');
let roundbtn = document.querySelectorAll('.round-icn');

var indx = 0;
let intrval = setInterval(runn, 3000)

function runn() {
    indx++;
    changeSlides()
    if (indx == 0) {
        roundbtn[indx].style.color = '#FFB03B'
        roundbtn[1].style.color = '#FFFFFF'
        roundbtn[2].style.color = '#FFFFFF'
    } else if (indx == 1) {
        roundbtn[indx].style.color = '#FFB03B'
        roundbtn[0].style.color = '#FFFFFF'
        roundbtn[2].style.color = '#FFFFFF'
    } else {
        roundbtn[indx].style.color = '#FFB03B'
        roundbtn[0].style.color = '#FFFFFF'
        roundbtn[1].style.color = '#FFFFFF'
    }


}

function changeSlides() {
    if (indx > singleevent.length - 1) {
        indx = 0;
    } else if (indx < 0) {
        indx = singleevent.length - 1;
    }
    let value = -(indx * 100);
    eventparent.style.transform = `translateX(${value}%)`;
}

function resetInterval() {
    clearInterval(intrval)
    intrval = setInterval(runn, 3000)
}

// For changing slides by clicking rounded button

roundbtn[0].addEventListener('click', () => {
    indx = 0;
    roundbtn[indx].style.color = '#FFB03B'
    roundbtn[1].style.color = '#FFFFFF'
    roundbtn[2].style.color = '#FFFFFF'
    changeSlides()
    resetInterval()
})

roundbtn[1].addEventListener('click', () => {
    indx = 1;
    roundbtn[indx].style.color = '#FFB03B'
    roundbtn[0].style.color = '#FFFFFF'
    roundbtn[2].style.color = '#FFFFFF'
    changeSlides()
    resetInterval()
})

roundbtn[2].addEventListener('click', () => {
    indx = 2;
    roundbtn[indx].style.color = '#FFB03B'
    roundbtn[0].style.color = '#FFFFFF'
    roundbtn[1].style.color = '#FFFFFF'
    changeSlides()
    resetInterval()
})