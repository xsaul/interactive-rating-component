const submitBtn = document.querySelector(".submit");
const btns = document.querySelectorAll(".rates");
const span = document.querySelector(".rating");
const containerOne = document.querySelector(".container-one");
const containerTwo = document.querySelector(".container-two");

Array.from(btns).forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let text = e.target.textContent;
    submitBtn.addEventListener("click", (e) => {
      containerOne.classList.add("hide");
      containerTwo.classList.remove("hide");
      span.textContent = text;
    });
  });
});
