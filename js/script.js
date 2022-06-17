console.log("Hi!");
let przycisk1 = document.querySelector(".przycisk1");
let akapit1 = document.querySelector(".akapit1");

let przycisk2 = document.querySelector(".przycisk2");
let akapit2 = document.querySelector(".akapit2");

let przycisk3 = document.querySelector(".przycisk3");
let akapit3 = document.querySelector(".akapit3");

console.log(przycisk1);
przycisk1.addEventListener("click", () => {

    akapit1.remove();
});
console.log(przycisk2)
przycisk2.addEventListener("click", () => {
    akapit2.remove()
})

console.log(przycisk3);
przycisk3.addEventListener("click", () => {
    akapit3.remove()
})
