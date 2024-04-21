const onOffSwitcer = document.querySelectorAll(".power");
const buttons = document.querySelectorAll(".btn");
const audio = document.getElementById("drum-sound");
const bankSwitcher = document.querySelector("#bank-switcher");
const soundName = document.querySelector("#sound-name");
const buttonsContainer = document.querySelector(".buttons-wrapper");
const volumeControl = document.querySelector(".volume");

onOffSwitcer.forEach((switcher) => {
  switcher.addEventListener("click", () => {
    switcher.classList.toggle("power-on");
    if (onOffSwitcer[0].classList.contains("power-on")) {
      buttonsContainer.addEventListener("click", handleClick);
      window.addEventListener("keydown", handleKeyDown);
    } else {
      buttonsContainer.removeEventListener("click", handleClick);
      window.removeEventListener("keydown", handleKeyDown);
    }
  });
});
bankSwitcher.addEventListener("click", () => {
  bankSwitcher.classList.toggle("bank-2");
});

function handleClick(event) {
  if (!event.target.classList.contains("btn")) return;

  const clickedButton = event.target;
  const keyCode = clickedButton.dataset.key;
  const sound = bankSwitcher.classList.contains("bank-2")
    ? bankTwo.find((item) => item.keyCode === parseInt(keyCode))
    : bankOne.find((item) => item.keyCode === parseInt(keyCode));

  if (sound) {
    audio.src = sound.url;
    audio.play();
    soundName.innerText = sound.id;
  }
}

function handleKeyDown(e) {
  const sound = bankSwitcher.classList.contains("bank-2")
    ? bankTwo.find((item) => item.keyCode === parseInt(e.keyCode))
    : bankOne.find((item) => item.keyCode === parseInt(e.keyCode));
  if (sound) {
    audio.src = sound.url;
    audio.play();
    soundName.innerText = sound.id;
  }
}
volumeControl.addEventListener("change", function () {
  const volume = parseFloat(this.value);
  audio.volume = volume;
  document.querySelector(".volumeValue").innerHTML = volume * 10;
});
