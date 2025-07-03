import { Link } from "react-router-dom";

export default function ButtonPrimary ( {text,link} : {text:string,link : string} ) {
    return (
        <Link to={link} className="bg-color-base hover:bg-amber-500 text-white font-medium py-2 px-4 rounded-md shadow-sm transition duration-200 ease-in-out">
            {text}
        </Link>
    )
}