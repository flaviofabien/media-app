import { VscLoading } from "react-icons/vsc";

export default function LoaderPage() {
  return (
    <div className="w-full h-screen fixed top-0 flex justify-center items-center">
        <div className="w-40 h-40 rounded-full bg-color-base flex justify-center items-center">
            <VscLoading className="animate-spin text-black inline-block" size={80} />
        </div>
    </div>
  )
}