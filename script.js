const btn = document.getElementById("btn");
const colorSpan = document.getElementById("color");
const colorNameSpan = document.getElementById("colorName");
const copyBtn = document.getElementById("copyBtn");

const colors = [
  { hex: "#FF5733", name: "Orange Red" },
  { hex: "#33FF57", name: "Lime Green" },
  { hex: "#3357FF", name: "Royal Blue" },
  { hex: "#F1C40F", name: "Sunflower" },
  { hex: "#9B59B6", name: "Amethyst" },
  { hex: "#1ABC9C", name: "Turquoise" },
  { hex: "#E74C3C", name: "Alizarin" },
  { hex: "#34495E", name: "Wet Asphalt" },
  { hex: "#2ECC71", name: "Emerald" },
  { hex: "#F39C12", name: "Orange" },
  { hex: "#ffffff", name: "White" },
  { hex: "#000000", name: "Black" },
  { hex: "#FF0000", name: "Red" },
  { hex: "#00FF00", name: "Green" },
  { hex: "#0000FF", name: "Blue" },
  { hex: "#FFFF00", name: "Yellow" },
  { hex: "#FFA500", name: "Orange" },
  { hex: "#800080", name: "Purple" },
  { hex: "#FFC0CB", name: "Pink" },
  { hex: "#808080", name: "Gray" },
  { hex: "#A52A2A", name: "Brown" },
  { hex: "#008080", name: "Teal" },
  { hex: "#ADD8E6", name: "Light Blue" },
  { hex: "#FA8072", name: "Salmon" },
  { hex: "#F5DEB3", name: "Wheat" },
  { hex: "#D2B48C", name: "Tan" },
  { hex: "#C0C0C0", name: "Silver" },
  { hex: "#4682B4", name: "Steel Blue" },
  { hex: "#D2691E", name: "Chocolate" },
  { hex: "#B0E0E6", name: "Powder Blue" },
  { hex: "#DAA520", name: "Goldenrod" },
  { hex: "#7FFF00", name: "Chartreuse" },
  { hex: "#DC143C", name: "Crimson" },
  { hex: "#6A5ACD", name: "Slate Blue" },
  { hex: "#8A2BE2", name: "Blue Violet" },
  { hex: "#00CED1", name: "Dark Turquoise" },
  { hex: "#FF1493", name: "Deep Pink" },
  { hex: "#B22222", name: "Firebrick" },
  { hex: "#5F9EA0", name: "Cadet Blue" },
  { hex: "#FFE4C4", name: "Bisque" },
  { hex: "#00FA9A", name: "Medium Spring Green" },
  { hex: "#8B008B", name: "Dark Magenta" },
  { hex: "#00BFFF", name: "Deep Sky Blue" },
  { hex: "#9932CC", name: "Dark Orchid" },
  { hex: "#BDB76B", name: "Dark Khaki" },
  { hex: "#F08080", name: "Light Coral" },
  { hex: "#FFDEAD", name: "Navajo White" },
  { hex: "#8FBC8F", name: "Dark Sea Green" },
  { hex: "#FFEFD5", name: "Papaya Whip" }
];

btn.addEventListener("click", function () {
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor.hex;
  colorSpan.textContent = randomColor.hex;
  colorNameSpan.textContent = randomColor.name;
});

copyBtn.addEventListener("click", function () {
  const color = colorSpan.textContent;
  navigator.clipboard.writeText(color).then(() => {
    copyBtn.textContent = "✅";
    setTimeout(() => {
      copyBtn.textContent = "📋";
    }, 1000);
  });
});

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
