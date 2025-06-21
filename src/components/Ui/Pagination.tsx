import { Params } from "../typescript/params"

type Props = {
  paramsPatient : Params,
  setParamsPatient : React.Dispatch<React.SetStateAction<{
    limit: number;
    page: number;
    sortBy: string;
    order: string;
    search: string;
}>>
  totalPage : number

}
export default function Pagination({paramsPatient,setParamsPatient,totalPage} : Props) {
  return (
    <div className="w-full justify-center flex mb-4">
        <div className="mx-4 flex flex-row justify-between mt-4 max-w-96 gap-4">
              { paramsPatient.page === 1 ?  <button  
              className="text-lg bg-gray-200 px-2 py-1 text-white rounded-lg">
                  Prec</button>: 
              <button onClick={() => setParamsPatient((prec) => ({ ...prec , page : paramsPatient.page - 1})  )} 
              className="text-lg bg-black px-2 py-1 text-white rounded-lg">
                  Prec</button>  }
                  {
                        Array.from({ length:totalPage  }, (_, i) => i + 1).map((i : number) => (
                                <button key={i} onClick={() => setParamsPatient((prec) => ({ ...prec , page : i})  ) } className={` p-4 rounded-lg cursor-pointer shadow-md ${i === paramsPatient.page ? "bg-yellow-400 text-white"  : "bg-gray-200  text-black"}  `}>  {i} </button>
                        ))
                    }
             
            { paramsPatient.page === totalPage ?  
            <button  className="text-lg bg-gray-200 px-2 py-1 text-white rounded-lg">
                Suiv</button>: 
            <button onClick={() =>setParamsPatient((prec) => ({ ...prec , page : paramsPatient.page + 1})  )} 
            className="text-lg bg-black px-2 py-1 text-white rounded-lg">
                Suiv</button> }        </div>
    </div>
    
  )
}