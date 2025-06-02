import { Botao1, Botao2,} from "../components/Botao";
import { Parag } from "../components/Paragrafo";
import { Parag2 } from "../components/Paragrafo2";
import { Rodape } from "../components/Rodape";
import {Titulo,} from "../components/Titulo";

export default function HomePage() {
    return (
        <div className="bg-white h-screen w-screen p-2">
            <Titulo texto="Mariana Santos"/>
            <Parag/>
            <Parag2/>
            <Rodape/>
            <Botao1 texto="Share your experience"/>
            <Botao2 texto="Delete"/>
        </div>

    )
}