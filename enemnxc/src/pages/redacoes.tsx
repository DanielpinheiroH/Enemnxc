import Head from "next/head";
import Link from "next/link";

export default function Redacoes() {
  return (
    <>
      <Head>
        <title>ENEMNXC - Redações</title>
      </Head>

      <div className="navbar">
        <Link href="/">🏠 Início</Link>
        <Link href="/questoes">❓ Questões</Link>
        <Link href="/simulados">📝 Simulados</Link>
        <Link href="/redacoes" className="active">✍️ Redações</Link>
        <Link href="/dashboard">📊 Dashboard</Link>
        <Link href="/perfil">👤 Perfil</Link>
      </div>

      <main>
        <h1>✍️ Redações ENEMNXC</h1>
        <p>Aqui você poderá enviar e corrigir redações com temas do ENEM.</p>
      </main>

      <style jsx>{`
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

        .navbar :global(a) {
          text-decoration: none;
          color: #bbb;
          padding: 5px 10px;
        }

        .navbar :global(a.active),
        .navbar :global(a:hover) {
          color: #bb86fc;
          font-weight: bold;
        }

        main {
          text-align: center;
          margin-top: 50px;
        }
      `}</style>
    </>
  );
}
