// document.getElementById("title").innerText = "Hello World";

// document.querySelector("h1").innerText = "Hello";
// document.querySelector(".heading").innerText = "Hello2";

// let selection = document.querySelectorAll("h1");

// selection.forEach((item, index) => {
//   item.innerText = `Title - ${index}`;
// });

//To create a div
// const div = document.createElement("div");

const body = document.querySelector("body");
// body.append(div);

// const fruits = ["Mango", "Orange", "Grapes", "Apple"];

// fruits.forEach((fruit) => {
//   const h1 = document.createElement("h1");
//   h1.innerText = fruit;
//   div.append(h1);
// });

// const h1 = document.createElement("h1");

// const text = document.createTextNode("Welcome to the session");
// h1.append(text);

// body.append(h1);

const img = document.createElement("img");

img.setAttribute(
  "src",
  "https://live.staticflickr.com/4241/35253705842_37411b34d1_h.jpg"
);

body.append(img);
