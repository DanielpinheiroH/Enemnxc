import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

const temas = [
  "A importância da empatia nas relações virtuais",
  "Os desafios da educação ambiental no Brasil",
  "A influência das redes sociais na formação da identidade",
  "A persistência da violência contra a mulher na sociedade brasileira",
  "O papel da tecnologia na inclusão de pessoas com deficiência"
];

export default function RedacoesPage() {
  const [imagem, setImagem] = useState<File | null>(null);
  const [temaSelecionado, setTemaSelecionado] = useState<string>("");

  const enviarRedacao = () => {
    if (!imagem || !temaSelecionado) {
      alert("Selecione um tema e uma imagem!");
      return;
    }

    // Aqui entraria a chamada à API
    console.log("Enviando redação para correção...", { temaSelecionado, imagem });
    alert("Redação enviada com sucesso (simulação)!");
  };

  return (
    <>
      <Head>
        <title>ENEMNXC - Redações</title>
      </Head>

      <div className="navbar">
        <Link href="/" legacyBehavior><a>🏠 Início</a></Link>
        <Link href="/questoes" legacyBehavior><a>❓ Questões</a></Link>
        <Link href="/simulados" legacyBehavior><a>📝 Simulados</a></Link>
        <Link href="/redacoes" legacyBehavior><a className="active">✍️ Redações</a></Link>
        <Link href="/dashboard" legacyBehavior><a>📊 Dashboard</a></Link>
        <Link href="/perfil" legacyBehavior><a>👤 Perfil</a></Link>
      </div>

      <main className="container">
        <div className="caixa">
          <h1>✍️ Envio de Redações</h1>
          <p>Escolha um tema e envie sua redação (em imagem) para correção automática.</p>

          <div className="temas">
            {temas.map((tema, idx) => (
              <div
                key={idx}
                className={`tema ${temaSelecionado === tema ? "ativo" : ""}`}
                onClick={() => setTemaSelecionado(tema)}
              >
                {tema}
              </div>
            ))}
          </div>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImagem(e.target.files?.[0] || null)}
          />

          <button className="botao" onClick={enviarRedacao}>
            Enviar Redação
          </button>
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

        .temas {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 20px;
        }

        .tema {
          background: #f2f2f2;
          padding: 16px;
          border-radius: 12px;
          border: 2px solid transparent;
          cursor: pointer;
          transition: 0.2s;
        }

        .tema:hover {
          border-color: #4a148c;
        }

        .tema.ativo {
          border-color: #bb86fc;
          background: #e0d7f9;
        }

        input[type="file"] {
          margin-top: 10px;
          margin-bottom: 20px;
        }

        .botao {
          background-color: #4a148c;
          color: white;
          padding: 12px 24px;
          font-size: 16px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          display: block;
          margin: 0 auto;
        }

        .botao:hover {
          background-color: #7b1fa2;
        }
      `}</style>
    </>
  );
}
