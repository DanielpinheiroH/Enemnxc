import Head from "next/head";
import Link from "next/link";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>ENEMNXC - Dashboard</title>
      </Head>

      <nav>
        <Link href="/" className="active">🏠 Home</Link>
        <Link href="/questoes">❓ Questões</Link>
        <Link href="/simulados">🧪 Simulados</Link>
        <Link href="/dashboard">📊 Dashboard</Link>
        <Link href="/perfil">👤 Perfil</Link>
      </nav>

      <main>
        <h1>📊 Painel do Aluno - ENEMNXC</h1>

        <div className="card">
          <h3>✅ Total de Questões Respondidas</h3>
          <p>Hoje: <span>12</span></p>
          <p>Na Semana: <span>55</span></p>
          <p>Este Mês: <span>148</span></p>
          <p>Total: <span>322</span></p>
        </div>

        <div className="card">
          <h3>📚 Por Matéria</h3>
          <ul>
            <li>Linguagens: 80</li>
            <li>Matemática: 100</li>
            <li>Ciências Humanas: 70</li>
            <li>Ciências da Natureza: 72</li>
          </ul>
        </div>

        <div className="card">
          <h3>🧩 Por Bloco</h3>
          <ul>
            <li>Bloco 1: 50</li>
            <li>Bloco 2: 80</li>
            <li>Bloco 3: 120</li>
            <li>Bloco 4: 72</li>
          </ul>
        </div>

        <Link className="btn" href="/dashboard/resumo">
          📈 Ver Resumo
        </Link>
      </main>

      <style jsx>{`
        body {
          font-family: Arial, sans-serif;
          background-color: #000;
          color: #fff;
          padding: 30px;
          padding-top: 100px;
          max-width: 9000px;
          margin: auto;
        }

        h1 {
          color: #a259ff;
          text-align: center;
        }

        .card {
          background: #111;
          padding: 20px;
          margin: 20px 0;
          border-radius: 12px;
          border: 1px solid #a259ff;
        }

        .card h3 {
          margin-bottom: 10px;
          color: #a259ff;
        }

        .card p, .card ul {
          margin-left: 10px;
        }

        .btn {
          display: inline-block;
          padding: 12px 20px;
          background: #a259ff;
          color: white;
          border-radius: 8px;
          text-decoration: none;
          margin-top: 20px;
          font-weight: bold;
        }

        nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background-color: #1a1a1a;
          display: flex;
          justify-content: space-around;
          padding: 12px 0;
          border-bottom: 1px solid #333;
          z-index: 1000;
        }

        nav a,
        nav :global(a) {
          text-decoration: none;
          color: #ccc;
          padding: 5px 10px;
          border-radius: 5px;
        }

        nav :global(a.active),
        nav :global(a:hover) {
          color: #a259ff;
          font-weight: bold;
          background-color: #000;
        }

        main {
          padding-top: 100px;
        }
      `}</style>
    </>
  );
}
