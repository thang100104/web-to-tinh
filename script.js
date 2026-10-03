const welcomeScreen = document.getElementById("welcomeScreen");
const letterScreen = document.getElementById("letterScreen");
const openLetterBtn = document.getElementById("openLetterBtn");
const bgMusic = document.getElementById("bgMusic");

const resultModal = document.getElementById("resultModal");
const resultEmoji = document.getElementById("resultEmoji");
const resultTitle = document.getElementById("resultTitle");
const resultMessage = document.getElementById("resultMessage");

const delayPerLine = 1100;

function showLetterLines() {
  const lines = document.querySelectorAll("#letterText p");
  const buttons = document.querySelector(".choice-buttons");

  lines.forEach(line => {
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

openLetterBtn.addEventListener("click", openLetter);

document.getElementById("yesBtn").addEventListener("click", () => {
  resultEmoji.textContent = "💖";
  resultTitle.textContent = "Anh vui lắm!";
  resultMessage.textContent =
    "Cảm ơn em vì đã cho anh thêm một cơ hội. Anh sẽ trân trọng em và yêu em hơn bao giờ hết.";

  resultModal.classList.add("show");
  resultModal.setAttribute("aria-hidden", "false");

  heartBurst();
});

document.getElementById("laterBtn").addEventListener("click", () => {
  resultEmoji.textContent = "🌷";
  resultTitle.textContent = "Không sao đâu";
  resultMessage.textContent =
    "Em cứ suy nghĩ theo cách em thấy thoải mái nhé. Anh tôn trọng cảm xúc và câu trả lời của em. Anh vẫn sẽ luôn đợi em ở đây.";

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