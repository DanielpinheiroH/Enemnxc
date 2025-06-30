javascript

async function carregarQuestoes() {
  const response = await fetch("questoes.json");
  const data = await response.json();

  const container = document.getElementById("questoes");

  const email = localStorage.getItem("email") || "teste@enem.com"; // Simulação de login
  const materia = "Português"; // Depois, isso pode vir do próprio JSON
  const bloco = 1; // Simulado por enquanto

  data.questoes.forEach((q, index) => {
    const questaoDiv = document.createElement("div");
    questaoDiv.className = "questao";

    const enunciado = document.createElement("p");
    enunciado.textContent = `${index + 1}. ${q.enunciado}`;
    questaoDiv.appendChild(enunciado);

    for (const letra in q.alternativas) {
      const altDiv = document.createElement("div");
      altDiv.className = "alternativa";
      altDiv.textContent = `${letra}) ${q.alternativas[letra]}`;

      altDiv.addEventListener("click", function () {
        const acertou = letra === q.resposta;
        altDiv.classList.add(acertou ? "correta" : "errada");

        // Desativa outras alternativas
        const todas = questaoDiv.querySelectorAll(".alternativa");
        todas.forEach(alt => alt.style.pointerEvents = "none");

        // Envia para o histórico
        registrarResposta(email, materia, bloco, acertou);
      });

      questaoDiv.appendChild(altDiv);
    }

    container.appendChild(questaoDiv);
  });
}

// Função que envia para API
async function registrarResposta(email, materia, bloco, acertou) {
  try {
    await fetch("/api/historico", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        materia,
        bloco,
        acertou
      })
    });
  } catch (error) {
    console.error("Erro ao salvar histórico:", error);
  }
}

carregarQuestoes();

