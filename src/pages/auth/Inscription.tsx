import { Link, useNavigate } from "react-router-dom";
import {useForm} from "react-hook-form"
import { useMutation, useQueryClient} from "react-query";
import { useState } from "react";
import Input from "../../components/Ui/Input/Input";
import { RegisterUser } from "../../api/Auth";
import InputSubmit from "../../components/Ui/Input/InputSubmit";
import InputSelect from "../../components/Ui/Input/InputSelect";
import InscriptionImg from "../../assets/Inscription.png";

export default function Inscription() {
  const { register,formState : {errors },handleSubmit,setError,clearErrors } = useForm();
  const navigate = useNavigate() ;
  const queryClient = useQueryClient();
  const [errorServer ,setErrorServer] = useState()
  const mutation = useMutation(RegisterUser, {
    onSuccess: () => {
      queryClient.invalidateQueries('users');
      navigate("/Connexion")
    },
    onError: (error : any) => {
      setErrorServer(error.response.data.message)
    }
  });


  const onSubmit = (formData: any) => {
    if (formData.password !== formData.password_confirm ) {
      setError('password_confirm', {
        type: 'manual',
        message: "Les mot de passe sont identique."
      });
      return;
    }
    clearErrors('password_confirm');
    const newUser = new FormData();
    
    newUser.append("nom", formData.nom);
    newUser.append("img", formData.img[0]);
    newUser.append("email", formData.email);
    newUser.append("password", formData.password);
    newUser.append("prenom", formData.prenom);
    newUser.append("telephone", formData.telephone);
    newUser.append("role", formData.role);
    newUser.append("proffession", formData.proffession);
    newUser.append("adress", formData.adress);

    console.log(newUser.getAll);
    
    mutation.mutate(newUser);
  };

  return (
    <>
      <div className=" w-full flex justify-center items-center h-screen">
        <img className="object-cover absolute w-full h-full top-0 -z-10" src={InscriptionImg} alt="" />
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-[900px] w-full bg-gray-200 rounded-xl p-8 shadow-2xl ">
        <h1 className="my-4 mt-8 text-2xl font-bold">Inscription</h1>
        {errorServer && <h1 className="p-2 bg-red-600 text-red-500 bg-opacity-10 text-center"> {errorServer} </h1> }
          <p className="absolute bg-white -translate-y-2">Information</p>
          <div className="flex lg:justify-between gap-5 flex-wrap  p-4 border-2 border-black">
            <Input label="Nom" register={register("nom",{
              required : 'Nom est requise'
            })} error={errors.username?.message}/>
            <Input label="Prenom" register={register("prenom",{
              required : 'Prenom est requise'
            })} error={errors.prenom?.message}/>
            <Input label="Telephone" register={register("telephone",{
              required : 'Telephone est requise'
            })} error={errors.telephone?.message}/>
          </div>
          <p className="absolute bg-white translate-y-6">Plus</p>
          <div className="flex lg:justify-between gap-5 flex-wrap p-4 border-2 mt-8  border-black">
            <Input label="Addresse" register={register("adress",{
              required : 'Addresse est requise'
            })} error={errors.adress?.message}/>
            <InputSelect data={["Docteur","Accueille","Infirmiere","Professeur","Sage Femme"]} label="Proffession" register={register("proffession",{
                            required : 'Proffession est requise'
            })} error={errors.adress?.message}/>
          </div>
            <Input type="file" label="Image" register={register("img",{
              required : "Image est requis"
            })} error={errors.img?.message}/>
          <p className="absolute bg-white translate-y-6">Securité</p>
          <div className="flex lg:justify-between gap-5 flex-wrap p-4 border-2 mt-8  border-black">
            <Input label="Email" register={register("email",{
              pattern : {
                value : /[a-zA-Z0-9.]+@[a-zA-Z0-9.]+\.[a-zA-Z0-9.]/,
                message : "l'email est incorrect"
              }
            })} error={errors.email?.message}/>
            <Input show={true} type={"password"} label="Mot de passe" register={register("password",{
              pattern :{
                value : /[a-zA-Z0-9]/,
                message : "Mot de passe est tres faible"
              }
            })} error={errors.password?.message}/>
            <Input show={true} type={"password"} label="Confirmation de mot de passe" register={register("password_confirm",{
              pattern : {
                value : /[a-zA-Z0-9]/,
                message : "confirmation mot de passe est tres faible"
              }
            }
            )} error={errors.password_confirm?.message}/>
          </div>
            <InputSubmit />
          <p className="mt-4">J'ai un autre compte <Link className="text-gray-600 underline" to={"/connexion"}>Connecter ici</Link></p>
        </form>
      </div>
    </> 
  )
}