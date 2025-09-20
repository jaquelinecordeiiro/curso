const previousEl = document.getElementById('previous');
const nextEl = document.getElementById('next');
const sliderEl = document.getElementById('slider');
let interval = undefined;
let timeout = undefined;
let selectedImgIndex = 0;

<<<<<<< HEAD
previousEl.addEventListener('click', onPreviousClick);
nextEl.addEventListener('click', onNextClick);
=======
previousEl.addEventListener('click', onPreviousClick)
nextEl.addEventListener('click', onNextClick)
>>>>>>> a975fc2af04bbbde58127d1a428ae2851c45fd28

autoScroll();

function onPreviousClick(){
    const sliderWidth = sliderEl.offsetWidth;
    sliderEl.scrollLeft -= sliderWidth;
    --selectedImgIndex;
    handActiveDot ();
    handleSliderClick();
}

function onNextClick(){
    const sliderWidth = sliderEl.offsetWidth;
    sliderEl.scrollLeft += sliderWidth;
    ++selectedImgIndex;
    handActiveDot ();
    handleSliderClick();
}

function handleSliderClick(){
    clearTimeout(timeout);
    clearInterval(interval);
    interval = undefined;
    setTimeout( () => {
        autoScroll();
    }, 1000);    
}

function handActiveDot (){
     const lis=Array.from(document.getElementsByClassName('dot'));

    if(selectedImgIndex < 0) selectedImgIndex = 0;
    if(selectedImgIndex >= lis.length) selectedImgIndex = lis.length - 1;

   
    lis.forEach(el => el.classList.remove('active'));
    lis[selectedImgIndex].classList.add('active');
}

function autoScroll() {
    if(interval) return;

    interval = setInterval( () => {
        const sliderWidth = sliderEl.offsetWidth;
        const numberOfImages = sliderEl.childElementCount;
        const selectedImage = (sliderEl.scrollLeft / sliderWidth) + 1;

        if(numberOfImages === selectedImage) {
            sliderEl.scrollLeft = 0;
            selectedImgIndex = 0;
            handActiveDot ();
            return;
        }
        
        sliderEl.scrollLeft += sliderWidth;
        ++selectedImgIndex;
        handActiveDot ();
    }, 5000);
}