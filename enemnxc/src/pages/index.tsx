/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const ranking = [
    { nome: "Amanda Costa", questoes: 720, emoji: "🥇", foto: "https://i.imgur.com/uLJ3FZx.png" },
    { nome: "Lucas Pereira", questoes: 650, emoji: "🥈", foto: "https://i.imgur.com/YZ4xzM8.png" },
    { nome: "Daniel Henrique", questoes: 610, emoji: "🥉", foto: "https://i.imgur.com/h8eQnQQ.png" },
    { nome: "Juliana Rocha", questoes: 580, emoji: "🏅", foto: "https://i.imgur.com/7QpM8zX.png" },
    { nome: "Carlos Silva", questoes: 550, emoji: "🏅", foto: "https://i.imgur.com/2ZmNzwB.png" },
    { nome: "Fernanda Lima", questoes: 530, emoji: "🎖️", foto: "https://i.imgur.com/gLfUJcD.png" },
    { nome: "Rafael Gomes", questoes: 500, emoji: "🎖️", foto: "https://i.imgur.com/kKq0bFe.png" },
    { nome: "Bruna Ferreira", questoes: 490, emoji: "🎖️", foto: "https://i.imgur.com/ClH6wE7.png" },
    { nome: "Thiago Moura", questoes: 470, emoji: "🎖️", foto: "https://i.imgur.com/C2NqN0g.png" },
    { nome: "Marina Duarte", questoes: 460, emoji: "🎖️", foto: "https://i.imgur.com/3J6l2xN.png" }
  ];

  const depoimentos = [
    {
      nome: "Joana Martins",
      curso: "Pré-ENEM 2025",
      texto: "A ENEMNXC me ajudou a focar nos meus pontos fracos. A plataforma é leve, prática e completa!",
      foto: "https://i.imgur.com/YZ4xzM8.png"
    },
    {
      nome: "Ricardo Lopes",
      curso: "Revisão Intensiva",
      texto: "O sistema de simulados me deu mais segurança para encarar a prova real. Recomendo demais!",
      foto: "https://i.imgur.com/uLJ3FZx.png"
    },
    {
      nome: "Carla Silva",
      curso: "Redações ENEM",
      texto: "A correção automática das redações foi um diferencial! Consegui ver onde errava rapidinho.",
      foto: "https://i.imgur.com/h8eQnQQ.png"
    },
    {
      nome: "Bruno Oliveira",
      curso: "Simulados Diários",
      texto: "Com o ENEMNXC, consegui montar um cronograma realista. Muito melhor que estudar sozinho!",
      foto: "https://i.imgur.com/7QpM8zX.png"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

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
          <img src="/bannerhome.png" alt="Banner ENEMNXC" className="banner" />
          <p>Use o menu acima para navegar pelas funcionalidades da plataforma.</p>
        </div>

        <section className="rankingResumo">
          <h2 className="tituloRanking">🏆 TOP 10 DO RANKING GERAL</h2>
          <div className="top5">
            {ranking.map((user, i) => (
              <div key={i} className="cardMini">
                <div className="fotoContainer">
                  <img src={user.foto} alt={user.nome} className="fotoRanking" />
                </div>
                <span className="medalha">{user.emoji}</span>
                <div>
                  <strong>{user.nome}</strong>
                  <p>{user.questoes} questões</p>
                </div>
              </div>
            ))}
          </div>
          <Link href="/ranking" legacyBehavior>
            <a className="botaoVerTodos">Ver Ranking Completo</a>
          </Link>
        </section>

        <section className="sobrePlataforma">
          <h2>SOBRE O ENEMNXC</h2>
          <p>
            A ENEMNXC É UMA PLATAFORMA EDUCACIONAL COMPLETA, DESENVOLVIDA PARA AJUDAR ESTUDANTES DE TODO O BRASIL A SE PREPARAREM PARA O ENEM DE FORMA EFICIENTE E ORGANIZADA. AQUI VOCÊ ENCONTRA QUESTÕES INÉDITAS, SIMULADOS PERSONALIZADOS, CORREÇÃO AUTOMÁTICA DE REDAÇÕES E MUITO MAIS. APROVEITE TODOS OS RECURSOS E ACOMPANHE SUA EVOLUÇÃO!
          </p>
        </section>

        <section className="depoimentos">
          <h2 className="tituloDepoimentos">💬 O que nossos alunos dizem</h2>
          <Slider {...settings}>
            {depoimentos.map((dep, index) => (
              <div key={index} className="cardDepoimento">
                <img src={dep.foto} alt={dep.nome} className="fotoDepoente" />
                <h3>{dep.nome}</h3>
                <p className="curso">{dep.curso}</p>
                <p className="textoDepoimento">"{dep.texto}"</p>
              </div>
            ))}
          </Slider>
        </section>
<section className="calendarioEnem">
  <h2 className="tituloCalendario">🗓️ Cronograma ENEM 2025</h2>
  <ul className="linhaDoTempo">
    <li>
      <span className="data">26/mai – 06/jun</span>
      <p>Inscrições abertas</p>
    </li>
    <li>
      <span className="data">até 18/jun</span>
      <p>Pagamento da taxa</p>
    </li>
    <li>
      <span className="data">09 e 16/nov</span>
      <p>Prova nacional (domingo)</p>
    </li>
    <li>
      <span className="data">30/nov e 07/dez</span>
      <p>Prova no PA (Belém, Ananindeua, Marituba)</p>
    </li>
    <li>
      <span className="data">até 10 dias úteis</span>
      <p>Divulgação dos gabaritos</p>
    </li>
    <li>
      <span className="data">16/jan</span>
      <p>Resultado oficial</p>
    </li>
  </ul>
</section>

<section className="comoFunciona">
  <h2 className="tituloSecao">🔍 Como Funciona a Plataforma</h2>
  <div className="cardsPassos">
    <div className="cardPasso">
      <div className="icone">📘</div>
      <h3>Acesse questões e simulados</h3>
      <p>Encontre conteúdos inéditos para praticar com eficiência.</p>
    </div>
    <div className="cardPasso">
      <div className="icone">🧠</div>
      <h3>Acompanhe seu desempenho</h3>
      <p>Veja estatísticas de acertos por matéria e bloco.</p>
    </div>
    <div className="cardPasso">
      <div className="icone">📝</div>
      <h3>Envie redações e receba feedback</h3>
      <p>Treine com correções automáticas e dicas de melhoria.</p>
    </div>
    <div className="cardPasso">
      <div className="icone">🏆</div>
      <h3>Suba no ranking semanal</h3>
      <p>Responda questões e acompanhe sua colocação no ranking.</p>
    </div>
    <div className="cardPasso">
      <div className="icone">🎯</div>
      <h3>Prepare-se com inteligência</h3>
      <p>Use todos os recursos da plataforma para garantir sua vaga.</p>
    </div>
  </div>
</section>
      </main>
<footer className="rodape">
  <div className="rodapeConteudo">
    <div className="logoRodape">
      <h3>ENEMNXC</h3>
      <p>Plataforma inteligente para sua preparação rumo ao ENEM.</p>
    </div>

    <div className="linksRapidos">
      <h4>Links Rápidos</h4>
      <ul>
        <li><Link href="/">🏠 Início</Link></li>
        <li><Link href="/questoes">❓ Questões</Link></li>
        <li><Link href="/simulados">📝 Simulados</Link></li>
        <li><Link href="/redacoes">✍️ Redações</Link></li>
        <li><Link href="/ranking">🏆 Ranking</Link></li>
      </ul>
    </div>

    <div className="contatoRodape">
      <h4>Contato</h4>
      <p>📧 contato@enemnxc.com</p>
      <p>📍 Brasília - DF</p>
    </div>
  </div>

  <div className="direitos">
    <p>© {new Date().getFullYear()} ENEMNXC. Todos os direitos reservados.</p>
  </div>
</footer>
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
          flex-direction: column;
          align-items: center;
        }

        .caixa {
          background: #fff;
          color: #000;
          padding: 30px;
          border-radius: 16px;
          max-width: 900px;
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
          text-align: center;
          margin-bottom: 40px;
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

        .banner {
          width: 100%;
          border-radius: 16px;
          box-shadow: 0 0 20px rgba(0,0,0,0.3);
          margin-bottom: 20px;
        }

        .rankingResumo {
          background: #fff;
          color: #000;
          padding: 40px;
          border-radius: 16px;
          border: 2px solid #bb86fc;
          margin: 0 auto 40px;
          max-width: 1000px;
          text-align: center;
        }

        .tituloRanking {
          color: #4a148c;
          font-size: 28px;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 30px;
        }

        .top5 {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }

        .cardMini {
          background: #bb86fc;
          padding: 16px 20px;
          border-radius: 16px;
          border: 2px solid #4a148c;
          width: 180px;
          box-shadow: 0 0 12px #6200ea;
          text-align: center;
          transition: transform 0.3s ease;
        }

        .cardMini:hover {
          transform: scale(1.05);
        }

        .fotoContainer {
          display: flex;
          justify-content: center;
          margin-bottom: 8px;
        }

        .fotoRanking {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #fff;
        }

        .medalha {
          font-size: 24px;
          display: block;
          margin-bottom: 8px;
        }

        .botaoVerTodos {
          display: inline-block;
          margin-top: 12px;
          padding: 10px 20px;
          background-color: #4a148c;
          color: white;
          text-decoration: none;
          border-radius: 8px;
          font-weight: bold;
          transition: background 0.3s;
        }

        .sobrePlataforma {
          background: #fff;
          color: #000;
          border: 2px solid #bb86fc;
          border-radius: 16px;
          padding: 30px;
          max-width: 1000px;
          margin-bottom: 60px;
          text-align: justify;
        }

        .sobrePlataforma h2 {
          text-align: center;
          font-size: 26px;
          color: #4a148c;
          margin-bottom: 20px;
        }

        .sobrePlataforma p {
          font-size: 18px;
          font-weight: bold;
          text-transform: uppercase;
        }

        .depoimentos {
          background: #fff;
          color: #000;
          padding: 40px;
          border: 2px solid #bb86fc;
          border-radius: 16px;
          max-width: 1000px;
          margin: 0 auto 60px;
          text-align: center;
        }

        .tituloDepoimentos {
          font-size: 28px;
          color: #4a148c;
          margin-bottom: 30px;
          font-weight: bold;
        }

        .cardDepoimento {
          background: #f3e5f5;
          border-radius: 16px;
          padding: 20px;
          width: 280px;
          box-shadow: 0 0 12px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
          margin: 0 auto;
        }

        .cardDepoimento:hover {
          transform: translateY(-5px);
        }

        .fotoDepoente {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #bb86fc;
          margin-bottom: 12px;
        }

        .curso {
          color: #777;
          font-size: 14px;
          margin-bottom: 8px;
        }

        .textoDepoimento {
          font-size: 15px;
          color: #333;
          font-style: italic;
        }
     .calendarioEnem {
  background: #fff;
  color: #000;
  border: 2px solid #bb86fc;
  border-radius: 16px;
  padding: 40px 30px;
  max-width: 1000px;
  margin: 0 auto 60px;
  text-align: center;
}

.tituloCalendario {
  font-size: 26px;
  color: #4a148c;
  font-weight: bold;
  margin-bottom: 30px;
  text-transform: uppercase;
}

.linhaDoTempo {
  display: flex;
  overflow-x: auto;
  gap: 20px;
  padding: 10px 0;
  list-style: none;
  justify-content: center;
  flex-wrap: wrap;
}

.linhaDoTempo li {
  background: #f3e5f5;
  border: 2px solid #bb86fc;
  padding: 16px;
  border-radius: 12px;
  min-width: 160px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}

.linhaDoTempo li:hover {
  transform: scale(1.05);
}

.linhaDoTempo .data {
  display: block;
  font-size: 18px;
  font-weight: bold;
  color: #6200ea;
  margin-bottom: 8px;
}

.comoFunciona {
  background: #fff;
  color: #000;
  border: 2px solid #bb86fc;
  border-radius: 16px;
  padding: 40px 30px;
  max-width: 1000px;
  margin: 0 auto 60px;
  text-align: center;
}

.tituloSecao {
  font-size: 28px;
  color: #4a148c;
  margin-bottom: 30px;
  font-weight: bold;
  text-transform: uppercase;
}

.cardsPassos {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.cardPasso {
  background: #f3e5f5;
  border-radius: 16px;
  padding: 20px;
  width: 250px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  text-align: center;
}

.cardPasso:hover {
  transform: scale(1.05);
}

.icone {
  font-size: 40px;
  margin-bottom: 10px;
}

.cardPasso h3 {
  font-size: 18px;
  color: #4a148c;
  margin-bottom: 8px;
}

.cardPasso p {
  font-size: 14px;
  color: #333;
}
.rodape {
  background: #121212;
  color: #fff;
  padding: 40px 20px 20px;
  border-top: 2px solid #bb86fc;
  margin-top: 60px;
}

.rodapeConteudo {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;
}

.logoRodape h3 {
  font-size: 24px;
  color: #bb86fc;
  margin-bottom: 10px;
}

.logoRodape p {
  font-size: 14px;
  color: #ccc;
}

.linksRapidos h4,
.contatoRodape h4 {
  font-size: 16px;
  margin-bottom: 10px;
  color: #bb86fc;
}

.linksRapidos ul {
  list-style: none;
  padding: 0;
}

.linksRapidos li {
  margin-bottom: 6px;
}

.linksRapidos a {
  text-decoration: none;
  color: #ccc;
  transition: color 0.2s;
}

.linksRapidos a:hover {
  color: #fff;
}

.contatoRodape p {
  font-size: 14px;
  color: #ccc;
  margin-bottom: 6px;
}

.direitos {
  text-align: center;
  margin-top: 30px;
  font-size: 13px;
  color: #777;
}

      `}</style>
    </>
  );
}
