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

pfp.src = joker[0];
fullName.innerHTML = joker[1];
title.innerHTML = joker[2];
description.innerHTML = joker[3];
