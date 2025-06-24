import Breadcrumbs from '../../../components/Ui/card/Breadcrumbs'
import HeaderBarAdmin from '../../../components/header/Header'
import Menu from '../../../components/menu/Menu'
import UserTable from './UserTable'

type Props = {}

export default function Patient({}: Props) {
  return (
    <div className='flex flex-row justify-between'>
        <Menu />
        <div className='w-full mx-8 mt-8'>
          <HeaderBarAdmin />
            <div className="p-6">
              <Breadcrumbs />
              <div className="flex justify-between items-center mt-4 mb-6">
                <h1 className="text-2xl font-semibold text-gray-800">User Management</h1>
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search User"
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
                    />
                    <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  </div>
                  <button className="bg-amber-400 hover:bg-amber-500 text-white font-medium py-2 px-4 rounded-md shadow-sm transition duration-200 ease-in-out">
                    Add User
                  </button>
                </div>
              </div>
            </div>
          <UserTable  />
        </div>
    </div>
  )
}