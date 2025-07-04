import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import nookies from "nookies";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === "admin@teste.com" && senha === "123456") {
      const plano = "premium";

      nookies.set(null, "token", "fake-token", {
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
      });

      nookies.set(null, "plan", plano, {
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
      });

      router.push("/");
    } else {
      setErro("E-mail ou senha inválidos.");
    }
  };

  return (
    <div className="container">
      <form className="formulario" onSubmit={handleLogin}>
        <h2 className="titulo">🔐 Login - ENEMNXC</h2>

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
          placeholder="Digite sua senha"
          title="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="input"
          required
        />

        {erro && <p className="erro">{erro}</p>}

        <button type="submit" className="botao">
          Entrar
        </button>

        <p className="cadastro">
          Ainda não tem uma conta?{" "}
          <Link href="/cadastro" legacyBehavior>
            <a className="link">Cadastre-se</a>
          </Link>
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

        .cadastro {
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
