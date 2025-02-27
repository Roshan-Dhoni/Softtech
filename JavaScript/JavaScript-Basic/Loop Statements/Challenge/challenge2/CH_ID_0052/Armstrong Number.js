//Variables declaration
let firstNumberId = document.getElementById("firstNumber");
let secondNumberId = document.getElementById("secondNumber");
let dropdownId = document.getElementById("selectId");
let forOutputArea = document.getElementById("showFor");
let whileOutputArea = document.getElementById("showWhile");
let dowhileOutputArea = document.getElementById("showDowhile");

//Futction to list armstrong numbers within the input range
function armstrong() {
  let firstNumberValue = parseInt(firstNumberId.value);
  let secondNumberValue = parseInt(secondNumberId.value);
  let dropdownValue = dropdownId.value;
  let iterate = firstNumberValue,
    number,
    lastDigit;

  if (!firstNumberId.value || !secondNumberId.value) {
      alert("Please enter both the first and second numbers.");
      return;
  }
  //clear output values in loop area if the particular loop is not selected
  forOutputArea.value = "";
  whileOutputArea.value = "";
  dowhileOutputArea.value = "";

  switch (dropdownValue) {
    //logic implemented by for loop
    case "forLoop":
      for (; iterate <= secondNumberValue; iterate++) {
        let count = 0,
          sum = 0;
        for (number = iterate; number > 0; number = Math.floor(number / 10)) {
          ++count;
        }
        for (number = iterate; number > 0; number = Math.floor(number / 10)) {
          lastDigit = number % 10;
          sum += lastDigit ** count;
        }

        if (sum == iterate) {
          forOutputArea.value += `${sum}\n`;
        }
      }
      break;

    //logic implemented by while loop
    case "whileLoop":
      while (iterate <= secondNumberValue) {
        let count = 0,
          sum = 0;
        number = iterate;
        while (number > 0) {
          ++count;
          number = Math.floor(number / 10);
        }
        number = iterate;
        while (number > 0) {
          lastDigit = number % 10;
          sum += lastDigit ** count;
          number = Math.floor(number / 10);
        }

        if (sum == iterate) {
          whileOutputArea.value += `${sum}\n`;
        }
        iterate++;
      }
      break;

    //logic implemented by do while loop
    case "dowhileLoop":
      do {
        let count = 0,
          sum = 0;
        number = iterate;
        do {
          ++count;
          number = Math.floor(number / 10);
        } while (number > 0);
        number = iterate;
        do {
          lastDigit = number % 10;
          sum += lastDigit ** count;
          number = Math.floor(number / 10);
        } while (number > 0);

        if (sum == iterate) {
          dowhileOutputArea.value += `${sum}\n`;
        }
        iterate++;
      } while (iterate <= secondNumberValue);
  }
}

function reset() {
  firstNumberId.value = "";
  secondNumberId.value = "";
  dropdownId.value = "";
  forOutputArea.value = "";
  whileOutputArea.value = "";
  dowhileOutputArea.value = "";
}

//Modal
const toggleSuccessModal = () => successModal.classList.toggle("active");
const toggleErrorModal = () => errorModal.classList.toggle("active");
window.addEventListener("click", function (event) {
  if (event.target === successModal) successModal.classList.remove("active");
  if (event.target === errorModal) errorModal.classList.remove("active");
});

//copy to clipboard
const copyText = document.querySelector("#copy");
copyText.addEventListener("click", () => {
  navigator.clipboard.writeText(document.querySelector("#successCode").value);
  copyText.textContent = "copied";
  setTimeout(() => {
    copyText.innerHTML = `<span>&#128203; </span>copy`;
  }, 2000);
});