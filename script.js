var typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Coder", "Programmer"],
  typeSpeed: 100,
  backspeed: 100000,
  backDelay: 1000,
  loop: true,
});
var typed = new Typed(".dev-text", {
  strings: [" Developer", " Coder", " Programmer"],
  typeSpeed: 100,
  backspeed: 10000,
  backDelay: 1000,
  loop: true,
});
const clickit = document.getElementById("clickit");
clickit.addEventListener("click", function handleClick(event) {
  const inputs = document.querySelectorAll("clear1", "clear2", "clear3");
  inputs.forEach((input) => {
    input.value = "";
  });
});
