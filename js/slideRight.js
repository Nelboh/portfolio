let newSlider = document.getElementById('slideRight');

let slideToRight = document.querySelector('.slidIn');

newSlider.addEventListener('click', function () {
    newSlider.classList.toggle('slidIn')
});

// window.onload = function () { console.log('JS loaded!') };

// function addClassStyle() {
//     let newSlider = document.getElementById('slideRight');
//     let slideRight = document.querySelector('.slidIn')
//     newSlider.classList.add('slidIn')
// };

// let newSlider = document.getElementById('slideRight');

// // let slideToRight = document.querySelector('.slidIn');

// newSlider.addEventListener('click', function (e) {
//     if (e.target.id === "slideRight") {
//         e.target.classList.toggle('slidIn');
//     }
// }, false);