const prev = document.querySelectorAll(".prev")[0];
const next = document.querySelectorAll(".next")[0];
const images = document.querySelectorAll(".carousel")[0].children;
const totalImages = images.length;
let index = 0;

prev.addEventListener("click", () => {
  nextImage("next");
});

next.addEventListener("click", () => {
  nextImage("prev");
});

function nextImage(direction) {
  if (direction == "next") {
    index++;
    if (index == totalImages) {
      index = 0;
    }
  } else {
    if (index == 0) {
      index = totalImages - 1;
    } else {
      index--;
    }
  }

  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove("main");
  }
  images[index].classList.add("main");
}

// ------------------------------------------

const prev1 = document.querySelectorAll(".prev")[1];
const next1 = document.querySelectorAll(".next")[1];
const images1 = document.querySelectorAll(".carousel")[1].children;
const totalImages1 = images1.length;
let index1 = 0;

prev1.addEventListener("click", () => {
  nextImage1("next");
});

next1.addEventListener("click", () => {
  nextImage1("prev");
});

function nextImage1(direction) {
  if (direction == "next") {
    index1++;
    if (index1 == totalImages1) {
      index1 = 0;
    }
  } else {
    if (index1 == 0) {
      index1 = totalImages1 - 1;
    } else {
      index1--;
    }
  }

  for (let i = 0; i < images1.length; i++) {
    images1[i].classList.remove("main");
  }
  images1[index1].classList.add("main");
}
