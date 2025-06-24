

type props = {
  totalUsers : number,
  usersPerPage : number ; 
  currentPage : number
}

function Pagination({ totalUsers, usersPerPage, currentPage } : props) {
  const totalPages = Math.ceil(totalUsers / usersPerPage);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const displayPages = [10, 11, '-', 25, 26]; 
  console.log(pages);
  

  return (
    <div className="flex justify-end items-center py-3 px-6 text-sm text-gray-700">
      <div className="mr-4">
        displaying page <span className="font-medium">First</span>
      </div>
      <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
        <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
          <span className="sr-only">Previous</span>
          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </a>
      
        {displayPages.map((page, index) => (
          page === '-' ? (
            <span key={index} className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
              ...
            </span>
          ) : (
            <a
              key={index}
              href="#"
              className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium ${
                page === currentPage ? 'bg-emerald-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {page}
            </a>
          )
        ))}

        <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
          <span className="sr-only">Next</span>
          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10l-3.293-3.293a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </a>
      </nav>
      <div className="ml-4">
        <span className="font-medium">Last</span>
      </div>
    </div>
  );
}

export default Pagination;