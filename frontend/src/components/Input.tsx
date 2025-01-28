type InputType = {
  label: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};


function Input({ label, type, onChange, value }: InputType) {
  return (
    <div className="flex flex-col w-full gap-1 max-w-full">
      <label htmlFor="input" className="text-sm font-semibold text-slate-700">
        {label}
      </label>
      <input
        onChange={onChange}
        value={value}
        className="border-2 border-slate-200 rounded-sm p-1"
        placeholder={`Enter ${label}`}
        id={`${type}`}
        type={type}
      />
    </div>
  );
}

export default Input;
