import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import PhotoInput from "../components/PhotoInput";
import { IMaskInput } from "react-imask";

export default function EditEmployee() {
  const { cpf } = useParams();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);

  const [name, setName] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);

  const [funcionarios] = useState([
    { name: "Rafael", cpf: "123.456.789-00", veiculo: "AVC-1326" },
    { name: "Maria", cpf: "987.654.321-00", veiculo: "ADG-5467" },
    { name: "Carlos", cpf: "111.222.333-44", veiculo: "GAM-8303" },
  ]);

  useEffect(() => {
    const f = funcionarios.find(f => f.cpf === cpf);
    if (f) {
      setName(f.name);
      setVehicle(f.veiculo);
    }
  }, [cpf, funcionarios]);

  const handleSave = () => {
    console.log("Funcionário atualizado:", { name, cpf, vehicle, photo });
    alert("Funcionário atualizado (simulação)");
    navigate(-1);
  };

  const handlePhotoChange = (file) => {
    setPhoto(file);
    setPhotoPreview(file ? URL.createObjectURL(file) : null);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-md space-y-4">
          <h2 className="text-2xl font-semibold text-center mb-4">Editar Funcionário</h2>

          <PhotoInput onChange={handlePhotoChange} preview={photoPreview} />

          <InputField
            label="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite seu nome"
          />

              <p className="text-gray-600 my-1">Documento</p>
        <IMaskInput
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
            placeholder="Digite seu veículo"
          />

          <div className="flex justify-between mt-6">
            <button
              onClick={() => navigate(-1)}
              className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
            >
              Voltar
            </button>

            <button
              onClick={handleSave}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Salvar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
