//Đóng/mở mobile menu
var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;
mobileMenu.onclick = function() {
    var isCloded = header.clientHeight === headerHeight;
    if (isCloded) {
        header.style.height = 'auto'
    } else {
        header.style.height = null;
    }
}

//Tự động đóng khi chọn Menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    menuItem.onclick = function(event) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if (isParentMenu) {
            event.preventDefault();

        } else {
            header.style.height = null;
        }
    }
}

// Buy tickets
const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.js-modal');
const modalContainer = document.querySelector('.js-modal-container');
const modal_close = document.querySelector('.js-modal-close');
for (const buyBtn of buyBtns) {
    buyBtn.onclick = function() {
        modal.classList.add('open'); //hiển thị modal
    }
}
modal_close.onclick = function() {
    modal.classList.remove('open'); //ẩn modal
}
modal.onclick = function() {
    modal.classList.remove('open'); //ẩn modal khi click ngoài modalConatiner
}
modalContainer.onclick = function(event) {
    event.stopPropagation();
}

// Show Slider
var slideIndex = 0;
showSlides();

function showSlides() {
    // var i;
    // var slides = document.getElementsByClassName('js-my_slide');
    // for (i = 0; i < slides.length; i++) {
    //     slides[i].classList.remove('active');
    // }
    // slideIndex++;
    // if (slideIndex > slides.length) slideIndex = 1;
    // slides[slideIndex - 1].classList.add('active');
    var slides = document.querySelectorAll('.js-my_slide');
    for (var slide of slides) {
        slide.classList.remove('active');
    }
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    slides[slideIndex - 1].classList.add('active');
    setTimeout(showSlides, 2000);

}