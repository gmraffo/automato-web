document.getElementById("pos-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const focoFinal = document.getElementById("focoFinal").value;
  const comentarios = document.getElementById("comentarios").value;

  const tarefas = [];
  for (let i = 1; i <= 8; i++) {
    const valor = document.getElementById(`task${i}`).value;
    tarefas.push(valor);
  }

  const dados = {
    nome: localStorage.getItem("nome"),
    idade: localStorage.getItem("idade"),
    focoInicial: localStorage.getItem("foco"),
    tempoPomodoro: localStorage.getItem("tempoPomodoro"),
    interrupcoes: localStorage.getItem("interrupcoes"),
    focoFinal,
    comentarios,
    tarefas
  };

  fetch("https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec", {
    method: "POST",
    body: JSON.stringify(dados),
    headers: { "Content-Type": "application/json" },
  }).then(res => res.json())
    .then(data => {
      alert("Dados enviados com sucesso!");
    })
    .catch(err => {
      alert("Erro ao enviar os dados.");
    });
});
