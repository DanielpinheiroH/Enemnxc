import Head from "next/head";
import Link from "next/link";

export default function Simulados() {
  const simulados = Array.from({ length: 35 }, (_, i) => ({
    id: i + 1,
    titulo: `Simulado ${i + 1}`,
    descricao: `Conjunto de questões do ENEM - ${i + 1}/35`,
  }));

  return (
    <>
      <Head>
        <title>ENEMNXC - Simulados</title>
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
          <h1>📝 Simulados ENEMNXC</h1>
          <p>Escolha um simulado abaixo para treinar seus conhecimentos!</p>

          <div className="simulados-grid">
            {simulados.map((simulado) => (
              <Link key={simulado.id} href={`/simulados/simulado?id=${simulado.id}`} legacyBehavior>
                <a className="simulado-card">
                  <h2>{simulado.titulo}</h2>
                  <p>{simulado.descricao}</p>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <style global jsx>{`
        body {
          background-color: #000 !important;
          color: #fff;
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
        }
      `}</style>

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
          max-width: 1200px;
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
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
          width: 100%;
          text-align: center;
        }

                .caixa h1 {
          font-size: 36px;
          background: linear-gradient(to right, #6a1b9a, #bb86fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: bold;
          margin-bottom: 10px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }


        .caixa p {
          font-size: 16px;
          margin-bottom: 30px;
        }

        .simulados-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
        }

        .simulado-card {
          background: #f5f5f5;
          color: #000;
          padding: 20px;
          border-radius: 12px;
          text-align: left;
          text-decoration: none;
          border: 2px solid #ccc;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .simulado-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
          border-color: #4a148c;
        }

        .simulado-card h2 {
          margin: 0 0 10px;
          font-size: 18px;
          color: #4a148c;
        }

        .simulado-card p {
          margin: 0;
          font-size: 14px;
        }
      `}</style>
    </>
  );
}
