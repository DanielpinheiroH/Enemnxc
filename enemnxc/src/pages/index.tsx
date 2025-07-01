/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>ENEMNXC - Home</title>
      </Head>

      <div className="navbar">
        <Link href="/" legacyBehavior><a className="active">🏠 Início</a></Link>
        <Link href="/questoes" legacyBehavior><a>❓ Questões</a></Link>
        <Link href="/simulados" legacyBehavior><a>📝 Simulados</a></Link>
        <Link href="/redacoes" legacyBehavior><a>✍️ Redações</a></Link>
        <Link href="/dashboard" legacyBehavior><a>📊 Dashboard</a></Link>
        <Link href="/perfil" legacyBehavior><a>👤 Perfil</a></Link>
      </div>

      <main>
        <div className="caixa">
          <h1 className="titulo-bonito">🎓 Bem-vindo ao <span>ENEMNXC</span></h1>

          <img
            src="/bannerhome.png"
            alt="Banner ENEMNXC"
            className="banner"
          />

          <p>Use o menu acima para navegar pelas funcionalidades da plataforma.</p>
        </div>
      </main>

      <style jsx>{`
        body {
          background-color: #000;
          color: #fff;
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
          padding-top: 80px;
          display: flex;
          justify-content: center;
        }

        .caixa {
          background: #fff;
          color: #000;
          padding: 30px;
          border-radius: 16px;
          max-width: 900px;
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
          text-align: center;
        }

        .titulo-bonito {
  font-size: 42px;
  font-weight: bold;
  color: #ffffff;
  background: linear-gradient(90deg, #bb86fc 0%, #6200ea 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
  animation: fadeIn 1s ease-in-out;
}

.titulo-bonito span {
  text-shadow: 1px 1px 2px #000;
  font-style: italic;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

        .banner {
          width: 100%;
          border-radius: 16px;
          box-shadow: 0 0 20px rgba(0,0,0,0.3);
          margin-bottom: 20px;
        }

        p {
          font-size: 16px;
        }
      `}</style>
    </>
  );
}
