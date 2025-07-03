type Props = {
    label : string
}

export default function TitleText({label} : Props) {
  return (
    <div  className="w-full my-4">
      <h1 className="w-[500px] text-start text-xl font-semibold  text-black">{label} </h1>
    </div>
  )
}
