import { useState } from "react"
import { CheckCircle, XCircle } from "lucide-react"
import Sidebar from "../components/Sidebar" 
import ConfirmModal from "../components/ConfirmModal"
import InputSearch from "../components/InputSearch"

export default function EntryControl() {
  const [search, setSearch] = useState("")
  const [showModal, setShowModal] = useState(false)
  const [selectedFunc, setSelectedFunc] = useState(null)
  const [funcionarios, setFuncionarios] = useState([
    { name: "Rafael", cpf: "123.456.789-00", entry: false },
    { name: "Maria", cpf: "987.654.321-00", entry: true },
    { name: "Carlos", cpf: "111.222.333-44", entry: false },
  ])
  const [isOpen, setIsOpen] = useState(true)

  const handleOpenModal = (func) => {
    setSelectedFunc(func)
    setShowModal(true)
  }
     const onChangeInput = (e) =>{
      setSearch(e.target.value)
      
    }


  const confirmEntryToggle = () => {
    if (selectedFunc) {
      const updated = [...funcionarios]
      const index = updated.findIndex(f => f.cpf === selectedFunc.cpf)
      updated[index].entry = !updated[index].entry
      setFuncionarios(updated)
      setShowModal(false)
      setSelectedFunc(null)
    }
    
  }
  

  const filtered = funcionarios
    .filter(f =>
      f.name.toLowerCase().includes(search.toLowerCase()) ||
      f.cpf.includes(search)
    )
    .sort((a, b) => Number(a.entry) - Number(b.entry))

   

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <main className="flex-1 p-6 transition-all duration-300">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Controle de Entrada</h1>
        <p className="text-gray-600 mb-4">Registre entrada e saída de funcionários</p>

        <InputSearch value={search} onChange={onChangeInput} placeholder="Buscar por nome ou CPF"  />

        <div className="flex flex-col gap-2">
          {filtered.map((f, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-gray-100 p-3 rounded shadow-sm"
            >
              <div className="flex items-center gap-2">
                {f.entry ? <CheckCircle size={20} className="text-green-500" /> : <XCircle size={20} className="text-red-500" />}
                <div>
                  <span className="font-medium">{f.name}</span>
                  <p className="text-gray-500 text-sm">{f.cpf}</p>
                </div>
              </div>

              <button
                onClick={() => handleOpenModal(f)}
                className={`flex items-center px-3 py-1 rounded text-white font-semibold cursor-pointer ${
                  f.entry ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"
                }`}
              >
                {f.entry ? "Saída" : "Entrada"}
              </button>
            </div>
          ))}
        </div>
      </main>

{selectedFunc && (
  <ConfirmModal
    show={showModal}
    func={selectedFunc}
    onClose={() => setShowModal(false)}
    onConfirm={confirmEntryToggle}
    text={`Deseja marcar ${selectedFunc.entry ? "saída" : "entrada"} de ${selectedFunc.name}?`}
    title={`Confirmar ${selectedFunc.entry ? "saída" : "entrada"} `}
  />
)}
    </div>
  )
  
}
