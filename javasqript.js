// let h1 = document.createElement("h1");
// let title = document.createTextNode("Nu står der Penis...!");
// h1.appendChild(title);
// console.log("nu står der noget andet");

// let h1 = document.querySelector("h1");
// let text = document.createTextNode("nu står der det her");
// h1.appendChild(text);
// console.log("");

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

// let h1 = document.querySelector("h1");
// console.log(h1.textContent);

h1.textContent = "her står der noget andet";

h2.textContent = "det er en h2 overskrift";

h3one.textContent = "så blev den føsrte h3 udskiftet";

p1.textContent = "kdsnfælkasnmcækansøæclknasøældkcnlæKDNSCØL";

p2.textContent = "lkslddfvnfvælksdnvcælksndvæljksndvæljksndvljksndvæl";
