const api = "http://localhost:8000"; // ajuste conforme o endereço do seu backend

// Função de login
async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const res = await fetch(`${api}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  const msg = document.getElementById("msg");

  if (res.ok) {
    const data = await res.json();
    localStorage.setItem("token", data.access_token);
    localStorage.setItem("email", email); // útil para identificar o aluno nas questões
    window.location.href = "home.html";
  } else {
    msg.textContent = "Login falhou. Verifique seus dados.";
  }
}

// Função de cadastro
async function register() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("newEmail").value;
  const password = document.getElementById("newPassword").value;

  const res = await fetch(`${api}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password })
  });

  const msg = document.getElementById("msg");

  if (res.ok) {
    msg.textContent = "Cadastro realizado com sucesso! Faça login.";
  } else {
    const errorText = await res.text();
    msg.textContent = `Erro no cadastro: ${errorText}`;
  }
}