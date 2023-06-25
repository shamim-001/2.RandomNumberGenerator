const generate = document.querySelector(".generate");
const count = document.querySelector(".count");

generate.addEventListener("click", () => {
  const randomNumber = generateRandomNumber();
  count.innerHTML = randomNumber;
});

function generateRandomNumber() {
  const num = Math.floor(Math.random() * 10000);
  return num;
}
