import { useQuery } from 'react-query'
import Breadcrumbs from '../../../components/Ui/card/Breadcrumbs'
import CardPatient from '../../../components/Ui/card/CardPatient'
import SearchUser from '../../../components/Ui/card/SearchUser'
import HeaderBarAdmin from '../../../components/header/Header'
import Menu from '../../../components/menu/Menu'
import { getAllPatient } from '../../../api/Patient'
import LoaderPage from '../../../components/Ui/Loader/LoaderPage'


type Props = {}

export default function Consultation({}: Props) {
  const {data , isError , isLoading} = useQuery("patients" ,() => getAllPatient());  

  if(isLoading) return(<LoaderPage />) 
  if(isError) return( <div>Error</div> ) 
  return (
    <div className='lg:flex lg:flex-row '>
        <Menu />
        <div className='w-full px-8 mt-8'>
          <HeaderBarAdmin />
            <div className="p-6">
              <Breadcrumbs menu='Consultation' />
              <SearchUser link='/consultation/ajouter' text='Ajouter Consultation' title='Gestion consultation' />
            </div>
            <div className='w-full flex justify-between'>
              { data?.data.map( (e : any) =>  <CardPatient data={e} /> )  }
            </div>
          
        </div>
    </div>
  )
}