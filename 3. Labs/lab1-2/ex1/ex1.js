
window.onload = function() {
    // Resize the header and footer to fit the width of the screen.
    var header = document.querySelector("header");
    var footer = document.querySelector("footer");
    var width = window.innerWidth;
    header.style.width = width + "px";
    footer.style.width = width + "px";
  };
  