import { Botao1, Botao2 } from "@/app/components/Botao";
import CardGenerico from "@/app/components/card";
import pontoazul from "@/public/svg/pontoazul.svg";
import pontoroxo from "@/public/svg/pontoroxo.svg";
import pontoaroxoazul from "@/public/svg/pontoroxoazul.svg";

export default function PlansPage(){
    
    return( 
        <div className="flex flex-col bg-zinc-100 h-screen justify-center items-center">
            <h1 className="mb-20 font-extrabold text-3xl  text-violet-700 uppercase">Conheça nossos Planos</h1>
            <div className="flex h-fit gap-11">
        <CardGenerico ClassName="bg-violet-600 mt-5 drop-shadow-lg" imagem={pontoazul} titulo="Plano Start" descricao="Ideal para empresas que estão começando a testar o poder do feedback com recompensa.
Inclui:" lista={["25 tokens para distribuir entre participantes", "Até 5 questionários ou campanhas de comentários por mês","Painel básico de respostas","Suporte via e-mail","Relatórios mensais simplificados"]}
 botao={<Botao2 texto="Ver Plano"/>}/>
 <CardGenerico ClassName="bg-violet-900 drop-shadow-lg" imagem={pontoroxo} titulo="Plano Pro" descricao="Ideal para empresas que estão começando a testar o poder do feedback com recompensa.
Inclui:" lista={["25 tokens para distribuir entre participantes", "Até 5 questionários ou campanhas de comentários por mês","Painel básico de respostas","Suporte via e-mail","Relatórios mensais simplificados"]}
 botao={<Botao1 texto="Ver Plano"/>}/>
 <CardGenerico ClassName="bg-violet-600 mt-5 drop-shadow-lg" imagem={pontoaroxoazul} titulo="Plano Start" descricao="Ideal para empresas que estão começando a testar o poder do feedback com recompensa.
Inclui:" lista={["25 tokens para distribuir entre participantes", "Até 5 questionários ou campanhas de comentários por mês","Painel básico de respostas","Suporte via e-mail","Relatórios mensais simplificados"]}
 botao={<Botao2 texto="Ver Plano"/>}/>
            </div>
        </div>
    )

}