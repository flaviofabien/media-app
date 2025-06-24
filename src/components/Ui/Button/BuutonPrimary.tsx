export default function ButtonPrimary ( {text} : {text:string} ) {
    return (
        <button className="bg-color-base hover:bg-amber-500 text-white font-medium py-2 px-4 rounded-md shadow-sm transition duration-200 ease-in-out">
            {text}
        </button>
    )
}