document.addEventListener('DOMContentLoaded', function() {
    const heroImage = document.querySelector('.hero-image');
    const images = [
        'zhuye/cd2f94e30d323c09c9ec417968f20d2.jpg',
        'zhuye/ab30ce9b7d3deceacbfccc54193a4e2.jpg'
    ];
    let currentIndex = 0;

    function changeBackground() {
        heroImage.style.backgroundImage = `url('${images[currentIndex]}')`;
        currentIndex = (currentIndex + 1) % images.length;
    }

    setInterval(changeBackground, 5000); // 每5秒切换一次图片
});