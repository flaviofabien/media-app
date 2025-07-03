

type Props = {
  nom?: string,
  prenom?: string,
  age :number | string | Date,
}

export default function ContentPatient1({nom,prenom,age}: Props) {
  const Ageactuelle =  ((new Date()).getFullYear())  -   ((new Date(age)).getFullYear());
  const Age = `${age}`
  return (
    <div className="">
      <div>
          <h1 className="inline-block">Nom et prenom : <b> {nom} {prenom} </b></h1>
          
          {
              age &&  <p className="">Age : {Ageactuelle} ans</p> 
          }
          
          {
              age &&  <p className="">Date de naissance : {Age} </p> 
          }
      </div>
  </div>
  )
}