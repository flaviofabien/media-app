type Props = {
    label : string
}

export default function TitleText({label} : Props) {
  return (
    <div  className="w-full flex justify-center ">
      <h1 className="w-[500px] text-center text-2xl font-bold p-4 bg-yellow-400 text-black">{label} </h1>
    </div>
  )
}
