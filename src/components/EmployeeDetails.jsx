import { ArrowLeft, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CardDetails from "./CardDetails";

function EmployeeDetails({ show, onClose, func, onDelete }) {
  const navigate = useNavigate();

  if (!show) return null;

  const handleEdit = () => {
    navigate(`/editar?cpf=${encodeURIComponent(func.cpf)}`);
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black/50"
      onClick={handleClose}
    >
      <div
        className="relative w-[1200px] h-[700px] bg-gray-100 rounded shadow overflow-hidden flex"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Lado esquerdo */}
        <div className="w-[400px] flex flex-col space-y-4 p-4 pr-0 h-full">
          {/* Cabeçalho */}
          <div className="flex space-x-4 items-center h-[60px] bg-white rounded shadow px-2">
            <button
              className="flex justify-center w-8 h-8 items-center cursor-pointer border border-gray-300 rounded-full transform transition-transform duration-100 hover:scale-125"
              onClick={onClose}
            >
              <ArrowLeft />
            </button>
            <h1 className="text-2xl">Detalhes</h1>
          </div>

          {/* Card principal */}
          <div className="bg-white rounded shadow flex-1 flex flex-col justify-between overflow-hidden">
            <div className="border-b border-gray-200 rounded w-full h-[200px] flex justify-center items-center text-center mb-4">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center mb-3">
                  <User className="w-10 h-10 text-gray-500" />
                </div>
                <h1 className="font-bold text-lg">{func.name}</h1>
                <p className="text-gray-500">Funcionário</p>
              </div>
            </div>

            {/* Informações */}
            <div className="px-4">
              <p className="text-gray-600 font-bold">Informações</p>
              <div className="space-y-3 border-1 border-b-0 border-gray-200 rounded pt-2">
                <CardDetails title="Nome" info={func.name} />
                <CardDetails title="Documento" info={func.cpf} />
              </div>
            </div>

            {/* Botões */}
            <div className="flex gap-3 mt-4 px-4 pb-4">
              <button
                onClick={handleEdit}
                className="flex-1 bg-white text-blue-600 border border-blue-600 rounded px-4 py-2 font-semibold hover:bg-blue-50 transition cursor-pointer"
              >
                Editar
              </button>
              <button
                onClick={() => onDelete(func)}
                className="flex-1 bg-blue-600 text-white rounded px-4 py-2 font-semibold hover:bg-blue-700 transition cursor-pointer"
              >
                Apagar
              </button>
            </div>
          </div>
        </div>

        {/* Lado direito */}
        <div className="flex-1 flex flex-col p-4 space-y-4 h-full overflow-auto">
          <div className="bg-white shadow rounded p-5 flex-1 overflow-auto border border-gray-200">
            <h2 className="text-xl font-semibold mb-4">Veículos</h2>

            {/* Card de veículo */}
            <div className="grid grid-cols-3 gap-4">
              {func.veiculos && func.veiculos.length > 0 ? (
                func.veiculos.map((veiculo, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 border border-gray-200 rounded-xl shadow-sm p-3 flex flex-col items-center hover:shadow-md transition"
                  >
                    <div className="w-32 h-20 bg-gray-200 rounded mb-3 flex items-center justify-center overflow-hidden">
                      <img
                        src={veiculo.foto || "https://via.placeholder.com/150"}
                        alt={veiculo.nome}
                        className="object-cover w-full h-full rounded"
                      />
                    </div>
                    <h3 className="font-semibold text-lg">{veiculo.nome}</h3>
                    <p className="text-gray-600">Placa: {veiculo.placa}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">Nenhum veículo cadastrado</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDetails;
