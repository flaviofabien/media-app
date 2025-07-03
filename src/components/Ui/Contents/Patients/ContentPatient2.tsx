type Props = {
  adresse ?: string,
  profession ?: string,
  telephone ?: string , 
  genre ?: string
  email ?: string
  patient ?:string
}

export default function ContentPatient2({adresse,profession,telephone,genre,email,patient}: Props) {
  return (
        <ul className="  "> 
          <li> Sex : {genre} </li> 
          <li> Addresse: {adresse} </li>
          <li> Profession : {profession}  </li>
          <li> {telephone ? 'Telephone'  : "" } : {telephone} </li>
          <li>{
            email && <p className=" 0">Email : {email} </p>
          }</li>
          <li><p className=" 0">Patient : {patient} </p></li>
        </ul>
  )
}