import Head from "next/head";
import Link from "next/link";

export default function Perfil() {
  const totalQuestoes = 248;
  const conquistas = [
    { emoji: "🎯", titulo: "Primeira Questão", descricao: "Você respondeu sua primeira questão!" },
    { emoji: "🔥", titulo: "Meta 100", descricao: "Mais de 100 questões respondidas!" },
    { emoji: "💪", titulo: "Maratona ENEM", descricao: "Você está se preparando com dedicação!" }
  ];

  return (
    <>
      <Head>
        <title>ENEMNXC - Perfil</title>
      </Head>

      <div className="navbar">
        <Link href="/" legacyBehavior><a>🏠 Início</a></Link>
        <Link href="/questoes" legacyBehavior><a>❓ Questões</a></Link>
        <Link href="/simulados" legacyBehavior><a>📝 Simulados</a></Link>
        <Link href="/redacoes" legacyBehavior><a>✍️ Redações</a></Link>
        <Link href="/dashboard" legacyBehavior><a>📊 Dashboard</a></Link>
        <Link href="/perfil" legacyBehavior><a className="active">👤 Perfil</a></Link>
      </div>

      <main className="mainContainer">
        <div className="perfilContainer">
          <img
            src="https://i.imgur.com/uLJ3FZx.png"
            alt="Foto do usuário"
            className="avatar"
          />
          <h1>Estudante ENEM</h1>
          <p className="email">estudante@enem.com.br</p>

          <div className="info">
            <p>📊 Questões Respondidas: <strong>{totalQuestoes}</strong></p>
            <p>🏅 Nível: <strong>Intermediário</strong></p>
          </div>

          <button className="botaoEditar">Editar Perfil</button>
        </div>

        <div className="conquistasContainer">
          <h2>🏆 Minhas Conquistas</h2>
          <div className="conquistasLista">
            {conquistas.map((c, i) => (
              <div className="conquista" key={i}>
                <span className="emoji">{c.emoji}</span>
                <div>
                  <h3>{c.titulo}</h3>
                  <p>{c.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

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
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .perfilContainer {
  background: #fff;
  color: #000;
  border: 2px solid #bb86fc;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 90%;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

        .avatar {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          border: 3px solid #bb86fc;
          object-fit: cover;
          margin-bottom: 20px;
          transition: transform 0.3s ease;
        }

        .avatar:hover {
          transform: scale(1.1);
        }

        h1 {
          margin: 0;
          font-size: 24px;
          color: #4a148c;
        }

        .email {
          color: #555;
          font-size: 14px;
          margin-bottom: 20px;
        }

        .info p {
          font-size: 15px;
          color: #333;
          margin: 6px 0;
        }

        .botaoEditar {
          background-color: #bb86fc;
          color: #fff;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.3s;
          margin-top: 16px;
        }

        .botaoEditar:hover {
          background-color: #9b5de5;
        }

        .conquistasContainer {
          background: #fff;
          color: #000;
          border: 2px solid #bb86fc;
          border-radius: 16px;
          padding: 30px;
          max-width: 800px;
          width: 90%;
          text-align: center;
        }

        .conquistasContainer h2 {
          color: #4a148c;
          margin-bottom: 24px;
        }

        .conquistasLista {
          display: flex;
          flex-direction: column;
          gap: 16px;
          align-items: center;
        }

       .conquista {
  background: #bb86fc22;
  padding: 16px 20px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 16px;
  border: 2px solid #bb86fc;
  width: 100%;
  max-width: 600px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

        .conquista:hover {
          transform: scale(1.03);
          box-shadow: 0 0 12px #bb86fc;
        }

        .emoji {
          font-size: 28px;
        }

        .conquista h3 {
          margin: 0;
          font-size: 16px;
          color: #000;
        }

        .conquista p {
          margin: 4px 0 0;
          font-size: 14px;
          color: #555;
        }
      `}</style>
    </>
  );
}
