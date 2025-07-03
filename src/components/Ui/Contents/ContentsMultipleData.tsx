
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
            <div className={``}>
                <div>
                        <h1 className='  text-start underline font-semibold '> {label} : </h1>
                        <div className="">
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
                                        <div key={items} className='text-start text-sm   '>  <span className="text-black">{items}</span> : {data[items]} </div>
                                    )
                                } )
                            }
                        </div>
                </div>     
            </div> 
        )
    }
    else{
        return null;
    }
  
}