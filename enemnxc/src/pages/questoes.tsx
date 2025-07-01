import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const blocos: Record<string, string[]> = {
  "Linguagens, Códigos e suas Tecnologias": [
    "Língua Portuguesa",
    "Literatura",
    "Inglês",
    "Espanhol",
    "Artes",
    "Educação Física",
  ],
  "Ciências Humanas e suas Tecnologias": [
    "História",
    "Geografia",
    "Filosofia",
    "Sociologia",
  ],
  "Ciências da Natureza e suas Tecnologias": ["Biologia", "Química", "Física"],
  "Matemática e suas Tecnologias": ["Matemática"],
};

export default function Questoes() {
  const [blocoSelecionado, setBlocoSelecionado] = useState<string | null>(null);
  const [materiasSelecionadas, setMateriasSelecionadas] = useState<string[]>([]);

  const toggleMateria = (materia: string) => {
    setMateriasSelecionadas((prev) =>
      prev.includes(materia)
        ? prev.filter((m) => m !== materia)
        : [...prev, materia]
    );
  };

  return (
    <>
      <Head>
        <title>ENEMNXC - Questões</title>
      </Head>

      <div className="navbar">
        <Link href="/" legacyBehavior><a>🏠 Início</a></Link>
        <Link href="/questoes" legacyBehavior><a className="active">❓ Questões</a></Link>
        <Link href="/simulados" legacyBehavior><a>📝 Simulados</a></Link>
        <Link href="/redacoes" legacyBehavior><a>✍️ Redações</a></Link>
        <Link href="/dashboard" legacyBehavior><a>📊 Dashboard</a></Link>
        <Link href="/perfil" legacyBehavior><a>👤 Perfil</a></Link>
      </div>

      <div className="container">
        <aside className="sidebar">
          <h3>🧭 Blocos</h3>
          <ul>
            {Object.keys(blocos).map((bloco) => (
              <li
                key={bloco}
                onClick={() =>
                  setBlocoSelecionado(blocoSelecionado === bloco ? null : bloco)
                }
                className={blocoSelecionado === bloco ? "selected" : ""}
              >
                {bloco}
              </li>
            ))}
          </ul>

          {blocoSelecionado && (
            <>
              <h4>📚 Matérias</h4>
              <ul>
                {blocos[blocoSelecionado].map((materia) => (
                  <li key={materia}>
                    <label>
                      <input
                        type="checkbox"
                        checked={materiasSelecionadas.includes(materia)}
                        onChange={() => toggleMateria(materia)}
                      />{" "}
                      {materia}
                    </label>
                  </li>
                ))}
              </ul>
            </>
          )}
        </aside>

        <main className="conteudo">
          <div className="caixa">
            <h1>❓ Questões ENEMNXC</h1>
            {materiasSelecionadas.length > 0 ? (
              <p>Filtrando por: <strong>{materiasSelecionadas.join(", ")}</strong></p>
            ) : (
              <p>Selecione um bloco e matérias para começar a praticar.</p>
            )}
          </div>
        </main>
      </div>

      <style global jsx>{`
        html, body {
          margin: 0;
          padding: 0;
          background-color: #000;
          color: #fff;
          font-family: Arial, sans-serif;
          height: 100%;
        }
      `}</style>

      <style jsx>{`
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

        .container {
          display: flex;
          margin-top: 60px;
          height: calc(100vh - 60px);
        }

        .sidebar {
          width: 300px;
          background-color: #111;
          padding: 20px;
          border-right: 1px solid #333;
          overflow-y: auto;
        }

        .sidebar h3,
        .sidebar h4 {
          color: #bb86fc;
          margin-top: 0;
        }

        .sidebar ul {
          list-style: none;
          padding: 0;
        }

        .sidebar li {
          padding: 8px;
          margin: 6px 0;
          background-color: #222;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.2s;
        }

        .sidebar li:hover {
          background-color: #333;
        }

        .sidebar li.selected {
          background-color: #bb86fc;
          color: #000;
          font-weight: bold;
        }

        .conteudo {
          flex: 1;
          padding: 40px;
          display: flex;
          justify-content: center;
          align-items: flex-start;
        }

        .caixa {
          background-color: #fff;
          color: #000;
          padding: 40px;
          border-radius: 16px;
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
          max-width: 700px;
          text-align: center;
        }

        .caixa h1 {
          color: #4a148c;
          margin-bottom: 20px;
        }

        .caixa p {
          font-size: 16px;
        }

        label {
          font-size: 14px;
        }

        input[type="checkbox"] {
          margin-right: 8px;
        }
      `}</style>
    </>
  );
}
