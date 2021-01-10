window.addEventListener('mouseup', function (event) {
    let artSlider = document.getElementById('slideLeft2');
    if (event.target != document.getElementById("slideLeft2")) {
        artSlider.classList.remove('slidInL')
    }
});