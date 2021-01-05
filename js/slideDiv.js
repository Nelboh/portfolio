let btn = document.getElementById('tabButton');
let slider = document.getElementById('slider');

let slidein = document.querySelector('.slidein');

// [document.querySelector('.tabButton'), document.querySelector('.slider')].forEach(item => {
//     item.addEventListener('click', event => {
//         slidein.classList.toggle('open');
//     })
// })

// btn.addEventListener('click', function () {
//     slidein.classList.toggle('open');
// });

slider.addEventListener('click', function () {
    slidein.classList.toggle('open')
});

// window.onload = function () {
//     let divToHide = document.getElementById('divToHide');
//     document.onclick = function (e) {
//         if (e.target.id !== 'divToHide') {
//             // if element clicked wasn't the div, hide it
//             divToHide.classList.toggle('open');
//         }
//     };
// };