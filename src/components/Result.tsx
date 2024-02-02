interface ResultProps {
    value: number;
}

const Result = ({value}: ResultProps) => {
  return (
    <div className="px-6 py-4 border-2 border-slate-400  rounded-xl">El resultado es:  {value}</div>
  )
}

export default Result