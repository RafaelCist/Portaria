import { Plus, Edit, Trash2, User } from "lucide-react";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import ConfirmModal from "../components/ConfirmModal";
import { Link } from "react-router-dom";

function Employees() {
  const [funcionarios, setFuncionarios] = useState([
    { name: "Rafael", cpf: "123.456.789-00", veiculo: "AVC-1326" },
    { name: "Maria", cpf: "987.654.321-00", veiculo: "ADG-5467" },
    { name: "Carlos", cpf: "111.222.333-44", veiculo: "GAM-8303" },
  ]);

  const [isOpen, setIsOpen] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedFunc, setSelectedFunc] = useState(null);

  const handleOpenModal = (func) => {
    setSelectedFunc(func);
    setShowModal(true);
  };

  const listaFuncionarios = funcionarios.map((f) => (
    <div key={f.cpf} className="grid grid-cols-4 items-center p-3">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white">
          <User size={20} />
        </div>
        <span className="font-medium text-gray-800">{f.name}</span>
      </div>
      <div>{f.cpf}</div>
      <div>{f.veiculo}</div>
      <div className="flex justify-center">
        <Link
          to={`/editar?cpf=${encodeURIComponent(f.cpf)}`}
          className="text-blue-600 hover:text-blue-800 mr-3 flex items-center"
        >
          <Edit size={18} />
        </Link>
        <button
          onClick={() => handleOpenModal(f)}
          className="text-red-600 hover:text-red-800"
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

        <div className="m-5 w-[1000px] rounded-md bg-white">
          <div className="grid grid-cols-4 bg-gray-200 p-3 font-semibold text-gray-700">
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
          }}
          text={`Deseja realmente apagar ${selectedFunc.name}?`}
          color="#EF4444"
          title="Apagar Funcionário"
        />
      )}
    </div>
  );
}

export default Employees;
