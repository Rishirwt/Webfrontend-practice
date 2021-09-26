burger = document.querySelector(".burger")
navbar = document.querySelector(".navbar")
navlist = document.querySelector(".nav-list")
rightnav = document.querySelector(".rightnav")

burger.addEventListener('click',()=>{
    navlist.classList.toggle('vclass');
    rightnav.classList.toggle('vclass');
    navbar.classList.toggle('hnav');
})