import { Plus, Edit, Trash2, User } from "lucide-react";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import ConfirmModal from "../components/ConfirmModal";
import { Link } from "react-router-dom";
import InputSearch from "../components/InputSearch";
import EmployeeDetails from "../components/EmployeeDetails";

function Employees() {
  const [funcionarios, setFuncionarios] = useState([
    { name: "Rafael", cpf: "123.456.789-00", veiculo: "AVC-1326" },
    { name: "Maria", cpf: "987.654.321-00", veiculo: "ADG-5467" },
    { name: "Carlos", cpf: "111.222.333-44", veiculo: "GAM-8303" },
  ]);

  const [isOpen, setIsOpen] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedFunc, setSelectedFunc] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const openDetails = (func) => {
    setSelectedFunc(func);
    setShowDetails(true);
  };

const handleDeleteFromDetails = (func) => {
  setSelectedFunc(func);
  setShowModal(true);
};

  const handleOpenModal = (func) => {
    setSelectedFunc(func);
    setShowModal(true);
  };

  const listaFuncionarios = funcionarios.map((f) => (
    <div
      key={f.cpf}
      className="group grid grid-cols-4 items-center p-3 bg-white cursor-pointer rounded-md
                 transform transition-all duration-300
                 hover:bg-blue-600 hover:text-white hover:scale-[1.02] hover:shadow-lg"
      onClick={() => openDetails(f)}
    >
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white
                        transition-all duration-300 group-hover:bg-white group-hover:text-blue-600">
          <User size={20} />
        </div>
        <p className="font-medium transition-all duration-300">{f.name}</p>
      </div>

      <p>{f.cpf}</p>
      <p>{f.veiculo}</p>

      <div className="flex justify-center">
        <Link
          to={`/editar?cpf=${encodeURIComponent(f.cpf)}`}
          className="text-blue-600 mr-3 flex items-center transition-all duration-300 group-hover:text-white"
          onClick={(e) => e.stopPropagation()} 
        >
          <Edit size={18} />
        </Link>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleOpenModal(f);
          }}
          className="text-red-600 group-hover:text-white transition-all duration-300 cursor-pointer"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  ));

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <main className="flex-1 p-6 transition-all duration-300">
        <div className="flex justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Funcionários</h1>
            <p className="text-gray-600 mb-4">Gerencie os colaboradores da empresa</p>
          </div>
          <Link
            className="flex items-center hover:bg-blue-900 px-5 py-2 rounded-2xl bg-blue-600 text-white font-semibold cursor-pointer m-3"
            to="/adicionarfuncionario"
          >
            <Plus className="mr-2" /> Adicionar Funcionário
          </Link>
        </div>
        
        <div className="m-5 w-[1000px] rounded-md">
          <InputSearch placeholder="Buscar por nome, cpf ou placa"/>
          <div className="grid grid-cols-4 bg-gray-200 p-3 font-semibold text-gray-700 my-2">
            <div>Nome</div>
            <div>CPF</div>
            <div>Veículo</div>
            <div className="text-center">Ações</div>
          </div>

          {listaFuncionarios.length > 0 ? (
            listaFuncionarios
          ) : (
            <p className="p-4 text-center text-gray-500">
              Nenhum funcionário cadastrado.
            </p>
          )}
        </div>
      </main>

      {selectedFunc && (
        <ConfirmModal
  show={showModal}
  func={selectedFunc}
  onClose={() => setShowModal(false)}
  onConfirm={() => {
    setFuncionarios((prev) => prev.filter((f) => f.cpf !== selectedFunc.cpf));
    setShowModal(false);
    setShowDetails(false); // fecha também os detalhes
  }}
  text={`Deseja realmente apagar ${selectedFunc?.name}?`}
  color="#EF4444"
  title="Apagar Funcionário"
/>

      )}

      {selectedFunc && (
        <EmployeeDetails
  show={showDetails}
  func={selectedFunc}
  onClose={() => setShowDetails(false)}
  onDelete={handleDeleteFromDetails}
/>
      )}
    </div>
  );
}

export default Employees;
