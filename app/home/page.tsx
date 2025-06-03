import { Botao1, Botao2,} from "../components/Botao";

export default function HomePage() {
    return (
        <div className="bg-white h-screen w-screen p-2">
            <Botao1 texto="Entrar"/>
            <Botao2 texto="Cadastrar"/>
        </div>

    )
}