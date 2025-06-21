type Props = {}

export default function InputSubmit({}: Props) {
  return (
    <div className="w-full text-center py-4">
        <button className="bg-white px-16 py-4 rounded-lg shadow-lg hover:bg-zinc-100 font-bold text-xl" type="submit" >Envoyer</button>
    </div>
  )
}