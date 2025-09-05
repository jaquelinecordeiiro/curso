const previousEl = document.getElementById('previous');
const nextEl = document.getElementById('next');
const sliderEl = document.getElementById('slider');

previousEl.addEventListener('click'), onPreviusClick;
nextEl.addEventListener('click'), onNextClick;

function onPreviusClick(){
    const sliderWidth = sliderEl.offsetWidth;
    sliderEl.scrollLeft -= sliderWidth;
}

function onNextClick(){
    const sliderWidth = sliderEl.offsetWidth;
    sliderEl.scrollLeft += sliderWidth;
}