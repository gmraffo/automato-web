let timer;
let totalSeconds = 1500;

function startTimer() {
  timer = setInterval(() => {
    totalSeconds--;
    const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
    const seconds = (totalSeconds % 60).toString().padStart(2, '0');
    document.getElementById("timer").innerText = `${minutes}:${seconds}`;

    if (totalSeconds <= 0) {
      clearInterval(timer);
      localStorage.setItem("tempoPomodoro", "25:00");
      localStorage.setItem("interrupcoes", "0"); // ajuste conforme lógica
      window.location.href = "pos-questionario.html";
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  totalSeconds = 1500;
  document.getElementById("timer").innerText = "25:00";
}
