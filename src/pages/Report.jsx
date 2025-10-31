import { useState } from "react";
import Sidebar from "../components/Sidebar";

function Report() {
  const [isOpen, setIsOpen] = useState(true);
  const [month, setMonth] = useState("");

  // Simulação de dados de frequência
  const [reports, setReports] = useState([
    { name: "Rafael", doc: "123.456.789-00", workedDays: 20, absences: 2 },
    { name: "Maria", doc: "987.654.321-00", workedDays: 22, absences: 0 },
    { name: "Carlos", doc: "111.222.333-44", workedDays: 18, absences: 4 },
    { name: "Ana", doc: "555.666.777-88", workedDays: 23, absences: 1 },
  ]);

  const handleGenerate = () => {
    if (!month) {
      alert("Por favor, selecione um mês antes de gerar o relatório.");
      return;
    }
    alert(`Relatório de frequência do mês ${month.split("-")[1]}/${month.split("-")[0]} gerado com sucesso!`);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <main className="flex-1 p-6 transition-all duration-300">
        {/* Cabeçalho */}
        <div className="flex justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Relatórios</h1>
            <p className="text-gray-600 mb-4">Geração de relatórios de frequência</p>
          </div>
        </div>

        {/* Filtros */}
        <div className="w-full h-[200px] rounded-2xl p-4 shadow-md border border-gray-200 bg-white">
          <h1 className="text-2xl font-medium text-gray-800 mb-4">Filtros</h1>
          <div className="flex justify-evenly">
            <div className="p-4">
              <label className="block mb-2 font-medium text-gray-800">Escolha o mês:</label>
              <input
                type="month"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className="border border-gray-300 rounded-lg p-2 text-gray-800 focus:outline-none focus:ring-1"
              />
            </div>

            <div>
              <button
                onClick={handleGenerate}
                className="px-10 py-2 bg-blue-600 text-white font-semibold rounded-lg 
                           hover:bg-blue-900 hover:scale-105 hover:shadow-lg 
                           transition-all duration-200 my-12"
              >
                Gerar Relatório
              </button>
            </div>
          </div>
        </div>

        {/* Lista de Relatórios */}
        <div className="mt-8 bg-white rounded-2xl shadow-md border border-gray-200 p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frequência dos Funcionários</h2>

          <div className="grid grid-cols-4 bg-gray-200 p-3 font-semibold text-gray-700 rounded-t-md">
            <div>Nome</div>
            <div>Documento</div>
            <div>Dias Trabalhados</div>
            <div>Faltas</div>
          </div>

          {reports.length > 0 ? (
            reports.map((r, index) => (
              <div
                key={index}
                className="grid grid-cols-4 items-center p-3 border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <div className="font-medium text-gray-800">{r.name}</div>
                <div className="text-gray-600">{r.doc}</div>
                <div className="font-medium text-gray-800 ml-13">{r.workedDays}</div>
                <div className="font-medium text-gray-800 ml-4">
                  {r.absences}
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center p-4">Nenhum relatório disponível.</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default Report;
