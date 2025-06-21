import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";

import AlertSucces from "../Alert/AlertSucces";
import { useNavigate } from "react-router-dom";

type Props = {
    title : string,
    message: string,
    modal : {
        modal : boolean,
        id? : string
    }
    setModal : React.Dispatch<React.SetStateAction<{
        modal: boolean;
        id?: string;
    }>>
    fonction : (id: string) => Promise<any>
    navigation : string
}

export default function ModalDeleteConfirm({navigation,title,message, modal,setModal,fonction}: Props) {
    const QueryClient = useQueryClient()
    const navigate = useNavigate()
    const [active,setActive] = useState(false)

    const AlertClose = () => {setActive(false);navigate(navigation)}
    const AlertShow = () => setActive(true)
  
    const mutation = useMutation(
        (id : string ) => fonction(id),
        {
            onSuccess() {
                QueryClient.invalidateQueries()
                AlertShow()
            }
        }
     )

    const handleDelete = (id? : string ) => {
        if(id) {
            mutation.mutate(id)
            setModal( {id : modal.id,modal : false} )
        }
     } 
    return (
    <>
    <AlertSucces
      message="Suppresion d'un nouvelle Patient est reussi avec succes" 
      title="Patient" 
      visible={active} 
      onClose={AlertClose}
     />
    { modal.modal && 
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg p-5 w-4/5 md:w-1/3 text-center">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">{title}</h2>
            <p className="text-base text-gray-600 mb-6">{message}</p>
            <button onClick={() => handleDelete(modal.id)} className="bg-black py-2 px-8 rounded-md text-white text-lg mr-4 hover:bg-opacity-70">Oui</button>
            <button onClick={() => {setModal( {id : modal.id,modal : false} )
            }}
            className="bg-yellow-400 py-2 px-8 rounded-md text-white text-lg hover:bg-yellow-300 "
            >
            Non
            </button>
        </div>
    </div>
    }
    </>
  )
}