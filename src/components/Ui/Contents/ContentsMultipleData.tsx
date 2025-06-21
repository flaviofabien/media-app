
type Props = {
    label :string,
    data?: any
}

export default function ContentsMultipleData({label,data}: Props) {
  const SigneGenerauxKey = Object.keys(data)
  const SigneGenerauxValue = Object.values(data)
  let  Show =  SigneGenerauxValue.filter((i) => 
    {
        if( typeof(i) === "number" && i === 0 ){
            return null
        }
        else if(typeof(i) === "string" && i === "") {
            return null
        }
        else {
            return i
        }
    }
 )
  
    if(Show.length !== 0) {
        return (
            <div className={`bg-white p-4 rounded-lg w-full  xl:mt-0 `}>
                <div>
                        <h1 className=' text-gray-600 text-start'> {label} </h1>
                        <div>
                            {
                                SigneGenerauxKey.filter((i) => {
                                    if(typeof(data[i]) === "number" && data[i] > 0 ){
                                        return i    
                                    }
                                    else if(typeof(data[i]) === "string" && data[i] !== "" ){
                                        return i
                                    }
                                } ).map((items : string) => {
                                    return(
                                        <span key={items} className='block text-start pl-4 font-semibold text-gray-600 '> {items} : {data[items]} </span>
                                    )
                                } )
                            }
                        </div>
                </div>     
            </div> 
        )
    }
    else{
        return null
    }
  
}