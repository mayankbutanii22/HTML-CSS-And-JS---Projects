const input = document.getElementById("input");
const history = document.getElementById("history");
const toggleMode = document.getElementById("toggleMode");

// Load history from localStorage
window.onload = () => {
  const saved = localStorage.getItem("calc-history");
  if (saved) {
    history.innerText = saved;
  }

  // Restore dark mode if previously enabled
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
};

// Append normal characters
function appendValue(val) {
  input.value += val;
}

// Append function (with opening bracket)
function appendFunction(func) {
  input.value += func;
}

// Clear input and history
function clearInput() {
  input.value = "";
  history.innerText = "";
  localStorage.removeItem("calc-history");
}

// Remove last character
function backspace() {
  input.value = input.value.slice(0, -1);
}

// Evaluate expression
function calculate() {
  try {
    let expr = input.value;
    let result = eval(expr);
    history.innerText = expr + " =";
    input.value = result;
    localStorage.setItem("calc-history", expr + " = " + result);
  } catch {
    input.value = "Error";
  }
}

// Dark mode toggle
toggleMode.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const theme = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", theme);
});
function calculate() {
  try {
    let expr = input.value;

    // Replace functions with JavaScript equivalents
    expr = expr.replace(/π/g, "Math.PI");
    expr = expr.replace(/√\(/g, "Math.sqrt(");
    expr = expr.replace(/sin\(/g, "Math.sin(toRadians(");
    expr = expr.replace(/cos\(/g, "Math.cos(toRadians(");
    expr = expr.replace(/tan\(/g, "Math.tan(toRadians(");
    expr = expr.replace(/log\(/g, "Math.log10(");
    expr = expr.replace(/ln\(/g, "Math.log(");
    expr = expr.replace(/(\d+(\.\d+)?)%/g, "($1/100)");

    // ✅ Handle expressions like A + B% -> A + (A * B / 100)
    expr = expr.replace(/(\d+(\.\d+)?)(\s*[\+\-])\s*(\d+(\.\d+)?)%/g, (match, a, _, operator, b) => {
      return `${a}${operator}(${a}*${b}/100)`;
    });



    let result = eval(expr);
    history.innerText = input.value + " =";
    input.value = result;
    localStorage.setItem("calc-history", input.value + " = " + result);
  } catch {
    input.value = "Error";
  }
}

// Helper: convert degrees to radians
function toRadians(degrees) {
  return degrees * Math.PI / 180;
}
