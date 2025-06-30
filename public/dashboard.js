javascript
CopiarEditar
async function carregarDashboard() {
  const response = await fetch("historico.json");
  const historico = await response.json();

  const hoje = new Date().toISOString().slice(0, 10);
  const data = new Date();
  const semanaInicio = new Date(data.setDate(data.getDate() - 6)).toISOString().slice(0, 10);
  const mesAtual = hoje.slice(0, 7);

  let total = 0, dia = 0, semana = 0, mes = 0;
  const porMateria = {};
  const porBloco = {};

  historico.forEach(entry => {
    total++;

    if (entry.data === hoje) dia++;
    if (entry.data >= semanaInicio) semana++;
    if (entry.data.startsWith(mesAtual)) mes++;

    porMateria[entry.materia] = (porMateria[entry.materia] || 0) + 1;
    porBloco[entry.bloco] = (porBloco[entry.bloco] || 0) + 1;
  });

  document.getElementById("hoje").textContent = dia;
  document.getElementById("semana").textContent = semana;
  document.getElementById("mes").textContent = mes;
  document.getElementById("total").textContent = total;

  const ulMaterias = document.getElementById("materias");
  for (const m in porMateria) {
    const li = document.createElement("li");
    li.textContent = `${m}: ${porMateria[m]} questões`;
    ulMaterias.appendChild(li);
  }

  const ulBlocos = document.getElementById("blocos");
  for (const b in porBloco) {
    const li = document.createElement("li");
    li.textContent = `Bloco ${b}: ${porBloco[b]} questões`;
    ulBlocos.appendChild(li);
  }
}

carregarDashboard();
