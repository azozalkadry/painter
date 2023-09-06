document.addEventListener('DOMContentLoaded', function () {
    const boxes = document.querySelectorAll('.box');
    const colorButtons = document.querySelectorAll('.color-button');
    const resetButton = document.getElementById('reset-button');

    let selectedColor = '';

    colorButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            selectedColor = button.style.backgroundColor;
        });
    });

    boxes.forEach(function (box) {
        box.addEventListener('click', function () {
            box.style.backgroundColor = selectedColor;
        });
    });

    resetButton.addEventListener('click', function () {
        boxes.forEach(function (box) {
            box.style.backgroundColor = 'white';
        });
    });
});