import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { GetServerSideProps } from "next";
import nookies from "nookies";


interface Alternativa {
  letra: string;
  texto: string;
}

interface Questao {
  id: number;
  enunciado: string;
  gabarito: string;
  assunto: string;
  alternativas: Alternativa[];
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { token } = nookies.get(ctx);
  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return { props: {} };
};
export default function SimuladoPage() {
  const router = useRouter();
  const { id } = router.query;

  const [questoes, setQuestoes] = useState<Questao[]>([]);
  const [respostas, setRespostas] = useState<Record<number, string>>({});
  const [carregando, setCarregando] = useState(true);

useEffect(() => {
  if (id) {
    setCarregando(true);
    fetch(`http://localhost:8000/simulados/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("QUESTÕES:", data); // ← só para garantir que é um array
        setQuestoes(data);
      })
      .catch((err) => console.error(err))
      .finally(() => setCarregando(false));
  }
}, [id]);

  const marcarResposta = (idQuestao: number, letra: string) => {
    setRespostas((prev) => ({ ...prev, [idQuestao]: letra }));
  };

  const finalizarSimulado = () => {
    const total = questoes.length;
    let acertos = 0;

    questoes.forEach((q) => {
      if (respostas[q.id]?.toUpperCase() === q.gabarito.toUpperCase()) {
        acertos++;
      }
    });

    const resultado = {
      idSimulado: id,
      total,
      acertos,
      erros: total - acertos,
      percentual: ((acertos / total) * 100).toFixed(1),
    };

    localStorage.setItem("resultadoSimulado", JSON.stringify(resultado));
    router.push(`/simulados/resultado?id=${id}`);
  };

  const todasRespondidas = questoes.length > 0 && questoes.every((q) => respostas[q.id]);

 
  return (
    <>
      <Head>
        <title>ENEMNXC - Simulado {id}</title>
      </Head>

      <div className="navbar">
        <Link href="/" legacyBehavior><a>🏠 Início</a></Link>
        <Link href="/questoes" legacyBehavior><a>❓ Questões</a></Link>
        <Link href="/simulados" legacyBehavior><a className="active">📝 Simulados</a></Link>
        <Link href="/redacoes" legacyBehavior><a>✍️ Redações</a></Link>
        <Link href="/dashboard" legacyBehavior><a>📊 Dashboard</a></Link>
        <Link href="/perfil" legacyBehavior><a>👤 Perfil</a></Link>
      </div>

      <main className="container">
        <div className="caixa">
          <h1>📘 Simulado {id}</h1>

          {carregando ? (
            <p>Carregando questões...</p>
          ) : (
            <>
              {questoes.map((q, index) => (
                <div key={q.id} className="questao">
                  <h2>Questão {index + 1}</h2>
                  <p>{q.enunciado}</p>
                  <ul>
                    {q.alternativas.map((alt) => (
                      <li key={alt.letra}>
                        <label>
                          <input
                            type="radio"
                            name={`q${q.id}`}
                            value={alt.letra}
                            checked={respostas[q.id] === alt.letra}
                            onChange={() => marcarResposta(q.id, alt.letra)}
                          />
                          <strong>{alt.letra})</strong> {alt.texto}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <button
  className="botao"
  onClick={finalizarSimulado}
  disabled={!todasRespondidas}
>
  Finalizar Simulado
</button>
            </>
          )}
        </div>
      </main>

      <style jsx>{`
        body {
          background-color: #000;
          color: #fff;
          font-family: Arial, sans-serif;
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

        .container {
          padding-top: 80px;
          max-width: 1000px;
          margin: auto;
          display: flex;
          justify-content: center;
        }

        .caixa {
          background-color: #fff;
          color: #000;
          padding: 40px;
          border-radius: 16px;
          border: 3px solid #bb86fc;
          width: 100%;
        }

        .caixa h1 {
          text-align: center;
          font-size: 32px;
          color: #4a148c;
          margin-bottom: 20px;
        }

        .questao {
          margin-bottom: 30px;
          padding: 20px;
          background: #f9f9f9;
          border-radius: 12px;
          border: 1px solid #ccc;
        }

        .questao h2 {
          margin-bottom: 10px;
          color: #4a148c;
        }

        ul {
          list-style: none;
          padding-left: 0;
        }

        li {
          margin-bottom: 8px;
        }

        input[type="radio"] {
          margin-right: 8px;
        }

        .botao {
          margin-top: 30px;
          background-color: #4a148c;
          color: white;
          padding: 12px 24px;
          font-size: 16px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          display: block;
          margin-left: auto;
          margin-right: auto;
        }

        .botao:hover {
          background-color: #7b1fa2;
        }
  .botao:disabled {
    background-color: #ccc;
    color: #666;
    cursor: not-allowed;
}

      `}</style>
    </>
  );
}
