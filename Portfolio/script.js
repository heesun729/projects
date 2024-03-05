const mainimg = document.getElementById('main-img');

mainimg.addEventListener('mouseover', () => {
    mainimg.src = 'assets/main-img2.jpeg';
});

mainimg.addEventListener('mouseout', () => {
    mainimg.src = 'assets/main-img.jpeg';
});

/* 이미지 슬라이더 */

document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slides');
    let currentIndex = 0;
    const slideCount = slider.children.length;
    const slideWidth = 380; // 슬라이더의 너비를 맞춰주세요.
    const slideInterval = 3000; // 3초 간격으로 설정

    setInterval(function () {
        currentIndex = (currentIndex + 1) % slideCount;
        slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }, slideInterval);
});
