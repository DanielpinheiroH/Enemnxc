import { useEffect, useState } from "react";
import Head from "next/head";

interface Explicacao {
  id: number;
  resposta_usuario: string;
  explicacao: string;
}

export default function Explicacoes() {
  const [explicacoes, setExplicacoes] = useState<Explicacao[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const respostas = JSON.parse(localStorage.getItem("explicacoesSimulado") || "[]");

    const fetchExplicacoes = async () => {
      const resultados: Explicacao[] = [];

      for (const resposta of respostas) {
        const resp = await fetch("http://127.0.0.1:8000/explicar", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id_questao: resposta.id,
            resposta_usuario: resposta.resposta_usuario
          })
        });

        const data = await resp.json();
        resultados.push({
          id: resposta.id,
          resposta_usuario: resposta.resposta_usuario,
          explicacao: data.explicacao
        });
      }

      setExplicacoes(resultados);
      setCarregando(false);
    };

    fetchExplicacoes();
  }, []);

  return (
    <>
      <Head>
        <title>Explicações do Simulado</title>
      </Head>

      <div className="pagina">
        <h1>📖 Explicações do Simulado</h1>
        {carregando ? (
          <p>Carregando explicações...</p>
        ) : (
          explicacoes.map((e, i) => (
            <div key={i} className="explicacao-card">
              <h3>Questão {e.id} - Sua resposta: {e.resposta_usuario.toUpperCase()}</h3>
              <p>{e.explicacao}</p>
            </div>
          ))
        )}
      </div>

      <style jsx>{`
        .pagina {
          background: #000;
          color: white;
          padding: 60px 30px;
          min-height: 100vh;
          font-family: Arial, sans-serif;
        }

        h1 {
          color: #bb86fc;
          margin-bottom: 30px;
          text-align: center;
        }

        .explicacao-card {
          background: #fff;
          color: #000;
          padding: 20px;
          border-radius: 10px;
          border: 2px solid #bb86fc;
          margin-bottom: 20px;
        }

        .explicacao-card h3 {
          margin: 0 0 10px;
          color: #4a148c;
        }

        .explicacao-card p {
          margin: 0;
        }
      `}</style>
    </>
  );
}
