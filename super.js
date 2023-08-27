fetch("https://kea-alt-del.dk/t7/superheroes/")
  .then((res) => res.json())
  .then(showHeroes);

function showHeroes(heros) {
  heros.forEach(showHero);
}

function showHero(heros) {
  console.log(heros);

  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);

  copy.querySelector(".power").textContent = heros.powers;
  copy.querySelector(".realName").textContent = heros.realName;
  copy.querySelector(".alias").textContent = heros.alias;
  copy.querySelector(".origin").textContent = heros.origin;
  copy.querySelector(".weaknesses").textContent = heros.weaknesses;
  copy.querySelector(".active").textContent = heros.active;
  copy.querySelector(".isEvil").textContent = heros.isEvil;
  copy.querySelector(".height").textContent = heros.height;
  copy.querySelector(".birthday").textContent =
    heros.birthday.day + "/" + heros.birthday.month;
  copy.querySelector("img").src = heros.image;
  const parent = document.querySelector("body");
  parent.appendChild(copy);
}

fetch("https://kea-alt-del.dk/t7/superheroes/")
  .then((res) => res.json())
  .then(showHeroes);

function showHeroes(heros) {
  heros.forEach(showHero);
}

function showHero(heros) {
  console.log(heros);

  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);

  copy.querySelector(".power").textContent = heros.powers;
  copy.querySelector(".realName").textContent = heros.realName;
  copy.querySelector(".alias").textContent = heros.alias;
  copy.querySelector(".origin").textContent = heros.origin;
  copy.querySelector(".weaknesses").textContent = heros.weaknesses;
  copy.querySelector(".active").textContent = heros.active;
  copy.querySelector(".isEvil").textContent = heros.isEvil;
  copy.querySelector(".height").textContent = heros.height;
  copy.querySelector(".birthday").textContent =
    heros.birthday.day + "/" + heros.birthday.month;
  copy.querySelector("img").src = heros.image;
  const parent = document.querySelector("body");
  parent.appendChild(copy);
}
