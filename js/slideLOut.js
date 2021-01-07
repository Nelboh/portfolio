window.addEventListener('mouseup', function (event) {
    let devSlider = document.getElementById('slideLeft');
    if (event.target != document.getElementById("slideLeft")) {
        devSlider.classList.remove('slidInL')
    }
});