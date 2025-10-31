import { useState } from "react";
import Sidebar from "../components/Sidebar";
import ConfirmModal from "../components/ConfirmModal";

function BasicBasket() {
  const [isOpen, setIsOpen] = useState(true);
  const [beneficiaries, setBeneficiaries] = useState(["Rafael", "Marcos"]);
  const [employees, setEmployees] = useState([
    { name: "Rafael", doc: "123.456.789-00" },
    { name: "Marcos", doc: "987.654.321-00" },
    { name: "Ana", doc: "456.789.123-00" },
    { name: "Pedro", doc: "789.123.456-00" },
    { name: "Camila", doc: "321.654.987-00" },
  ]);

  const [fileName, setFileName] = useState("");
  const [pendingNames, setPendingNames] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.type !== "text/plain") {
      alert("Por favor, envie um arquivo .txt");
      return;
    }

    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target.result;
      const newNames = text
        .split(/[\n,]/)
        .map((n) => n.trim())
        .filter((n) => n);

      if (newNames.length > 0) {
        setPendingNames(newNames);
        setShowConfirm(true);
      }
    };
    reader.readAsText(file, "UTF-8");
  };

  const handleConfirmAdd = () => {
    setBeneficiaries((prev) => [...new Set([...prev, ...pendingNames])]);
    setPendingNames([]);
    setShowConfirm(false);
  };

  const handleCancelAdd = () => {
    setPendingNames([]);
    setShowConfirm(false);
  };


  const sortedEmployees = [...employees].sort((a, b) => {
    const aIsBeneficiary = beneficiaries.includes(a.name);
    const bIsBeneficiary = beneficiaries.includes(b.name);
    return aIsBeneficiary === bIsBeneficiary ? 0 : aIsBeneficiary ? -1 : 1;
  });

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <main className="flex-1 p-6 overflow-y-auto transition-all duration-300">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Cesta Básica</h1>
        <p className="text-gray-600 mb-6">Gerencie os beneficiários de cesta básica.</p>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Total de Beneficiários</h2>
            <p className="text-5xl font-bold text-blue-600">{beneficiaries.length}</p>
          </div>


          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Enviar Lista de Beneficiários</h2>
            <p className="text-gray-600 mb-4 text-sm">
              Envie um arquivo <strong>.txt</strong> com os nomes separados por vírgula ou linha.
            </p>

            <div className="flex flex-col items-start gap-3">
              <input
                type="file"
                accept=".txt"
                onChange={handleFileUpload}
                className="block w-full text-sm text-gray-700
                           file:mr-4 file:py-2 file:px-4
                           file:rounded-lg file:border-0
                           file:text-sm file:font-semibold
                           file:bg-blue-600 file:text-white
                           hover:file:bg-blue-700 cursor-pointer"
              />
              {fileName && (
                <p className="text-sm text-gray-500">
                  Arquivo carregado: <span className="font-medium">{fileName}</span>
                </p>
              )}
            </div>
          </div>
        </div>


        <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Lista de Funcionários
          </h2>

          <div className="grid grid-cols-[2fr_1fr] bg-gray-200 p-3 font-semibold text-gray-700 rounded-t-md">
            <div>Nome</div>
            <div className="text-center">Documento</div>
          </div>

          {sortedEmployees.map((emp, index) => {
            const isBeneficiary = beneficiaries.includes(emp.name);
            return (
              <div
                key={index}
                className={`grid grid-cols-[2fr_1fr] items-center p-3 border-b border-gray-100 transition-colors ${
                  isBeneficiary
                    ? "bg-green-50 hover:bg-green-100"
                    : "hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-2 font-medium text-gray-800">
                  {isBeneficiary && (
                    <span className="px-2 py-1 text-xs font-semibold bg-green-600 text-white rounded-md">
                      Beneficiário
                    </span>
                  )}
                  {emp.name}
                </div>
                <div className="text-gray-600 text-center">{emp.doc}</div>
              </div>
            );
          })}
        </div>
      </main>


      {showConfirm && (
        <ConfirmModal
          show={showConfirm}
          func={{ entry: false }} 
          title="Confirmar Adição"
          text={`Adicionar ${pendingNames.length} nome(s) à lista de beneficiários?`}
          color="#2563EB"
          onClose={handleCancelAdd}
          onConfirm={handleConfirmAdd}
        />
      )}
    </div>
  );
}

export default BasicBasket;
