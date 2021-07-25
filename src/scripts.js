const swiper = new Swiper('.swiper-container', {
    cssMode: true,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

setTimeout(()=> {
    const swup = new Swup();
},0)
