let menu = document.getElementById('menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

document.querySelector("#search-icon").onclick = () => {
    document.getElementById("search-form").style.top = "0%"
}

document.querySelector("#close").onclick = () => {
    document.getElementById("search-form").style.top = "-110%"
}


var swiper = new Swiper(".swiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });
