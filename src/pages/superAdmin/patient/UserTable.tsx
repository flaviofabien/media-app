import Pagination from "../../../components/Ui/Pagination";
import TableRow from "../../../components/Ui/tableaux/Tableaux";
import { users } from "../../../components/constant/User.";


function UserTable() {

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-emerald-600 transition duration-150 ease-in-out" />
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              User Role
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users.map(user => (
            <TableRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>

      <Pagination totalUsers={56} usersPerPage={7} currentPage={1} />
    </div>
  );
}

export default UserTable;