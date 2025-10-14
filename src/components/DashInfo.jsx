function DashInfo({ icon, num, text, color }) {
  const IconComponent = icon

  return (
    <div className="flex items-center justify-between text-white p-4 rounded-lg shadow-md border-gray-300 border w-56 h-25">
      <div>
        <p className="text-sm text-black">{text}</p>
        <h1 className="text-2xl text-black font-bold mt-1">{num}</h1>
      </div>

      <div
        className="p-3 rounded-full flex items-center justify-center"
        style={{ backgroundColor: color }}
      >
        <IconComponent size={24} />
      </div>
    </div>
  )
}

export default DashInfo
