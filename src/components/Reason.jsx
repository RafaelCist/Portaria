import { useState } from "react"

function Reason({ show, func, onClose, onConfirm }) {
  const [motivo, setMotivo] = useState("")
  const [descricao, setDescricao] = useState("")

  if (!show) return null

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50"
    onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-lg w-[420px] p-6"
      onClick={(e) =>  e.stopPropagation()}>
        <h2 className="text-2xl font-bold text-gray-800 mb-1">Motivo da Visita</h2>
        <p className="text-gray-600 mb-5">
          Informe o motivo da entrada de <span className="font-semibold">{func?.name}</span>.
        </p>

        {/* Campo título do motivo */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Título</label>
          <input
            type="text"
            placeholder="Ex: Entrega, Reunião, Visita técnica..."
            value={motivo}
            onChange={(e) => setMotivo(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Campo descrição */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Descrição</label>
          <textarea
            placeholder="Adicione detalhes sobre o motivo da visita..."
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Botões */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg font-semibold text-gray-600 bg-gray-200 hover:bg-gray-300 transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={() => {
              if (!motivo.trim()) return alert("Preencha o título do motivo.")
              onConfirm(motivo, descricao)
            }}
            className="px-4 py-2 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Confirmar Entrada
          </button>
        </div>
      </div>
    </div>
  )
}

export default Reason
