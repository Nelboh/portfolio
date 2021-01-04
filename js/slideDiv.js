let btn = document.getElementById('tabButton');
let slidein = document.querySelector('.slidein');

btn.addEventListener('click', function () {
    slidein.classList.toggle('open');
});
