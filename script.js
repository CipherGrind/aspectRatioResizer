const widthInput = document.getElementById('width');
const heightInput = document.getElementById('height');
const slider = document.getElementById('slider');
const resizedWidth = document.getElementById('resizedWidth');
const resizedHeight = document.getElementById('resizedHeight');
const setRatioButton = document.getElementById('setRatio');

let aspectRatio = 1;

function updateAspectRatio() {
    const width = parseFloat(widthInput.value);
    const height = parseFloat(heightInput.value);
    
    if (width > 0 && height > 0) {
        aspectRatio = width / height;
    }
}

function resizeImage(scale) {
    const newWidth = Math.round(scale * aspectRatio);
    const newHeight = Math.round(scale);

    resizedWidth.textContent = newWidth;
    resizedHeight.textContent = newHeight;
}

slider.addEventListener('input', function() {
    const scale = slider.value;
    resizeImage(scale);
});

setRatioButton.addEventListener('click', function() {
    updateAspectRatio();
    const initialScale = Math.sqrt(parseFloat(widthInput.value) * parseFloat(heightInput.value) / aspectRatio);
    slider.value = initialScale;
    resizeImage(initialScale);
});
