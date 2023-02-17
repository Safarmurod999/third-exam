function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}

includeHTML();



let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.style.opacity = 1;
  } else {
    backtop.style.opacity = 0;
  }
}


window.addEventListener("scroll", function () {
  toggleBacktop();
});


function openNavbar() {
  document.getElementById("navbar-responsive").style.left = "0";
  document.getElementById("offCanvas").style.display="block";
  // document.getElementById("navbar-responsive").style.top = "0";
}

function closeNavbar() {
  document.getElementById("navbar-responsive").style.left = "-1500px";
  // document.getElementById("navbar-responsive").style.top = "-100%";
  document.getElementById("offCanvas").style.display="none";

}

window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.getElementById("navbar");

function shrink() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    navbar.classList.add("navbar-shrink");
    // navbar.style.padding = "60px 0 15px";
  } else {
    navbar.classList.remove("navbar-shrink");
    // navbar.style.padding = "73px 0 20px";
  }
}

let cv=document.getElementById("home__cv");

function openCv(){
  cv.style.display="block";
}
function closeCv(){
  cv.style.display="none";
}

const indicators = document.querySelector(".indicators");
const show = document.querySelector("#show img");

indicators.addEventListener("click", function (event) {
  event.target.src && (show.src = event.target.src);
});