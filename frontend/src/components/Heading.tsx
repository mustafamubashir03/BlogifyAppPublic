

function Heading({children}:{children:string| string[]}) {
  return (
    <h1 className="font-bold text-2xl text-slate-800 mb-4">{children}</h1>
  )
}

export default Heading