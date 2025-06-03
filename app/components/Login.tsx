import logofeedtoken from "@/public/logo.png";
import Image from "next/image";


interface TituloProps {
    label: string;
    placeholder: string;
    texto: string;
}

export default function LoginPage() {
    return (
      <div className="flex items-center justify-between p-5 bg-white">
       <Image
       src={logofeedtoken}
       alt="FeedToken Logo"
       className="w-10 h-12 rounded-full object-cover mb-4"/>
       <h1 className="text-3xl font-bold text-purple-500 mb-4 gap-">FeedToken</h1>
      </div>
    );
  }
  
export function Entrar({ label, placeholder }: TituloProps) {
    return(
        <form className="w-full max-w-xs space-y-4">
             <label className="block text-gray-700 mb-1 font-bold">{label}</label>
             <input
            type="text"
            className="w-full px-4 py-2 border-2 border-purple-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 text-black bg-white"
            placeholder= {placeholder}
          />
        </form>
    )
}

export function Senha({label, placeholder}: TituloProps){
    return(
        <form className="w-full max-w-xs space-y-4 mt-4">
            <label className="block text-gray-700 mb-1 font-bold">{label}</label>
            <input 
            type="password" 
            className="w-full px-4 py-2 border-2 border-purple-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 text-black bg-white" 
          placeholder={placeholder}
          /> 

        </form>
    )
}

export function BotaoEntrar({texto}: TituloProps){
    return(
        <button type="submit"
        className="w-64 py-2 font-semibold text-white rounded-md bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 transition mt-9 mx-auto block">{texto}</button>
    )
}