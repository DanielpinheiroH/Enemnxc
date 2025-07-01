import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

type ResumoData = {
  total: number;
  acertos: number;
  erros: number;
  por_materia: Record<string, { acertos: number; erros: number }>;
  por_bloco: Record<string, { acertos: number; erros: number }>;
  sugestoes: string[];
};

export default function Resumo() {
  const [resumo, setResumo] = useState<ResumoData | null>(null);
  const email = typeof window !== "undefined"
    ? localStorage.getItem("email") || "daniel@nxc.com"
    : "daniel@nxc.com";

  useEffect(() => {
    const carregarResumo = async () => {
      try {
        const response = await fetch(`/api/resumo?email=${email}`);
        const data = await response.json();
        setResumo(data);
      } catch (error) {
        console.error("Erro ao carregar resumo:", error);
      }
    };

    carregarResumo();
  }, [email]);

  return (
    <>
      <Head>
        <title>Resumo - ENEMNXC</title>
      </Head>

      <main>
        <h1>📊 Resumo</h1>

        {resumo ? (
          <>
            <div className="card">
              <h3>✅ Total de Questões</h3>
              <p>Respondidas: {resumo.total}</p>
              <p>Acertos: {resumo.acertos}</p>
              <p>Erros: {resumo.erros}</p>
            </div>

            <div className="card">
              <h3>📚 Por Matéria</h3>
              <ul>
                {Object.entries(resumo.por_materia).map(([mat, v]) => (
                  <li key={mat}>
                    {mat}: {v.acertos} acertos / {v.erros} erros
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <h3>🧩 Por Bloco</h3>
              <ul>
                {Object.entries(resumo.por_bloco).map(([bl, v]) => (
                  <li key={bl}>
                    Bloco {bl}: {v.acertos} acertos / {v.erros} erros
                  </li>
                ))}
              </ul>
            </div>

            {resumo.sugestoes.length > 0 && (
              <div className="card">
                <h3>🧠 Sugestões de Estudo</h3>
                {resumo.sugestoes.map((s, i) => (
                  <div key={i} className="sugestao">{s}</div>
                ))}
              </div>
            )}
          </>
        ) : (
          <p>Carregando dados do resumo...</p>
        )}

        <footer>
          <Link href="/dashboard">← Voltar ao Dashboard</Link>
        </footer>
      </main>

      <style jsx>{`
        main {
          font-family: Arial, sans-serif;
          padding: 30px;
          max-width: 800px;
          margin: auto;
        }

        h1 {
          color: #4a148c;
        }

        .card {
          background: #f4f4f4;
          padding: 15px;
          margin: 15px 0;
          border-radius: 10px;
        }

        .card h3 {
          margin-bottom: 5px;
        }

        .sugestao {
          background: #fff3cd;
          padding: 10px;
          border-left: 5px solid #ffc107;
          margin-top: 10px;
          border-radius: 8px;
        }

        footer {
          margin-top: 40px;
          text-align: center;
        }

        footer :global(a) {
          color: #4a148c;
          text-decoration: none;
          font-weight: bold;
        }
      `}</style>
    </>
  );
}
