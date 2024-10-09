let allInputs = document.querySelectorAll("input").forEach((e) => {
  return e;
});
let cardName = document.querySelector(".card-name");
let cardNumber = document.querySelector(".cardNumber");
let month = document.querySelector(".month");
let year = document.querySelector(".year");
let cvc = document.querySelector(".cvcs");
let btn = document.querySelector(".formbtn");

let theName = document.querySelector(".card-1 .name");
let theNumber = document.querySelector(".card-1 .num");
let months = document.querySelector(".months");
let years = document.querySelector(".years");
let pass = document.querySelector(".pass");

let media = window.matchMedia("(max-width:769px)");

btn.onclick = function () {
  if (cardName.value == "") {
    cardName.style.border = "1px solid hsl(0, 100%, 66%)";
    document.querySelector(".field.one").style = "display:block !important";
  } else if (cardName.value != "") {
    theName.innerHTML = cardName.value;
    cardName.style.border = "1px solid hsl(279, 6%, 55%)";
    document.querySelector(".one").style = "display:none !important";
  }
  if (cardNumber.value.length < 16) {
    cardNumber.style.border = "1px solid hsl(0, 100%, 66%)";
    document.querySelector(".field.two").style = "display:block !important";
  } else {
    let formatNum = cardNumber.value;
    let regex = /\d{4}/g;
    theNumber.innerHTML = formatNum.match(regex).join(" ");
    cardNumber.style.border = "1px solid hsl(279, 6%, 55%)";
    document.querySelector(".field.two").style = "display:none !important";
  }
  if (month.value > 12 || month.value == "") {
    month.style.border = "1px solid hsl(0, 100%, 66%)";
    document.querySelector(".field.three").style = "display:block !important";
  } else {
    month.style.border = "1px solid hsl(279, 6%, 55%)";
    months.innerHTML = month.value;
  }
  if (year.value == "" || year.value == 0) {
    year.style.border = "1px solid hsl(0, 100%, 66%)";
    document.querySelector(".field.three").style = "display:block !important";
  } else {
    year.style.border = "1px solid hsl(279, 6%, 55%)";
    years.innerHTML = year.value;
  }
  if (month.value <= 12 && month.value != "" && year.value != "") {
    document.querySelector(".field.three").style = "display:none !important";
  }
  if (cvc.value == "" || cvc.value.length < 3) {
    cvc.style.border = "1px solid hsl(0, 100%, 66%)";
    document.querySelector(".cvc-to-short").style = "display:block !important";
  } else if (cvc.value.length >= 3) {
    pass.innerHTML = cvc.value;
    cvc.style.border = "1px solid hsl(279, 6%, 55%)";
    document.querySelector(".cvc-to-short").style = "display:none !important";
  }
  if (
    cardName.value != "" &&
    cvc.value.length >= 3 &&
    cardNumber.value.length == 16 &&
    month.value != "" &&
    month.value <= 12 &&
    month.value != 0 &&
    year.value != "" &&
    year.value != 0
  ) {
    document.querySelector(".content").style.setProperty("--width", "100%");
    setTimeout(() => {
      document.querySelector(".content").style.setProperty("--width", "33.5%");
      document.querySelectorAll("input").forEach((e) => {
        e.value = "";
      });
      document.querySelector(".done").style = "display:flex;";
      document.querySelector(".form").style = "display:none;";
    }, 1000);
    document.querySelector(".done-btn").onclick = function () {
      document.querySelector(".content").style.setProperty("--width", "100%");
      setTimeout(() => {
        document
          .querySelector(".content")
          .style.setProperty("--width", "33.5%");
        document.querySelectorAll("input").forEach((e) => {
          e.value = "";
        });
        theName.textContent = "JANE APPLESEED";
        theNumber.textContent = "0000 0000 0000 0000";
        months.textContent = "00";
        years.textContent = "00";
        pass.textContent = "000";
        document.querySelector(".done").style = "display:none;";
        document.querySelector(".form").style = "display:block;";
      }, 1000);
    };
  }
};
