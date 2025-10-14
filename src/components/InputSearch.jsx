function InputSearch({value, onChange, placeholder}){

    return <input
          type="text"
          placeholder={placeholder}
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={value}
          onChange={onChange}
        />


}

export default InputSearch