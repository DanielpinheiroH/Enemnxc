import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

interface Resultado {
  idSimulado: string;
  total: number;
  acertos: number;
  erros: number;
  percentual: string;
}

export default function ResultadoSimulado() {
  const router = useRouter();
  const { id } = router.query;
  const [resultado, setResultado] = useState<Resultado | null>(null);

  useEffect(() => {
    const resultadoSalvo = localStorage.getItem("resultadoSimulado");
    if (resultadoSalvo) {
      setResultado(JSON.parse(resultadoSalvo));
    }
  }, []);

  return (
    <>
      <Head>
        <title>Resultado - Simulado {id}</title>
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
          <h1>📊 Resultado do Simulado {id}</h1>

          {resultado ? (
            <div className="resultado">
              <p><strong>Total de questões:</strong> {resultado.total}</p>
              <p><strong>Acertos:</strong> ✅ {resultado.acertos}</p>
              <p><strong>Erros:</strong> ❌ {resultado.erros}</p>
              <p><strong>Desempenho:</strong> {resultado.percentual}%</p>
            </div>
          ) : (
            <p>Carregando resultado...</p>
          )}

          <Link href="/simulados" legacyBehavior>
            <a className="botao">Voltar aos Simulados</a>
          </Link>
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
          text-align: center;
        }

        .caixa h1 {
          font-size: 32px;
          color: #4a148c;
          margin-bottom: 30px;
        }

        .resultado p {
          font-size: 18px;
          margin-bottom: 10px;
        }

        .botao {
          margin-top: 30px;
          background-color: #4a148c;
          color: white;
          padding: 12px 24px;
          font-size: 16px;
          border: none;
          border-radius: 8px;
          text-decoration: none;
          display: inline-block;
        }

        .botao:hover {
          background-color: #7b1fa2;
        }
      `}</style>
    </>
  );
}
