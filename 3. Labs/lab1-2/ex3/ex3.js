
window.onload = function() {
    // Add a hover effect to the title in the header.
    var title = document.querySelector("h1");
    title.addEventListener("mouseover", function() {
      title.style.color = "red";
    });
    title.addEventListener("mouseout", function() {
      title.style.color = "#fff";
    });

    var buttons = document.querySelectorAll(".button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function() {
        this.style.size = "1.2em";
      });
      buttons[i].addEventListener("mouseleave", function() {
        this.style.size = "1em";
      });
    }
  };

  document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('#primary_nav_wrap ul');
  
    menuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('show');
    });
  });
  