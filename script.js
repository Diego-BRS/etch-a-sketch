const container = document.querySelector("#container");
const button = document.querySelector("#changeSize");

function createGrid(squaresPerSide) {
  container.innerHTML = ""; // apaga o desenho anterior

  const totalSquares = squaresPerSide * squaresPerSide;
  const squareSize = 960 / squaresPerSide;

  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "black";
    });

    container.appendChild(square);
  }
}

button.addEventListener("click", () => {
  let userInput = prompt("How many squares per side? (max 100)");
  userInput = Number(userInput);

  if (userInput <= 0 || userInput > 100 || isNaN(userInput)) {
    alert("Please enter a number between 1 and 100");
    return;
  }

  createGrid(userInput);
});
