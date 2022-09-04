let movies = [
  {
    name: "falcon and the windter solidier",
    des: "Thor's adopted brother and the god of mischief, based on the",
    image: "images/slider 1.PNG"
  },

  {
    name: "loki",
    des:
      "Loki is an American television series created by Michael Waldron for the",
    image: "images/slider 1.PNG"
  },
  {
    name: "wanda vision",
    des: "i Martino kept her regional accent for Sylvie, in order ",
    image: "images/slider 3.PNG"
  },
  {
    name: "raya and the last dragon",
    des: "lorem",
    image: "images/slider 4.PNG"
  },
  {
    name: "luca",

    des:
      "The former TVA Hunter A-23 who rose from the ranks to become a respected judge; she oversees the Loki variant investigation.[14][15] Director Kate Herron compared both Mbatha-Raw and Renslayer to chameleons, and said Renslayer was always",
    image: "images/slider 5.PNG"
  }
];
const carousel = document.querySelector(".carousel");

let sliders = [];

let slideIndex = 0;

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  //creating Dom
  let slide = document.createElement("div");
  var imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  //image
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  //attaching all the element

  // setting up the images

  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  //setting up the element class name
  slide.className = "slider";
  imgElement.className = "img-element";
  content.classsname = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}%-${
      30 * (sliders.length - 2)
    }
      px)`;
  }
};

for (let i = 0; i < 3; i++) {
  createSlide();
}
setInterval(() => {
  createSlide();
}, 3000);

const videoCards = [...document.querySelectorAll(".video-card")];
videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

// let cardContainers.forEach((item,i)=>{
//   let containersDimensions=item.getBoundClientRect();
//   let preBtns=[...document.querySelectorAll(".pre-btn")];
//   let nxtBtns=[...document.querySelectorAll(".nxt-btn")];
// })
// cardContainers.forEach((item,i)=>{
//   let containersDimensions=item.getBoundClientRect();
//   let containersWidth=containersDimensions.Width-200;

// });
// preBtns[i].addEventListener("click",()=>{
//   item.scrollLeft-=containersDimensions-200;
// });
// preBtns[i].addEventListener("click",()=>{
//   item.scrollLeft-=containersWidth+200;
// });
