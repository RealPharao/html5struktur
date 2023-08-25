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
