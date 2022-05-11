const elHamburgerBtn = document.querySelector(".hamburger-menu");
const elHamburgerBtnClose = document.querySelector(".hamburger-menu-close");
const elHamburgerBtnCloseMain = document.querySelector(".main");
const elHamburgerBtnCloseFooter = document.querySelector(".footer");

const elHeader = document.querySelector(".header");

elHamburgerBtn.addEventListener("click", function(){
  elHeader.classList.toggle("header--open")
})

elHamburgerBtnClose.addEventListener("click", function(){
  elHeader.classList.remove("header--open")
})

elHamburgerBtnCloseMain.addEventListener("click", function(){
  elHeader.classList.remove("header--open")
})
elHamburgerBtnCloseFooter.addEventListener("click", function(){
  elHeader.classList.remove("header--open")
})