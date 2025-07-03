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
  const [redacoes, setRedacoes] = useState<{ [tema: string]: File | null }>({});
  const [erros, setErros] = useState<{ [tema: string]: boolean }>({});

  const handleArquivoChange = (tema: string, file: File | null) => {
    setRedacoes({ ...redacoes, [tema]: file });
    setErros({ ...erros, [tema]: false });
  };

  const enviarRedacao = (tema: string) => {
    const imagem = redacoes[tema];
    if (!imagem) {
      setErros({ ...erros, [tema]: true });
      return;
    }

    console.log("Enviando redação...", { tema, imagem });
    alert(`Redação do tema "${tema}" enviada com sucesso (simulação)!`);
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
        <h1 className="tituloPagina">Correção Inteligente de Redações ENEM</h1>

        {temas.map((tema, idx) => (
          <div className="caixaTema" key={idx}>
            <h3 className="temaTitulo">{tema}</h3>

            <div className="botoes">
              <label htmlFor={`arquivo-${idx}`} className="botaoAnexar">
                📎 Anexar Imagem
              </label>
              <input
                id={`arquivo-${idx}`}
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={(e) => handleArquivoChange(tema, e.target.files?.[0] || null)}
              />

              <button className="botaoEnviar" onClick={() => enviarRedacao(tema)}>
                Enviar Redação
              </button>
            </div>

            {erros[tema] && <p className="erro">Nenhum arquivo selecionado.</p>}
          </div>
        ))}
      </main>


      <style global jsx>{`
        html, body {
          margin: 0;
          padding: 0;
          background-color: #121212;
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
          padding-top: 100px;
          max-width: 800px;
          margin: auto;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .tituloPagina {
          font-size: 28px;
          text-align: center;
          color: #bb86fc;
          font-weight: bold;
          margin-bottom: 8px;
          text-shadow: 0px 0px 6px #4a148c;
        }

        .caixaTema {
          background: #fff;
          color: #000;
          padding: 24px;
          border-radius: 12px;
          border: 2px solid #bb86fc;
        }

        .temaTitulo {
          font-size: 20px;
          color: #4a148c;
          text-align: center;
          margin-bottom: 20px;
          font-weight: 600;
          border-bottom: 1px dashed #bb86fc;
          padding-bottom: 8px;
        }

        .botoes {
          display: flex;
          justify-content: center;
          gap: 16px;
          align-items: center;
          flex-wrap: wrap;
        }

        .botaoAnexar {
          display: inline-block;
          background-color: #bb86fc;
          color: #fff;
          padding: 10px 20px;
          font-size: 14px;
          font-weight: bold;
          border: 2px solid #4a148c;
          border-radius: 8px;
          cursor: pointer;
          transition: 0.3s;
        }

        .botaoAnexar:hover {
          background-color: #9b5de5;
        }

        .botaoEnviar {
          background-color: #4a148c;
          color: white;
          padding: 10px 20px;
          font-size: 14px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
        }

        .botaoEnviar:hover {
          background-color: #7b1fa2;
        }

        .erro {
          color: red;
          font-size: 13px;
          text-align: center;
          margin-top: 10px;
        }
      `}</style>
    </>
  );
}
