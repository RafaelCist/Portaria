import { ArrowLeft, User } from "lucide-react";
import { Link } from "react-router-dom";

function EmployeeDetails({ show, onClose, func, onDelete }) {
  if (!show) return null;

  return (
    <div className="flex fixed top-0 left-0 w-full h-full justify-center items-center bg-black/50">
      <div className="bg-gray-100 rounded p-5 w-[1200px] h-[700px] space-x-1 shadow flex">

        <div className="space-y-4">

          <div className="flex space-x-4 px-2 items-center rounded shadow h-[60px] w-[400px] bg-white">
            <button
              className="flex justify-center w-8 h-8 items-center cursor-pointer border-1 border-gray-300 rounded-full
                         transform transition-transform duration-100 hover:scale-125"
              onClick={onClose}
            >
              <ArrowLeft />
            </button>
            <h1 className="text-2xl font-bold">Detalhes</h1>
          </div>


          <div className="bg-white rounded p-4 w-[400px] h-[596px] shadow flex flex-col justify-between">


            <div className="border border-gray-200 rounded w-full h-[200px] flex justify-center items-center text-center mb-4">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center mb-3">
                  <User className="w-10 h-10 text-gray-500" />
                </div>
                <h1 className="font-bold text-lg">{func.name}</h1>
                <p className="text-gray-500">Funcionário</p>
              </div>
            </div>


            <div className="space-y-2">
              <p>Nome: <span className="font-bold">{func.name}</span></p>
              <p>CPF: <span className="font-bold">{func.cpf}</span></p>
              <p>Veículo: <span className="font-bold">{func.veiculo}</span></p>
            </div>

            {/* Botões */}
            <div className="flex space-x-4 mt-4">
              <Link
                 to={`/editar?cpf=${encodeURIComponent(func.cpf)}`}
                className="flex-1 text-center bg-white text-blue-600 border border-blue-600 rounded px-4 py-2 font-semibold hover:bg-blue-50 transition"
              >
                Editar
              </Link>
              <button
                onClick={onDelete}
                className="flex-1 bg-blue-600 text-white rounded px-4 py-2 font-semibold hover:bg-blue-700 transition"
              >
                Apagar
              </button>
            </div>

          </div>
        </div>

        {/* Coluna direita (espaço adicional) */}
        <div className="bg-white shadow h-[660px] flex-1 rounded p-4">
          {/* Conteúdo extra ou gráfico */}
        </div>

      </div>
    </div>
  );
}

export default EmployeeDetails;
