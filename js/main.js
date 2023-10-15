let navbarBg = document.getElementById("navbar");
let anchors = document.getElementById("stl-container");

function changeBg() {
  if (window.scrollY > 716 - 90) {
    navbarBg.classList.add("nav-scrolled");
    // anchors.classList.add("stl-logo","stl-logo2");
  }
  else {
    navbarBg.classList.remove("nav-scrolled");
    // anchors.classList.replace("stl-logo2", "stl-logo");
  }

  if (window.scrollY < 0) {
    navbarBg.classList.add("navbar-home");
  }
}

window.addEventListener("scroll", changeBg);


$(window).scroll(() => {
  let windowScroll = $(window).scrollTop();

  if (windowScroll > 716 - 90) {
    $('.navigation a').css('color', 'black');
    $('.stl-logo').css('color', 'black');

  } else {
    $('.navigation a').css('color', 'white');
    $('.stl-logo').css('color', 'white');
  }

})