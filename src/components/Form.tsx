import { useState } from "react";

interface FormProps {
    onSubmit: (n: number) => void;
  }

const Form = ({ onSubmit }: FormProps) => {
    const [n, setN] = useState('');

    const handleOnSubmit =(e:React.FormEvent)=>{
        e.preventDefault();
        const num = parseInt(n, 10);
        if (!isNaN(num)) {
            onSubmit(num);
        } 
        setN("");
    }

  return (
    <form onSubmit={handleOnSubmit} className="flex flex-col justify-center items-center p-4">
        <label className="text-[#0C2D57] font-semibold">Introduce un número:
        <input className="mt-4 rounded-md px-6 w-full bg-slate-400 border-none outline-none text-white" type="number" title="number"  value={n} onChange={(e)=>setN(e.target.value)}/>
        </label>
        <button type="submit" className="mt-8 font-bold text-sm px-4 py-2 bg-[#FC6736] text-white rounded-2xl">Calcular</button>
    </form>
  )
}

export default Form