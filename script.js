let buttons = document.querySelectorAll("button");
let display = document.querySelector(".display");

// Action On Click
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerHTML) {
      case "C":
        clear();
        break;
      case "DEL":
        deleteOneValue();
        break;
      case "=":
        evaluate();
        break;
      default:
        showInDisplay(e.target.innerHTML);
    }
  });
});

// Create Clear Function
function clear() {
  display.innerHTML = "";
}

// Create Delete One Value Function
function deleteOneValue() {
  let currentValue = display.innerHTML;
  display.innerHTML = currentValue.substring(0, currentValue.length - 1);
}

// Create Evaluation Function
function evaluate() {
  try {
    let calculation = math.evaluate(display.innerHTML);
    display.innerHTML = calculation;
  } catch (error) {
    display.innerHTML = "Invalid Operation";
    console.error(error);
  }
}

// Create Show In Display Function
function showInDisplay(value) {
  display.innerHTML += value;
}