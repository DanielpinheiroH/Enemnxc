import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

interface Questao {
  id: number;
  pergunta: string;
  alternativas: string[];
  resposta: string;
}

export default function ResolverSimulado() {
  const router = useRouter();
  const { id } = router.query;

  const [questoes, setQuestoes] = useState<Questao[]>([]);
  const [respostas, setRespostas] = useState<{ [key: number]: string }>({});
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8000/simulados/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setQuestoes(data);
          setCarregando(false);
        });
    }
  }, [id]);

  const handleSelecionar = (id: number, letra: string) => {
    setRespostas({ ...respostas, [id]: letra });
  };

  const finalizarSimulado = () => {
    const acertos = questoes.filter(
      (q) => respostas[q.id] === q.resposta
    ).length;

    // salva em localStorage (pode ser backend depois)
    localStorage.setItem("resultadoSimulado", JSON.stringify({
      total: questoes.length,
      acertos,
      respostas,
      questoes
    }));

    router.push(`/simulados/resultado?id=${id}`);
  };

  return (
    <>
      <Head>
        <title>ENEMNXC - Resolver Simulado {id}</title>
      </Head>

      <div className="container">
        <h1>📝 Simulado {id}</h1>
        {carregando ? (
          <p>Carregando questões...</p>
        ) : (
          <>
            {questoes.map((q, index) => (
              <div key={q.id} className="questao-card">
                <h3>{index + 1}. {q.pergunta}</h3>
                <ul>
                  {q.alternativas.map((alt, i) => {
                    const letra = String.fromCharCode(65 + i);
                    return (
                      <li key={i}>
                        <label>
                          <input
                            type="radio"
                            name={`questao-${q.id}`}
                            value={letra}
                            checked={respostas[q.id] === letra}
                            onChange={() => handleSelecionar(q.id, letra)}
                          />
                          {letra}) {alt}
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
            <button onClick={finalizarSimulado}>Finalizar Simulado</button>
          </>
        )}
      </div>

      <style jsx>{`
        .container {
          padding: 40px;
          background-color: #000;
          color: #fff;
          font-family: Arial;
        }

        h1 {
          color: #bb86fc;
          text-align: center;
        }

        .questao-card {
          background: #fff;
          color: #000;
          padding: 20px;
          border-radius: 12px;
          border: 2px solid #bb86fc;
          margin-bottom: 30px;
        }

        ul {
          list-style: none;
          padding-left: 0;
        }

        li {
          margin-bottom: 10px;
        }

        button {
          background-color: #bb86fc;
          color: #000;
          padding: 12px 20px;
          border: none;
          border-radius: 8px;
          font-weight: bold;
          font-size: 16px;
          cursor: pointer;
          margin-top: 20px;
          display: block;
          margin-left: auto;
          margin-right: auto;
        }

        button:hover {
          background-color: #9e63db;
        }
      `}</style>
    </>
  );
}
