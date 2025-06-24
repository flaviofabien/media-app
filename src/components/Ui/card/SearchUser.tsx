import ButtonPrimary from "../Button/BuutonPrimary";

type Props = {
    title : string
    text : string
}

export default function SearchUser ({title , text } : Props) {
    return (
        <div className="flex justify-between items-center mt-4 mb-6">
                <h1 className="text-2xl font-semibold text-gray-800"> {title} </h1>
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search User"
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-color-base focus:border-transparent text-sm"
                    />
                    <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  </div>
                  <ButtonPrimary text={text} />
                </div>
              </div>
    )
}