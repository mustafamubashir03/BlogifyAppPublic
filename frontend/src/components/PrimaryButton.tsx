type PrimaryButtonType = {
  children: string;
  size?:string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

function PrimaryButton({ children, onClick,size }: PrimaryButtonType) {
  return (
    <button
      onClick={onClick}
      className={`bg-slate-800 ${size==="small"?"w-[200px] flex justify-center justify-self-center mt-4":"w-full"} rounded-md cursor-pointer text-slate-100 font-semibold py-2`}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
