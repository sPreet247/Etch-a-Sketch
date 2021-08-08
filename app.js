const Container = document.querySelector(".container");
const Button = document.querySelector("button");
let gridNum = prompt("Please enter a positive number");

for (let i = 0; i <= gridNum; i++) {
  for (let j = 0; j <= gridNum; j++) {
    const Div = document.createElement("div");
    Div.style.backgroundColor = "gray";
    Div.style.color = "white";
    Div.style.border = "1px solid black";

    Container.appendChild(Div);
    Div.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = get_random_hex_color();
    });
    get_random_hex_color();
    Button.addEventListener("click", (e) => {
      reset();
    });
  }
}

function reset() {
  window.location.reload();
}

function get_random_hex_color() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
