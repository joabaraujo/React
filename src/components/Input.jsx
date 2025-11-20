function Input({placeholder, type, onChange}) {
  return (
    <input
        className="border border-slate-300 outline-slate-400 px-4 py-2  rounded-md"
        placeholder={placeholder}
        type={type}
        onChange={onChange}
    >
    </input>
  );
}

export default Input;
