const Container = document.querySelector(".container");

for (let i = 0; i <= 255; i++) {
  const Div = document.createElement("div");
  Div.style.backgroundColor = "gray";
  Div.style.color = "white";
  Div.style.border = "1px solid black";

  Container.appendChild(Div);
}
