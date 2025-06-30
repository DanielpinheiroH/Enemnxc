

async function carregarQuestoes() {
  const res = await fetch("/api/questoes");
  const data = await res.json();

  const container = document.getElementById("questoes");

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

      altDiv.addEventListener("click", () => {
        const todas = questaoDiv.querySelectorAll(".alternativa");
        todas.forEach(alt => alt.style.pointerEvents = "none");

        if (letra === q.resposta) {
          altDiv.classList.add("correta");
        } else {
          altDiv.classList.add("errada");
        }

        // Salva resposta no histórico
        fetch("/api/responder", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: localStorage.getItem("email") || "daniel@nxc.com",
            materia: q.materia || "Português",
            bloco: q.bloco || 1,
            correta: letra === q.resposta
          })
        });
      });

      questaoDiv.appendChild(altDiv);
    }

    container.appendChild(questaoDiv);
  });
}

carregarQuestoes();
