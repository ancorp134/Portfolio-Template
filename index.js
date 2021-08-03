window.addEventListener('scroll', () => {
  let navbar = document.querySelector('.navbar')
  navbar.classList.toggle('sticky', window.scrollY > 20)
  scrollupbtn.classList.toggle('show', window.scrollY > 400)
})

//  typing animation 
var typed = new Typed(".typing", {
  strings: ["Developer", "Student", "Designer", "Freelancer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
})

var typed = new Typed(".typing-2", {
  strings: ["Student", "Developer", "Designer", "Freelancer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
})

// toggle btn navbar script

let toggleBtn = document.querySelectorAll(".menu-btn");
let xBtn = document.querySelector(".menu-btn i");
let menu = document.querySelector(".menu");
toggleBtn.forEach(item => {
  item.addEventListener("click", () => {
      menu.classList.toggle('active')
      xBtn.classList.toggle('active')
  })
})