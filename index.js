let pfp = document.querySelector(".pfp");
let fullName = document.querySelector(".full-name");
let title = document.querySelector(".title");
let description = document.querySelector(".description");

let arrow = document.querySelector(".arrow");
let arrowLeft = document.querySelector(".arrow-left");
let arrowRight = document.querySelector(".arrow-right");

// Profiles
const joker = [
  "resources/images/joker.jpg",
  "Arthur Fleck",
  "Comedian",
  "Wanna know how I got these scars? My father was… a drinker. And a fiend. And one night he goes off crazier than usual. Mommy gets the kitchen knife to defend herself. He doesn’t like that. Not-one-bit. So – me watching – he takes the knife to her, laughing while he does it! Turns to me, and he says, “why so serious, son?” Comes at me with the knife… “Why so serious?” He sticks the blade in my mouth… “Let’s put a smile on that face!” And…Why so serious?",
];

const ironman = [
  "resources/images/char.png",
  "Tony Stark",
  "Iron Man",
  "This time travel thing that we are going to pull off tomorrow… it’s got me scratching my head about the survivability of all this. But then again that’s the hero gig. Part of the journey is the end. What am I tripping for? Everything is going to work out exactly the way it’s supposed to. I love you 3000.",
];

const trainer = [];

// Action
let reviews = [joker, ironman];

let review = 0;

pfp.src = reviews[review][0];
fullName.innerHTML = reviews[review][1];
title.innerHTML = reviews[review][2];
description.innerHTML = reviews[review][3];

arrowLeft.addEventListener("click", () => {
  if (review > 0) review -= 1;
  updateReview();

  prevReview();

  if (pfp.classList.contains("next")) {
    nextReview();
  }
});

arrowRight.addEventListener("click", () => {
  if (review < reviews.length - 1) review += 1;
  updateReview();

  nextReview();

  if (pfp.classList.contains("prev")) {
    prevReview();
  }
});

function updateReview() {
  pfp.src = reviews[review][0];
  fullName.innerHTML = reviews[review][1];
  title.innerHTML = reviews[review][2];
  description.innerHTML = reviews[review][3];
}

function prevReview() {
  pfp.classList.toggle("prev");
  fullName.classList.toggle("prev");
  title.classList.toggle("prev");
  description.classList.toggle("prev");
}

function nextReview() {
  pfp.classList.toggle("next");
  fullName.classList.toggle("next");
  title.classList.toggle("next");
  description.classList.toggle("next");
}
