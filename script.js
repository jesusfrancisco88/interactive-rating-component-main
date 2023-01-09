"use scrict";
const btns = document.querySelectorAll(".btn");
const submit = document.querySelector(".sumbit");
const rating = document.getElementById("rating");

//* Interfaces (2)
const rate1 = document.querySelector(".component-1");
const thanks = document.querySelector(".component-2");
// Fin de interfaces Seleccionadas.

submit.addEventListener("click", () => {
  rate1.style.display = "none";
  thanks.classList.remove("hidden");
});

//* ForEach
btns.forEach(function (rate) {
  rate.addEventListener("click", function () {
    rating.innerHTML = rate.innerHTML;
  });
});
