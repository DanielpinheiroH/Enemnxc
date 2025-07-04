import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { GetServerSideProps } from 'next';    
import nookies from 'nookies';    
import { GetServerSideProps } from 'next';
import nookies from 'nookies';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { token } = nookies.get(ctx);
  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return { props: {} };
};
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

// 👇 COLOQUE ESSA PARTE FORA DO COMPONENTE
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx);

  if (!cookies.token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return { props: {} };
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

      {/* estilo omitido por espaço, pode manter igual */}
    </>
  );
}
