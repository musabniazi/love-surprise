const correctPassword = "lublu"; 

function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  if (input === correctPassword) {
    document.getElementById("passwordBox").style.display = "none";
    document.getElementById("puzzleBox").classList.remove("hidden");
  } else {
    document.getElementById("error").innerText = "Wrong password";
  }
}

function checkPuzzle() {
  const answer = document.getElementById("puzzleInput").value;
  const error = document.getElementById("puzzleError");

  if (answer == 5) {
    error.style.color = "#a8ffb0";
    error.innerText = "Well done 🤍";

    setTimeout(() => {
      document.getElementById("puzzleBox").style.display = "none";
      document.getElementById("mainContent").classList.remove("hidden");

      const music = document.getElementById("bgMusic");
      music.volume = 0.2;
      music.play().catch(() => {
       
        document.body.addEventListener(
          "click",
          () => music.play(),
          { once: true }
        );
      });

      startCounter();
    }, 800);
  } else {
    error.style.color = "#ff9e9e";
    error.innerText = "Think again 🙂";
  }
}

function startCounter() {
  const startDate = new Date("2024-10-08"); // 450 days ago
  setInterval(() => {
    const now = new Date();
    let diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff %= (1000 * 60 * 60 * 24);

    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff %= (1000 * 60 * 60);

    const minutes = Math.floor(diff / (1000 * 60));

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
  }, 1000);
}
