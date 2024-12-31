// Function that display value
function dis(val) {
  document.getElementById("result").value += val;
}

function myFunction(event) {
  if (
    event.key == "E" ||
    event.key == "L1" ||
    event.key == "L2" ||
    event.key == "TR" ||
    event.key == "FN" ||
    event.key == "5" ||
    event.key == "6" ||
    event.key == "7" ||
    event.key == "8" ||
    event.key == "9" ||
    event.key == "+" ||
    event.key == "-" ||
    event.key == "*" ||
    event.key == "/"
  )
    document.getElementById("result").value += event.key;
}

var cal = document.getElementById("calcu");
cal.onkeyup = function (event) {
  if (event.keyCode === 13) {
    console.log("Enter");
    let x = document.getElementById("result").value;
    console.log(x);
    solve();
  }
};

// Function that evaluates the digit and return result
function solve() {
  let x = document.getElementById("result").value;
  let y = math.evaluate(x);
  document.getElementById("result").value = y;
}

// Function that clear the display
function clr() {
  document.getElementById("result").value = "";
}
