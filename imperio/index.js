const previousEl = document.getElementById('previous');
const nextEl = document.getElementById('next');
const sliderEl = document.getElementById('slider');
let interval = undefined;
let timeout = undefined;
let selectedImgIndex = 0;

previousEl.addEventListener('click', onPreviousClick);
nextEl.addEventListener('click', onNextClick);


autoScroll();


function onNextClick() {
    const images = sliderEl.querySelectorAll('.destaque-img');
    const totalImages = images.length;
    selectedImgIndex++;
    if (selectedImgIndex >= totalImages) {
        selectedImgIndex = 0; // volta para a primeira imagem
    }
    updateSlider();
    handleSliderClick();
}

function onPreviousClick() {
    const images = sliderEl.querySelectorAll('.destaque-img');
    const totalImages = images.length;
    selectedImgIndex--;
    if (selectedImgIndex < 0) {
        selectedImgIndex = totalImages - 1; // volta para a última imagem
    }
    updateSlider();
    handleSliderClick();
}
function updateSlider() {
    const images = sliderEl.querySelectorAll('.destaque-img');
    const totalImages = images.length;

    // Garante que o índice fique dentro dos limites
    if (selectedImgIndex < 0) selectedImgIndex = 0;
    if (selectedImgIndex >= totalImages) selectedImgIndex = totalImages - 1;

    const sliderWidth = sliderEl.offsetWidth;
    sliderEl.scrollTo({
        left: selectedImgIndex * sliderWidth,
        behavior: 'smooth'
    });

    handActiveDot();
}

function handleSliderClick() {
    clearTimeout(timeout);
    clearInterval(interval);
    interval = undefined;
    timeout = setTimeout(() => {
        autoScroll();
    }, 10000);
}

function handActiveDot() {
    const lis = Array.from(document.getElementsByClassName('dot'));
    lis.forEach(el => el.classList.remove('active'));
    if (lis[selectedImgIndex]) {
        lis[selectedImgIndex].classList.add('active');
    }
}

function autoScroll() {
    if (interval) return;

    interval = setInterval(() => {
        const images = sliderEl.querySelectorAll('.destaque-img');
        const totalImages = images.length;

        selectedImgIndex++;
        if (selectedImgIndex >= totalImages) {
            selectedImgIndex = 0;
        }
        updateSlider();
    }, 5000);
}

