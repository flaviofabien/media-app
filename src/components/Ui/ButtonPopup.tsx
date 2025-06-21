type Props = {
    id : string,
    label : string
}
export default function ButtonPopup({id,label}: Props) {
  return (
    <button className='bg-yellow-400 font-bold p-2 rounded-lg hover:bg-yellow-300'>ID {label} : <span className='font-black text-gray-600'>{id}</span></button>

  )
}