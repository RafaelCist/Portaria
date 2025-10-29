import { X } from "lucide-react"

function VisitorDetails({ show, visitor, onClose }) {
  if (!show || !visitor) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50"
    onClick={onClose}>
      <div className="bg-white w-[450px] rounded-2xl shadow-xl p-6 relative animate-fadeIn"
      onClick={(e) => e.stopPropagation()}
      
      
      >

    

        {/* Cabeçalho */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Detalhes do Visitante
        </h2>

        {/* Corpo */}
        <div className="space-y-3">
          <div>
            <p className="text-sm text-gray-500 font-medium">Nome</p>
            <p className="text-lg font-semibold text-gray-800">{visitor.name}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500 font-medium">Documento</p>
            <p className="text-gray-700">{visitor.doc || "—"}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500 font-medium">Veículo</p>
            <p className="text-gray-700">{visitor.vehicle || "—"}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500 font-medium">Motivo</p>
            <p className="text-gray-700">{visitor.purpose || "—"}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500 font-medium">Descrição</p>
            <p className="text-gray-700">{visitor.description || "—"}</p>
          </div>

          <div className="flex gap-6 mt-3">
            <div>
              <p className="text-sm text-gray-500 font-medium">Status</p>
              <p
                className={`font-semibold ${
                  visitor.entry ? "text-green-600" : "text-red-500"
                }`}
              >
                {visitor.entry ? "Presente" : "Ausente"}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500 font-medium">Horário de entrada</p>
              <p className="text-gray-700">{visitor.entryTime || "—"}</p>
            </div>
          </div>
        </div>

        {/* Rodapé */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="cursor-pointer px-5 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  )
}

export default VisitorDetails
