function SecondaryButton({children}:{children:string}) {
  return (
    <button className="underline text-slate-700 font-semibold cursor-pointer">{children}</button>
  )
}

export default SecondaryButton