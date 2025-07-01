import React from "react";
import "./style.css";

const Home = () => {
  return (
    <>
      <style>
        {`
          body {
            font-family: Arial, sans-serif;
            padding-top: 60px;
            max-width: 9000px;
            margin: auto;
            background-color: #111;
            color: #fff;
          }

          h1 {
            color: #bb86fc;
          }

          p {
            font-size: 16px;
          }

          .navbar {
            position: fixed;
            top: 0;
            width: 100%;
            background: #222;
            padding: 12px 0;
            display: flex;
            justify-content: space-around;
            border-bottom: 1px solid #444;
            font-size: 14px;
            z-index: 1000;
          }

          .navbar a {
            text-decoration: none;
            color: #bbb;
            padding: 5px 10px;
          }

          .navbar a.active,
          .navbar a:hover {
            color: #bb86fc;
            font-weight: bold;
          }

          main {
            text-align: center;
            margin-top: 50px;
          }
        `}
      </style>

      <div className="navbar">
        <a href="home.html" className="active">🏠 Início</a>
        <a href="questoes.html">❓ Questões</a>
        <a href="simulados.html">📝 Simulados</a>
        <a href="redacoes.html">✍️ Redações</a>
        <a href="dashboard.html">📊 Dashboard</a>
        <a href="perfil.html">👤 Perfil</a>
      </div>

      <main>
        <h1>🎓 Bem-vindo ao ENEMNXC</h1>
        <p>Use o menu acima para navegar pelas funcionalidades da plataforma.</p>
      </main>
    </>
  );
};

export default Home;
