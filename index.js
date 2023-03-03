let pfp = document.querySelector(".pfp");
let fullName = document.querySelector(".full-name");
let title = document.querySelector(".title");
let description = document.querySelector(".description");

const joker = [
  "resources/images/joker.jpg",
  "Arthur Fleck",
  "Comedian",
  "Wanna know how I got these scars? My father was… a drinker. And a fiend. And one night he goes off crazier than usual. Mommy gets the kitchen knife to defend herself. He doesn’t like that. Not-one-bit. So – me watching – he takes the knife to her, laughing while he does it! Turns to me, and he says, “why so serious, son?” Comes at me with the knife… “Why so serious?” He sticks the blade in my mouth… “Let’s put a smile on that face!” And…Why so serious?",
];

let reviews = [joker];

pfp.src = reviews[0][0];
fullName.innerHTML = reviews[0][1];
title.innerHTML = reviews[0][2];
description.innerHTML = reviews[0][3];

// arrowRight.addEventListener("click", function() {
// Increment reviews array selection count by one
// });

// arrowLeft.addEventListener("click", function() {
// Increment reviews array selection count by one
// });
