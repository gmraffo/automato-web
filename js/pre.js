document.getElementById("pre-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const fatigue = document.querySelector('input[name="fatigue"]:checked').value;
  const motivation = document.querySelector('input[name="motivation"]:checked').value;
  const productivity = document.querySelector('input[name="productivity"]:checked').value;

  localStorage.setItem("fatigue", fatigue);
  localStorage.setItem("motivation", motivation);
  localStorage.setItem("productivity", productivity);

  window.location.href = "pomodoro.html";
});
