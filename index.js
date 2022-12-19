const hamburger = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close-btn");
const mobileNav = document.querySelector(".mobile-nav");


hamburger.addEventListener("click", function (){
    mobileNav.classList.add("active");
});


closeBtn.addEventListener("click", function (){
    mobileNav.classList.remove ("active");
console.log("Hell")
})
