import { useState } from "react";
import { useRouter } from "next/router";
import nookies from "nookies";

export default function CadastroPage() {
  const router = useRouter();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const handleCadastro = (e: React.FormEvent) => {
    e.preventDefault();

    // Validação simples (poderia ser mais robusta)
    if (!nome || !email || !senha) {
      setErro("Preencha todos os campos.");
      return;
    }

    // Simula o cadastro bem-sucedido
    nookies.set(null, "token", "fake-token", {
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    nookies.set(null, "plan", "free", {
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    router.push("/");
  };

  return (
    <div className="container">
      <form className="formulario" onSubmit={handleCadastro}>
        <h2 className="titulo">📝 Cadastro - ENEMNXC</h2>

        <input
          type="text"
          placeholder="Digite seu nome"
          title="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="input"
          required
        />

        <input
          type="email"
          placeholder="Digite seu e-mail"
          title="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input"
          required
        />

        <input
          type="password"
          placeholder="Crie uma senha"
          title="Crie uma senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="input"
          required
        />

        {erro && <p className="erro">{erro}</p>}

        <button type="submit" className="botao">
          Criar Conta
        </button>

        <p className="login">
          Já tem uma conta?{" "}
          <a href="/login" className="link">Faça login</a>
        </p>
      </form>

      <style jsx>{`
        .container {
          background-color: #000;
          color: #fff;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .formulario {
          background: #111;
          padding: 48px;
          border-radius: 16px;
          width: 100%;
          max-width: 400px;
          box-shadow: 0 0 20px #a259ff66;
        }

        .titulo {
          color: #bb86fc;
          margin-bottom: 30px;
          text-align: center;
          font-size: 24px;
        }

        .input {
          width: 100%;
          padding: 12px 14px;
          margin-bottom: 18px;
          border-radius: 8px;
          border: 1px solid #555;
          background: #222;
          color: #fff;
          font-size: 14px;
          transition: border 0.3s;
        }

        .input:focus {
          border-color: #bb86fc;
          outline: none;
        }

        .erro {
          color: #ff6b6b;
          margin-bottom: 16px;
          font-size: 14px;
          text-align: center;
        }

        .botao {
          width: 100%;
          padding: 12px;
          background: #bb86fc;
          border: none;
          border-radius: 8px;
          color: #000;
          font-weight: bold;
          font-size: 16px;
          cursor: pointer;
          transition: background 0.3s;
        }

        .botao:hover {
          background: #9e65e6;
        }

        .login {
          margin-top: 20px;
          text-align: center;
          font-size: 14px;
        }

        .link {
          color: #bb86fc;
          font-weight: bold;
          text-decoration: none;
        }

        .link:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
