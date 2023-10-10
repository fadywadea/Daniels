let navbarBg = document.getElementById("navbar");

function changeBg() {
  if (window.scrollY > 716) {
    navbarBg.classList.add("nav-scrolled");
  }
  else {
    navbarBg.classList.remove("nav-scrolled");
  }

  if (window.scrollY < 0) {
    navbarBg.classList.add("navbar-home");
  }
}

window.addEventListener("scroll", changeBg);


$(window).scroll(() => {
  let windowScroll = $(window).scrollTop();

  if (windowScroll > 716) {
    $('.navigation a').css('color', 'black');
    $('.stl-logo').css('color', 'black');

  } else {
    $('.navigation a').css('color', 'white');
    $('.stl-logo').css('color', 'white');
  }

})