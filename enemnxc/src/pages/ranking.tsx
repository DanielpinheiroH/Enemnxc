import Head from "next/head";
import Link from "next/link";

const usuarios = [
  { nome: "Amanda Costa", avatar: "https://i.imgur.com/uLJ3FZx.png", questoes: 720 },
  { nome: "Lucas Pereira", avatar: "https://i.imgur.com/uLJ3FZx.png", questoes: 650 },
  { nome: "Daniel Henrique", avatar: "https://i.imgur.com/uLJ3FZx.png", questoes: 610 },
  { nome: "Fernanda Lima", avatar: "https://i.imgur.com/uLJ3FZx.png", questoes: 500 },
  { nome: "João Vitor", avatar: "https://i.imgur.com/uLJ3FZx.png", questoes: 450 },
];

export default function Ranking() {
  return (
    <>
      <Head>
        <title>ENEMNXC - Ranking</title>
      </Head>

      <div className="navbar">
        <Link href="/" legacyBehavior><a>🏠 Início</a></Link>
        <Link href="/questoes" legacyBehavior><a>❓ Questões</a></Link>
        <Link href="/simulados" legacyBehavior><a>📝 Simulados</a></Link>
        <Link href="/redacoes" legacyBehavior><a>✍️ Redações</a></Link>
        <Link href="/dashboard" legacyBehavior><a>📊 Dashboard</a></Link>
        <Link href="/perfil" legacyBehavior><a>👤 Perfil</a></Link>
        <Link href="/ranking" legacyBehavior><a className="active">🏆 Ranking</a></Link>
      </div>

      <main className="mainContainer">
        <h1>🏆 Ranking de Estudantes</h1>
        <p className="subtitulo">Veja quem está liderando na jornada ENEMNXC!</p>

        <div className="rankingContainer">
          {usuarios.map((user, i) => (
            <div className="rankingCard" key={i}>
              <span className="medalha">
                {i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : `#${i + 1}`}
              </span>
              <img src={user.avatar} className="avatar" alt={user.nome} />
              <div className="info">
                <strong>{user.nome}</strong>
                <p>{user.questoes} questões respondidas</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <style global jsx>{`
        html, body {
          margin: 0;
          padding: 0;
          background-color: #000;
          color: #fff;
          font-family: Arial, sans-serif;
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

        .mainContainer {
          padding-top: 100px;
          text-align: center;
        }

        h1 {
          font-size: 32px;
          color: #bb86fc;
        }

        .subtitulo {
          margin-bottom: 30px;
          color: #ccc;
        }

        .rankingContainer {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .rankingCard {
          background: #fff;
          color: #000;
          border-radius: 12px;
          padding: 20px 30px;
          width: 90%;
          max-width: 600px;
          display: flex;
          align-items: center;
          gap: 20px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          transition: transform 0.2s ease;
        }

        .rankingCard:hover {
          transform: scale(1.02);
        }

        .medalha {
          font-size: 24px;
          width: 40px;
        }

        .avatar {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          border: 2px solid #bb86fc;
        }

        .info {
          text-align: left;
        }

        .info strong {
          font-size: 18px;
        }

        .info p {
          margin: 4px 0 0;
          color: #555;
        }
      `}</style>
    </>
  );
}
