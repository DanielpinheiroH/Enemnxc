/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import ChartTotal from '@/components/ChartTotal';
import ChartPorMateria from '@/components/ChartPorMateria';
import ChartPorBloco from '@/components/ChartPorBloco';

export default function Dashboard() {
  const [filtroTotal, setFiltroTotal] = useState('todos');
  const [filtroMateria, setFiltroMateria] = useState('todos');
  const [filtroBloco, setFiltroBloco] = useState('todos');

  return (
    <>
    <Head>
  <title>📊 Seu Desempenho | Painel ENEMNXC</title>
  <meta name="description" content="Visualize seu progresso, acertos e desempenho por matéria no ENEMNXC." />
</Head>
      <nav>
        <Link href="/" className="active">🏠 Home</Link>
        <Link href="/questoes">❓ Questões</Link>
        <Link href="/simulados">🧪 Simulados</Link>
        <Link href="/dashboard">📊 Dashboard</Link>
        <Link href="/perfil">👤 Perfil</Link>
      </nav>

      <main>
       <h1 className="text-3xl font-bold text-purple-500 text-center mb-6">
  📊 Painel do Aluno - ENEMNXC
</h1>

        {/* Gráfico Total */}
        <div className="card">
          <h3 className="text-xl font-semibold text-green-400 mb-2">
  ✅ Total de Questões Respondidas
</h3>
          <label>
            Filtro:
            <select value={filtroTotal} onChange={(e) => setFiltroTotal(e.target.value)}>
              <option value="todos">Todos</option>
              <option value="hoje">Hoje</option>
              <option value="semana">Semana</option>
              <option value="mes">Mês</option>
            </select>
          </label>
          <ChartTotal filtro={filtroTotal} />
        </div>

        {/* Gráfico por Matéria */}
        <div className="card">
          <h3 className="text-xl font-semibold text-green-400 mb-2">
  ✅ Desempenho por Matéria
</h3>
          <label>
            Filtro:
            <select value={filtroMateria} onChange={(e) => setFiltroMateria(e.target.value)}>
              <option value="todos">Todos</option>
              <option value="linguagens">Linguagens</option>
              <option value="matematica">Matemática</option>
              <option value="humanas">Humanas</option>
              <option value="natureza">Natureza</option>
            </select>
          </label>
          <ChartPorMateria filtro={filtroMateria} />
        </div>

        {/* Gráfico por Bloco */}
        <div className="card">
       <h3 className="text-xl font-semibold text-green-400 mb-2">
  ✅ Desempenho por Bloco
</h3>
          <label>
            Filtro:
            <select value={filtroBloco} onChange={(e) => setFiltroBloco(e.target.value)}>
              <option value="todos">Todos</option>
              <option value="bloco1">Bloco 1</option>
              <option value="bloco2">Bloco 2</option>
              <option value="bloco3">Bloco 3</option>
              <option value="bloco4">Bloco 4</option>
            </select>
          </label>
          <ChartPorBloco filtro={filtroBloco} />
        </div>

        <Link className="btn" href="/dashboard/resumo">📈 Ver Resumo</Link>
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

        label {
          display: block;
          margin-bottom: 10px;
          color: #ccc;
        }

        select {
          margin-left: 10px;
          padding: 4px 8px;
          background-color: #222;
          color: #fff;
          border: 1px solid #555;
          border-radius: 4px;
        }
      `}</style>
    </>
  );
}
