const welcomeScreen = document.getElementById("welcomeScreen");
const letterScreen = document.getElementById("letterScreen");
const openLetterBtn = document.getElementById("openLetterBtn");
const bgMusic = document.getElementById("bgMusic");

const resultModal = document.getElementById("resultModal");
const resultEmoji = document.getElementById("resultEmoji");
const resultTitle = document.getElementById("resultTitle");
const resultMessage = document.getElementById("resultMessage");

const delayPerLine = CONFIG.delayPerLine || 1100;

function applyConfig() {
  const welcomeTitle = document.querySelector(".intro-copy h1");
  const welcomeHint = document.querySelector(".intro-copy p");
  const envelopeLabel = document.querySelector(".for-you");
  const tapHint = document.querySelector(".tap-hint");
  const letterHeading = document.querySelector(".letter-paper h2");

  welcomeTitle.innerHTML = CONFIG.welcomeTitle;
  welcomeHint.textContent = CONFIG.welcomeHint;
  envelopeLabel.textContent = CONFIG.envelopeLabel;
  tapHint.textContent = CONFIG.tapHint;
  letterHeading.textContent = CONFIG.letterHeading;

  const letterText = document.getElementById("letterText");
  letterText.innerHTML = "";

  CONFIG.letterLines.forEach((text) => {
    const p = document.createElement("p");
    p.textContent = text;
    letterText.appendChild(p);
  });

  const question = document.createElement("p");
  question.className = "question-line";
  question.textContent = CONFIG.question;
  letterText.appendChild(question);

  document.getElementById("yesBtn").textContent = CONFIG.yesButton;
  document.getElementById("laterBtn").textContent = CONFIG.laterButton;

  const photoCards = document.querySelectorAll(".polaroid");
  photoCards.forEach((card, index) => {
    const data = CONFIG.photos[index];
    if (!data) {
      card.style.display = "none";
      return;
    }

    const img = card.querySelector("img");
    const caption = card.querySelector("figcaption");

    img.src = data.src;
    img.alt = "Ảnh " + (index + 1);
    caption.textContent = data.caption || "";
  });

  const source = bgMusic.querySelector("source");
  if (source && CONFIG.music) {
    source.src = CONFIG.music;
    bgMusic.load();
  }
}

function showLetterLines() {
  const lines = document.querySelectorAll("#letterText p");
  const buttons = document.querySelector(".choice-buttons");

  lines.forEach((line) => {
    line.classList.remove("show-line");
  });

  buttons.classList.remove("show-buttons");

  lines.forEach((line, index) => {
    setTimeout(() => {
      line.classList.add("show-line");
    }, index * delayPerLine);
  });

  const totalTime = lines.length * delayPerLine;

  setTimeout(() => {
    buttons.classList.add("show-buttons");
  }, totalTime);
}

function openLetter() {
  openLetterBtn.classList.add("opening");

  bgMusic.volume = 0.28;
  bgMusic.play().catch(() => {});

  setTimeout(() => {
    welcomeScreen.classList.remove("active");
    letterScreen.classList.add("active");

    showLetterLines();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, 760);
}

applyConfig();

openLetterBtn.addEventListener("click", openLetter);

document.getElementById("yesBtn").addEventListener("click", () => {
  resultEmoji.textContent = CONFIG.yesResult.emoji;
  resultTitle.textContent = CONFIG.yesResult.title;
  resultMessage.textContent = CONFIG.yesResult.message;

  resultModal.classList.add("show");
  resultModal.setAttribute("aria-hidden", "false");

  heartBurst();
});

document.getElementById("laterBtn").addEventListener("click", () => {
  resultEmoji.textContent = CONFIG.laterResult.emoji;
  resultTitle.textContent = CONFIG.laterResult.title;
  resultMessage.textContent = CONFIG.laterResult.message;

  resultModal.classList.add("show");
  resultModal.setAttribute("aria-hidden", "false");
});

document.getElementById("closeResult").addEventListener("click", () => {
  resultModal.classList.remove("show");
  resultModal.setAttribute("aria-hidden", "true");
});

function createPetal(symbol = "🌸", fast = false) {
  const container = document.getElementById("petals");
  const petal = document.createElement("span");

  petal.className = "petal";
  petal.textContent = symbol;

  petal.style.left = Math.random() * 100 + "vw";
  petal.style.fontSize = (12 + Math.random() * 18) + "px";
  petal.style.setProperty(
    "--drift",
    (Math.random() * 240 - 120) + "px"
  );

  petal.style.animationDuration =
    (fast ? 2.2 + Math.random() * 2 : 6 + Math.random() * 6) + "s";

  container.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 13000);
}

function heartBurst() {
  const symbols = ["💗", "💖", "💕", "🌸", "✨"];

  for (let i = 0; i < 34; i++) {
    setTimeout(() => {
      createPetal(
        symbols[Math.floor(Math.random() * symbols.length)],
        true
      );
    }, i * 55);
  }
}

setInterval(() => {
  createPetal(Math.random() > 0.78 ? "✨" : "🌸");
}, 650);
