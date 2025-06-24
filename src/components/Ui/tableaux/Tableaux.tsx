
type Props = {
  user : any
}
export default function TableRow({ user } : Props) {
  const renderRoleBadge = (role : string) => {
    let bgColor = 'bg-gray-200'; 
    let textColor = 'text-gray-700';

    if (role === 'Manager') {
      bgColor = 'bg-amber-100';
      textColor = 'text-amber-800';
    } else if (role === 'Admin') {
      bgColor = 'bg-sky-100';
      textColor = 'text-sky-800';
    } else if (role === 'Auditor') {
      bgColor = 'bg-emerald-100';
      textColor = 'text-emerald-800';
    }

    return (
      <span key={role} className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${bgColor} ${textColor} mr-2`}>
        {role}
      </span>
    );
  };

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <input type="checkbox" className="form-checkbox h-4 w-4 text-color-base transition duration-150 ease-in-out" />
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img className="h-10 w-10 rounded-full" src={user.avatar} alt={`${user.name} avatar`} />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{user.name}</div>
            <div className="text-sm text-gray-500">{user.email}</div>
            {!user.isLoggedIn && (
              <div className="text-xs text-red-500 mt-1">Not Logged In</div>
            )}
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex flex-wrap">
          {user.roles.map(renderRoleBadge)}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <div className="flex items-center space-x-4">
          <a href="#" className="text-sky-600 hover:text-sky-900 flex items-center text-sm">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
            
          </a>
          <a href="#" className="text-red-600 hover:text-red-900 flex items-center text-sm">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
            
          </a>
        </div>
      </td>
    </tr>
  );
}