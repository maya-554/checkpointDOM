let icon= document.querySelector('#icon')
let cart= document.querySelector('.cart')
let close_icon= document.querySelector('#close')
icon.onclick=() => {
    cart.classList.add("active");
};
close_icon.onclick=() => {
    cart.classList.remove("active");
};

