function playAudio(char) {
  switch (char) {
    case "w": {
      const tom1Audio = new Audio("./sounds/tom-1.mp3");
      tom1Audio.play();
      break;
    }
    case "a": {
      const tom2Audio = new Audio("./sounds/tom-2.mp3");
      tom2Audio.play();
      break;
    }
    case "s": {
      const tom3Audio = new Audio("./sounds/tom-3.mp3");
      tom3Audio.play();
      break;
    }
    case "d": {
      const tom4Audio = new Audio("./sounds/tom-4.mp3");
      tom4Audio.play();
      break;
    }
    case "j": {
      const snareAudio = new Audio("./sounds/snare.mp3");
      snareAudio.play();
      break;
    }
    case "k": {
      const crashAudio = new Audio("./sounds/crash.mp3");
      crashAudio.play();
      break;
    }
    case "l": {
      const kickAudio = new Audio("./sounds/kick-bass.mp3");
      kickAudio.play();
      break;
    }
    default:
      console.log(char);
  }
}

async function buttonAnimation(key) {
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  document.querySelector(`.${key}`).classList.add("pressed");
  await delay(100);
  document.querySelector(`.${key}`).classList.remove("pressed");
}

// Detect button click
for (let drum of document.querySelectorAll(".drum")) {
  drum.addEventListener("click", function () {
    playAudio(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}

// Detect keyboard press
document.addEventListener("keydown", function (event) {
  playAudio(event.key);
  buttonAnimation(event.key);
});
