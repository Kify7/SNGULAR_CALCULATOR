import { useState } from "react"
import Form from "./components/Form"
import Result from "./components/Result"
import Calculator from "./components/Calculator";
import Loader from "./components/Loader";





function App() {
const [n, setN ] = useState<number>(0);
const [ res, setRes ] = useState<number>(0);
const [isLoading, setIsLoading] = useState<boolean>(false);
const handleOnSubmit = (number: number)=>{
setN(number)
setIsLoading(true)
}
const handleOnResult = (result: number)=>{
  setTimeout(()=>{
    setRes(result);
    setIsLoading(false)
  }, 1000)
  }

  return (
    <>
    <div className="flex w-full h-screen items-center justify-center p-48 bg-[#0C2D57]">
      <div className="flex w-5/12 flex-col bg-[#EFECEC] items-center p-8 rounded-xl">
      <h1 className="text-[#0C2D57] font-bold text-2xl">CALCULADORA SNGULAR</h1>
      <Form onSubmit={handleOnSubmit}/>
      <Calculator n={n} onResult={handleOnResult }/>
      {isLoading ? <Loader/> : n > 0 && <Result value={res}/> }
      </div>
    
    </div>
      
    </>
  )
}

export default App
