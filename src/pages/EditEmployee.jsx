import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import PhotoInput from "../components/PhotoInput";
import { IMaskInput } from "react-imask";
import AddVehicle from "../components/AddVehicle";
import { Trash2 } from "lucide-react";

export default function EditEmployee() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);

  const cpfQuery = new URLSearchParams(location.search).get("cpf");

  const [name, setName] = useState("");
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);

  const [vehicles, setVehicles] = useState([]);
  const [showVehicle, setShowVehicle] = useState(false);

  const [funcionarios] = useState([
    { 
      name: "Rafael", 
      cpf: "123.456.789-00", 
      vehicles: [{ nome: "Carro 1", placa: "AVC-1326", foto: null }] 
    },
    { 
      name: "Maria", 
      cpf: "987.654.321-00", 
      vehicles: [{ nome: "Carro 2", placa: "ADG-5467", foto: null }] 
    },
    { 
      name: "Carlos", 
      cpf: "111.222.333-44", 
      vehicles: [{ nome: "Carro 3", placa: "GAM-8303", foto: null }] 
    },
  ]);

  useEffect(() => {
    if (!cpfQuery) return;


    const normalizeCpf = str => str.replace(/\D/g, "");

    const f = funcionarios.find(f => normalizeCpf(f.cpf) === normalizeCpf(cpfQuery));
    if (f) {
      setName(f.name);
      setVehicles(f.vehicles || []);

    }
  }, [cpfQuery, funcionarios]);

  const handlePhotoChange = (file) => {
    setPhoto(file);
    setPhotoPreview(file ? URL.createObjectURL(file) : null);
  };

  const handleSave = () => {
    console.log("Funcionário atualizado:", { name, cpf: cpfQuery, vehicles, photo });
    alert("Funcionário atualizado (simulação)");
    navigate(-1);
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
            placeholder="Digite o nome"
          />

          <p className="text-gray-600 my-1">Documento</p>
          <IMaskInput
            mask="000.000.000-00"
            value={cpfQuery}
            disabled
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100 cursor-not-allowed"
          />

          <button
            onClick={() => setShowVehicle(true)}
            className="px-4 py-2 mt-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Adicionar veículo
          </button>

          <div className="mt-4 space-y-2 w-full max-w-md">
            {vehicles.map((v, i) => (
              <div key={i} className="flex items-center justify-between gap-3 border border-gray-300 p-2 rounded-lg">
                <div className="flex items-center gap-3">
                  {v.foto && <img src={v.foto} alt={v.nome} className="w-12 h-12 object-cover rounded" />}
                  <div>
                    <p className="font-medium">{v.nome}</p>
                    <p className="text-gray-500 text-sm">{v.placa}</p>
                  </div>
                </div>
                <button
                  onClick={() => setVehicles(prev => prev.filter((_, index) => index !== i))}
                  className="text-red-600 hover:text-red-800 cursor-pointer"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>

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

      <AddVehicle
        show={showVehicle}
        onClose={() => setShowVehicle(false)}
        onAdd={(vehicle) => {
          setVehicles(prev => [...prev, vehicle]);
          setShowVehicle(false);
        }}
      />
    </div>
  );
}
