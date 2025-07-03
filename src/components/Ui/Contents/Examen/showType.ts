export function ShowBiologie (items : any) {
    let Array : any = [];
    items.forEach((e : any) => {
        
        let SigneGenerauxValue = Object.values(e);
        let  Show =  SigneGenerauxValue.filter((i) => 
        {
            if( typeof(i) === "number" && i === 0 ){
                return null;
            }
            else if(typeof(i) === "string" && i === "") {
                return null;
            }
            else {
                return i ;
            }
        })
        Array.push(...Show);       
    }); 
    
    return Array;
}