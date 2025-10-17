import { useState } from "react";
import { Building2, LogIn, Brain } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Usuário:", usuario, "Senha:", senha);

    navigate("/");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex flex-col justify-center items-center w-1/2 bg-white shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Login</h1>

        <form onSubmit={handleLogin} className="flex flex-col w-3/4 max-w-sm">
          <label className="text-gray-700 font-semibold mb-1">Usuário</label>
          <input
            type="text"
            placeholder="Digite seu Usuário"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 mb-4 focus:ring-2 focus:ring-blue-600 outline-none"
          />

          <label className="text-gray-700 font-semibold mb-1">Senha</label>
          <input
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 mb-6 focus:ring-2 focus:ring-blue-600 outline-none"
          />

          <button
            type="submit"
            className="flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition cursor-pointer"
          >
            <LogIn size={18} /> Entrar
          </button>
        </form>
      </div>

      <div className="w-1/2 bg-blue-700 text-white flex flex-col justify-center items-center p-10">
        <Building2 size={60} className="mb-6" />
        <h2 className="text-3xl font-bold mb-4">PortarIA</h2>
        <Brain size={50} className="mb-4" />
        <p className="text-center text-lg max-w-md">
          Sistema de controle de acesso moderno e seguro para sua empresa.
          Gerencie funcionários, registros e relatórios em um só lugar.
        </p>
      </div>
    </div>
  );
}

export default Login;
