// To color Nav link Gallery after hovering

let gallery = document.getElementById('gallery');
let gallink = document.querySelectorAll('.gallink');

gallery.addEventListener('mouseover', () => {
    gallink[0].style.color = '#FFB03B'
    gallink[1].style.color = '#FFB03B'
})
gallery.addEventListener('mouseout', () => {
    gallink[0].style.color = ''
    gallink[1].style.color = ''
})