const Container = document.querySelector(".container");

for (let i = 0; i <= 255; i++) {
  const Div = document.createElement("div");
  Div.style.backgroundColor = "gray";
  Div.style.color = "white";
  Div.style.border = "1px solid black";

  Container.appendChild(Div);
  Div.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = get_random_hex_color();
  });

  function get_random_hex_color() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
