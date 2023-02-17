let service__row = document.getElementById("service__row");
const serviceObj = [
  {
    src: "images/service-1.svg",
    title: "What I can do for you",
    text: "Faster, better products that your users love. Here's all the services I provide:",
    li1: "Design Strategy",
    li2: "Web and Mobile App Design",
    li3: "Front-end Development",
  },
  {
    src: "images/service-2.svg",
    title: "Applications I'm fluent in",
    text: "Every designer needs the right tools to do the perfect job.",
    li1: "Sketch",
    li2: "Webflow",
    li3: "Figma",
  },
  {
    src: "images/service-3.svg",
    title: "What you can expect",
    text: "I design products that are more pretty. I make them shippable and usable.",
    li1: "Clean and functional",
    li2: "Device and user friendly",
    li3: "Efficient and maintainable",
  },
];

function serCard(src, title, text, li1, li2, li3) {
  return `<div class="service__card">
    <img src="${src}" alt="...">
    <h3 class="service__card-title">${title}</h3>
    <p class="service__card-text">
      ${text}
    </p>
    <ul class="service__card-list">
      <li>${li1}</li>
      <li>${li2}</li>
      <li>${li3}</li>
    </ul>
  </div>
    `;
}

function getService(serviceObj) {
  for (const k of serviceObj) {
    service__row.innerHTML += serCard(
      k.src,
      k.title,
      k.text,
      k.li1,
      k.li2,
      k.li3
    );
  }
}

getService(serviceObj);

// ------------------------------------------------------------

let expRow=document.getElementById("exp__left");
let expObj = [
  {
    name: "Stanford University",
    src:"images/top.svg",
    des:"MSc (Human Computer Interaction)",
    date:"• 2013-2015"
  },
  {
    name: "MIT Summer School",
    src:"images/top.svg",
    des:"UX Training Bootcamp",
    date:"• 2013-2014"
  },
  {
    name: "California State University",
    src:"images/top.svg",
    des:"BSc in Software Engineering",
    date:"• 2009-2012",
  },
];

function expCard(name, src, des, date) {
  return `<div class="experience__card-left">
    <div class="top"><h4>${name}</h4>
    <img src="${src}" alt="..."></div>
    <div class="bottom"><p>${des}</p>
    <p>${date}</p></div>
  </div>`;
}

function getExp(expObj){
  for (const i of expObj) {
    expRow.innerHTML+=expCard(i.name,i.src,i.des,i.date);
  }
}

getExp(expObj);

// ---------------------------------------------------------------


let expRow2=document.getElementById("exp__right");
let expObj2 = [
  {
    img:"images/fleet-icon.svg",
    name: "SpaceFleet",
    src:"images/top.svg",
    des:"Senior Product Designer",
    date:"• 2013-2015"
  },
  {
    img:"images/music-icon.svg",
    name: "MusicMash",
    src:"images/top.svg",
    des:"Information Architect",
    date:"• 2013-2014"
  },
  {
    img:"images/crown-icon.svg",
    name: "Kingdom",
    src:"images/top.svg",
    des:"UI Designer",
    date:"• 2009-2012",
  },
];

function expCard2(img,name, src, des, date) {
  return `<div class="experience__card-right">
    <img src="${img}" alt="...">
    <div class="experience__card-left">
    <div class="top"><h4>${name}</h4>
    <img src="${src}" alt="..."></div>
    <div class="bottom"><p>${des}</p>
    <p>${date}</p></div>
  </div>
  </div>`;
}

function getExp2(expObj){
  for (const i of expObj) {
    expRow2.innerHTML+=expCard2(i.img,i.name,i.src,i.des,i.date);
  }
}

getExp2(expObj2);