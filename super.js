// fetch("https://kea-alt-del.dk/t7/superheroes/")
//   .then((res) => res.json())
//   .then(showHeroes);

// function showHeroes(heros) {
//   heros.forEach(showHero);
// }

// function showHero(heros) {
//   console.log(heros);

//   const template = document.querySelector("template").content;
//   const copy = template.cloneNode(true);

//   copy.querySelector(".power").textContent = `Power: ${heros.powers}`;
//   copy.querySelector(".realName").textContent = `realName: ${heros.realName}`;
//   copy.querySelector(".alias").textContent = `Alias: ${heros.alias}`;
//   copy.querySelector(".origin").textContent = `Origin: ${heros.origin}`;
//   copy.querySelector(
//     ".weaknesses"
//   ).textContent = `Weaknesses: ${heros.weaknesses}`;
//   copy.querySelector(".active").textContent = `Active: ${heros.active}`;
//   copy.querySelector(".isEvil").textContent = `isEvil: ${heros.isEvil}`;
//   copy.querySelector(".height").textContent = `Height: ${heros.height}`;
//   copy.querySelector(
//     ".birthday"
//   ).textContent = `Dag:${heros.birthday.day}  Måned:${heros.birthday.month}  År:${heros.birthday.year}`;
//   copy.querySelector("img").src = heros.image;
//   const parent = document.querySelector("main");
//   parent.appendChild(copy);
// }

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

  copy.querySelector(".power").textContent = `Power: ${heros.powers}`;
  copy.querySelector(".realName").textContent = `realName: ${heros.realName}`;
  copy.querySelector(".alias").textContent = `Alias: ${heros.alias}`;
  copy.querySelector(".origin").textContent = `Origin: ${heros.origin}`;
  copy.querySelector(
    ".weaknesses"
  ).textContent = `Weaknesses: ${heros.weaknesses}`;
  copy.querySelector(".active").textContent = `Active: ${heros.active}`;
  copy.querySelector(".isEvil").textContent = `isEvil: ${heros.isEvil}`;
  copy.querySelector(".height").textContent = `Height: ${heros.height}`;
  copy.querySelector(
    ".birthday"
  ).textContent = `Dag:${heros.birthday.day}  Måned:${heros.birthday.month}  År:${heros.birthday.year}`;
  copy.querySelector("img").src = heros.image;
  const parent = document.querySelector("main");
  parent.appendChild(copy);
}
