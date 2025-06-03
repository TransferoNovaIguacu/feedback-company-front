import LoginPage, { BotaoEntrar, Entrar, Senha } from "../components/Login"

export default function PageLogin() {
    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
            <LoginPage/>
            <Entrar label="Login" placeholder="Digite seu login" texto={""}/>
            <Senha label="Senha" placeholder="Digite sua senha" texto={""}/>
            <BotaoEntrar texto="Entrar" label={""} placeholder={""}/>
        
        </div>
    )
}

