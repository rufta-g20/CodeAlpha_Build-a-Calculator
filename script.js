const display = document.getElementById("display");

    function appendValue(val) {
      display.value += val;
    }

    function clearDisplay() {
      display.value = "";
    }

    function deleteLast() {
      display.value = display.value.toString().slice(0, -1);
    }
function addBracket() {
      let val = display.value;
      let lastChar = val.slice(-1);
      let open = (val.match(/\(/g) || []).length;
      let close = (val.match(/\)/g) || []).length;
if (
    val === "" ||
    ["+", "-", "*", "/","%"].includes(lastChar) ||
    lastChar === "("
  ) {
    display.value += "(";
  } 
  else if (
    open > close &&
    !["+", "-", "*", "/", "(", "%"].includes(lastChar)
  ) {
    display.value += ")";
  }
    }

    function calculate() {
      try {
        let expression = display.value.replace(/%/g, "/100");
        display.value = eval(expression);
      } catch (e) {
        display.value = "Error";
      }
    }