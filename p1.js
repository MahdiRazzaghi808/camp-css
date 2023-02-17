let navBtn = document.querySelector(".nav__btn");
let mobileNav = document.querySelector(".mobile-nav");
let flagBtn = false;
navBtn.addEventListener("click", function () {

    if (flagBtn) {
        navBtn.classList.remove("nav__btn--open")
        mobileNav.style.left = "-30rem"
        flagBtn = false
    } else {
        navBtn.classList.add("nav__btn--open")
        mobileNav.style.left = "0"
        flagBtn = true;
    }
});


let like = document.querySelectorAll(".place__like");
like.forEach((item, index) => {
  
    
    item.addEventListener("click", () => {
        console.log(item.classList);
        if (item.classList[1]) {
            item.classList.remove("place__like--modified")
        } else {
            item.classList.add("place__like--modified")
        }
    })
})