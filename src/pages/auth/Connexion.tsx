import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient} from "react-query";
import {AxiosError} from "axios";
import {  useState } from "react";
import Input from "../../components/Ui/Input/Input";
import InputSubmit from "../../components/Ui/Input/InputSubmit";
import { LoginUser } from "../../api/Auth";
import { useContextUser } from "../../stateGlobal/ContextGlobal";
import ConnexionImg from "../../assets/Connexion.png";


type Testa = {
  message : string
}

export default function Connexion() {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const navigate = useNavigate();
  const {setUser} = useContextUser()
  const [errorServer, setErrorServer] = useState<string>("");
  const queryClient = useQueryClient();

  const mutation = useMutation(LoginUser, {
    onSuccess: (value) => {
      setErrorServer("");
      queryClient.invalidateQueries('users');
      
      setUser( {tokken : value.token , user : value.user} )
      navigate("/");
    },
    onError: (error : AxiosError<Testa>) => {
      if (error.response && error.response.data) {
        setErrorServer(error.response.data.message);
      } else {
        setErrorServer("An unexpected error occurred");
      }
    }
  });

  const onSubmit = async (formData: any) => {
    mutation.mutate(formData);
  };

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <img className="object-cover absolute w-full h-full top-0 -z-10" src={ConnexionImg} alt="" />
        <form onSubmit={handleSubmit(onSubmit)} className=" h-auto bg-slate-100 rounded-xl p-8 w-[600px]">
          <h1 className="text-2xl font-bold">Connexion</h1>
          {errorServer && ( <p className="text-red-600 bg-red-600 bg-opacity-10 border-[1px] border-red-600 p-4 mt-4"> {errorServer} </p> )}
          <div className="w-full flex flex-col relative mt-4">
            <Input label="Email" register={register("email", {
              required : "Email est requise",
              pattern : {
                value : /[a-zA-Z0-9.]+@[a-zA-Z0-9.]+\.[a-zA-Z0-9.]/,
                message : "l'email est incorrect"
              }
              })} 
              error={errors.email?.message}
              css="w-[600px]"/>
            <Input show={true} label="Mot de passe" register={register("password",{
              required : "Mot de passe est requise",
              pattern : {
                value : /[a-zA-Z0-9]/,
                message : "confirmation mot de passe est tres faible"
              }
              })} 
              error={errors.password?.message}
              type="password"
              css="w-[600px]"/>
            <Link to={"/motDePasseOublie"} className="w-full text-end absolute top-[92px]  text-gray-600 text-sm">Mot de passe oublie</Link>
          </div>
          <p className="mt-4">Si vous n'avez pas de compte <Link className="text-gray-600 underline" to={"/inscription"}>Inscrire ici</Link></p>
          <InputSubmit />
        </form>
      </div>
    </>
  );
}
