window.addEventListener('mouseup', function (event) {
    let copySlider = document.getElementById('slideRight');
    if (event.target != document.getElementById("slideRight")) {
        copySlider.classList.remove('slidIn')
    }
});