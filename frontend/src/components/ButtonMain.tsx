
function ButtonMain({children,type,onClick}:{children:string,type?:string, onClick?:()=>void}) {
  return (
    <div onClick={onClick} className= {`${type=="logout"? "bg-red-900":"bg-green-800" } cursor-pointer text-slate-100 rounded-full px-4 py-2 font-semibold text-md`}>{children}</div>
  )
}

export default ButtonMain