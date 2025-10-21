import { useState } from "react";
import { LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo2.png";

function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Usuário:", usuario, "Senha:", senha);
    navigate("/paginainicial");
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


      <div className="w-1/2 relative bg-gradient-to-t from-blue-600 via-blue-900 to-blue-950 text-white flex flex-col justify-start items-center p-10 overflow-hidden">
        <img
        draggable="false" 
          src={logo}
          alt="Logo"
          className="h-[200px] w-[220px] mt-3 select-none transition-transform duration-500 ease-in-out hover:scale-105 hover:-translate-y-2"
        />

        <p className="text-white text-lg font-semibold mb-6 select-none">
          Controle de acesso moderno e seguro
        </p>


        <div className="absolute top-120 left-10 animate-float-slow">
          <div className="relative">
            <div className="w-32 h-16 bg-white rounded-full"></div>
            <div className="absolute top-[-15px] left-[20px] w-12 h-12 bg-white rounded-full"></div>
            <div className="absolute top-[-10px] left-[55px] w-16 h-16 bg-white rounded-full"></div>
          </div>
        </div>

        <div className="absolute top-90 right-24 animate-float  scale-75">
          <div className="relative">
            <div className="w-40 h-20 bg-white rounded-full"></div>
            <div className="absolute top-[-20px] left-[25px] w-16 h-16 bg-white rounded-full"></div>
            <div className="absolute top-[-12px] left-[65px] w-20 h-20 bg-white rounded-full"></div>
          </div>
        </div>

        <div className="absolute bottom-24 left-1/3 animate-float-fast  scale-90">
          <div className="relative">
            <div className="w-28 h-14 bg-white rounded-full"></div>
            <div className="absolute top-[-10px] left-[15px] w-10 h-10 bg-white rounded-full"></div>
            <div className="absolute top-[-8px] left-[45px] w-14 h-14 bg-white rounded-full"></div>
          </div>
        </div>


        <svg
          className="absolute bottom-0 left-0 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            d="M0,64L48,80C96,96,192,128,288,154.7C384,181,480,203,576,186.7C672,171,768,117,864,122.7C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Login;
