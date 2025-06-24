import Breadcrumbs from '../../../components/Ui/card/Breadcrumbs'
import SearchUser from '../../../components/Ui/card/SearchUser'
import HeaderBarAdmin from '../../../components/header/Header'
import Menu from '../../../components/menu/Menu'
import UserTable from './UserTable'

export default function Patient() {
  return (
    <div className='w-full flex flex-row justify-between'>
        <Menu />
        <div className='w-full px-8 mt-8'>
          <HeaderBarAdmin />
            <div className="p-6">
              <Breadcrumbs />
              <SearchUser text='Add User' title='User Management' />
            </div>
          <UserTable  />
        </div>
    </div>
  )
}