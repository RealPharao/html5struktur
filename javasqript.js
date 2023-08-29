// document.addEventListener("DOMContentLoaded", start);

// let h1 = document.querySelector("h1");
// console.log(h1.textContent);

// let h2 = document.querySelector("h2");
// console.log(h2.textContent);

// let h3one = document.querySelector("h3");
// console.log(h3one.textContent);

// let h3two = document.querySelector("article:last-child h3");
// console.log(h3two.textContent);

// let p1 = document.querySelector("p");
// console.log(h3two.textContent);

// let p2 = document.querySelector("article:last-child p");
// console.log(h3two.textContent);

// let footer = document.querySelector("footer");
// console.log(footer.textContent);

// h1.textContent = "ny overskrift";

// h2.textContent = "h2 overskrift fra js";

// h3one.textContent = "den første h3 skiftet";

// p1.textContent = "djnvcjdsbnvlsj<njkdnvæ";

// h3two.textContent = "så blev den anden også skiftet";

// p2.textContent = "læknlknlknælknælknlæ";

// footer.textContent = "Den sidste lort";

// const pic = document.querySelector("img");
// pic.src = "https://picsum.photos/200/300/?blur=2";
// pic.alt = "nyt billede";

// const pictwo = document.querySelector("article:last-child img");
// pictwo.src = "https://picsum.photos/200/300/?blur=2";
// pictwo.alt = "nyt billede i nr.2";

// let art = document.createElement("article");
// let picThree = document.createElement("img");
// picThree.src = "https://picsum.photos/200/300/?blur=2";
// let h3Three = document.createElement("h3");
// let topic = document.createTextNode("så kom der en nr.3");
// h3Three.appendChild(topic);
// let p3 = document.createElement("p");
// let pText = document.createTextNode(
//   "så er den også med sdkdmnvækdnvpandsæcknsæ"
// );
// p3.appendChild(pText);

// art.appendChild(picThree);
// art.appendChild(h3Three);
// art.appendChild(p3);

// const parent = document.querySelector("section");
// parent.appendChild(art);

// document.addEventListener("DOMContentLoaded", (event) => {
//   console.log(" se på mig jeg er loaded");
// });

document.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("se på mig jeg fuckin virker");

  let h1 = document.querySelector("h1");
  console.log(h1.textContent);

  let h2 = document.querySelector("h2");
  console.log(h2.textContent);

  let h3one = document.querySelector("h3");
  console.log(h3one.textContent);

  let h3two = document.querySelector("article:last-child h3");
  console.log(h3two.textContent);

  let p1 = document.querySelector("p");
  console.log(h3two.textContent);

  let p2 = document.querySelector("article:last-child p");
  console.log(h3two.textContent);

  let footer = document.querySelector("footer");
  console.log(footer.textContent);

  h1.textContent = "ny overskrift";

  h2.textContent = "h2 overskrift fra js";

  h3one.textContent = "den første h3 skiftet";

  p1.textContent = "djnvcjdsbnvlsj<njkdnvæ";

  h3two.textContent = "så blev den anden også skiftet";

  p2.textContent = "læknlknlknælknælknlæ";

  footer.textContent = "Den sidste lort";

  const pic = document.querySelector("img");
  pic.src = "https://picsum.photos/200/300/?blur=2";
  pic.alt = "nyt billede";

  const pictwo = document.querySelector("article:last-child img");
  pictwo.src = "https://picsum.photos/200/300/?blur=2";
  pictwo.alt = "nyt billede i nr.2";

  let art = document.createElement("article");
  let picThree = document.createElement("img");
  picThree.src = "https://picsum.photos/200/300/?blur=2";
  let h3Three = document.createElement("h3");
  let topic = document.createTextNode("så kom der en nr.3");
  h3Three.appendChild(topic);
  let p3 = document.createElement("p");
  let pText = document.createTextNode(
    "så er den også med sdkdmnvækdnvpandsæcknsæ"
  );
  p3.appendChild(pText);

  art.appendChild(picThree);
  art.appendChild(h3Three);
  art.appendChild(p3);

  const parent = document.querySelector("section");
  parent.appendChild(art);
}

const picReplace = document.querySelector("img");
picReplace.addEventListener("click", udskift);

function udskift() {
  console.log("gør hvad jeg siger");
  picReplace.querySelector("img").src = "https://picsum.photos/200/300/?blur=2";
}
