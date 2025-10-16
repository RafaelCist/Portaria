import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import PhotoInput from "../components/PhotoInput";
import { IMaskInput } from "react-imask";

function AddEmployee() {
  const [isOpen, setIsOpen] = useState(true);
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [photo, setPhoto] = useState(null);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleAdd = () => {
    console.log("Funcionário adicionado:", { name, cpf, vehicle, photo });
    alert("Funcionário adicionado");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-md space-y-4">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Adicionar Funcionário
          </h2>


          <PhotoInput onChange={setPhoto} />

          <InputField
            label="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite o nome"
          />
    <p className="text-gray-600 my-1">Documento</p>
        <IMaskInput
        label="Documento"
        mask="000.000.000-00"
        value={cpf}
        onAccept={(value) => setCpf(value)}
        placeholder="Digite o CPF"
         className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
/>

          <InputField
            label="Veículo"
            value={vehicle}
            onChange={(e) => setVehicle(e.target.value)}
            placeholder="Digite o veículo"
          />

          <div className="flex justify-between mt-6">
            <button
              onClick={handleBack}
              className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
            >
              Voltar
            </button>

            <button
              onClick={handleAdd}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Adicionar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddEmployee;
