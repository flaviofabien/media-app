type Props = {
    title : string
    shadow ?: boolean
}
export default function TitlePrimary({title,shadow}: Props) {
  return (
    <h1 className={`${shadow ? "" : "shadow-lg"} rounded-lg border-b-4  border-white bg-white   text-center text-2xl font-bold p-2 m-2  `}>{title}</h1>
    )
}