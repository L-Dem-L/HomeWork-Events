let currentColor = 0;
const lights = document.querySelectorAll('.light');

function changeColor() {
    lights[currentColor].classList.remove('active');
    currentColor = (currentColor + 1) % lights.length;
    lights[currentColor].classList.add('active');
}
lights[currentColor].classList.add('active');