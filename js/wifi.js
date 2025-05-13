document.getElementById("wifi-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const ssid = document.getElementById("ssid").value;
  const password = document.getElementById("password").value;

  fetch("http://192.168.4.1/wifi", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ssid, password })
  }).then(res => {
    document.getElementById("status").innerText = "Conectado com sucesso!";
  }).catch(err => {
    document.getElementById("status").innerText = "Erro ao conectar.";
  });
});
