import { useEffect } from 'react'
import Series from '../classes/Series';

interface CalculatorProps {
    n: number,
    onResult: (result:number)=>void;
}
const Calculator = ({n, onResult}:CalculatorProps) => {
    useEffect(()=>{
        const res = Series.result(n);
        onResult(res);
    }, [n, onResult])
  return null;
}

export default Calculator