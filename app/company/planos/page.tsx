import { Botao1, Botao2 } from "@/app/components/Botao";
import CardGenerico from "@/app/components/card";
import pontoazul from "@/public/svg/pontoazul.svg";
import pontoroxo from "@/public/svg/pontoroxo.svg";
import pontoaroxoazul from "@/public/svg/pontoroxoazul.svg";

export default function PlansPage() {
  return (
    <div className="flex flex-col bg-zinc-200 h-screen justify-center items-center">
      <h1 className="mb-20 font-extrabold text-3xl  text-violet-700 uppercase">
        Conheça nossos Planos
      </h1>
      <div className="flex h-fit gap-5">
        <CardGenerico
          ClassName="bg-violet-600 mt-5 drop-shadow-lg transition-all duration-300 hover:scale-105 hover:drop-shadow-2xl"
          imagem={pontoazul}
          titulo="Plano Start"
          descricao="Ideal para empresas que estão começando a testar o poder do feedback com recompensa. Inclui:"
          lista={[
            "25 tokens para distribuir entre participantes",
            "Até 5 questionários ou campanhas de comentários por mês",
            "Painel básico de respostas",
            "Suporte via e-mail",
            "Relatórios mensais simplificados",
          ]}
          botao={<Botao2 className="bg-opacity-40 hover:bg-opacity-40" texto="Adquirir plano" />}
        />
        <CardGenerico
          ClassName="bg-violet-900 drop-shadow-lg hover:drop-shadow-2xl hover:scale-105 transition-all duration-300"
          imagem={pontoroxo}
          titulo="Plano Pro"
          descricao="Ideal para empresas que estão começando a testar o poder do feedback com recompensa. Inclui:"
          lista={[
            "25 tokens para distribuir entre participantes",
            "Até 5 questionários ou campanhas de comentários por mês",
            "Painel básico de respostas",
            "Suporte via e-mail",
            "Relatórios mensais simplificados",
          ]}
          botao={<Botao1 texto="Adquirir plano" />}
        />
        <CardGenerico
          ClassName="bg-violet-600 mt-5 drop-shadow-lg transition-all duration-300 hover:scale-105 hover:drop-shadow-2xl"
          imagem={pontoaroxoazul}
          titulo="Plano Start"
          descricao="Ideal para empresas que estão começando a testar o poder do feedback com recompensa. Inclui:"
          lista={[
            "25 tokens para distribuir entre participantes",
            "Até 5 questionários ou campanhas de comentários por mês",
            "Painel básico de respostas",
            "Suporte via e-mail",
            "Relatórios mensais simplificados",
          ]}
          botao={<Botao2 className="bg-opacity-40 hover:bg-opacity-40" texto="Adquirir plano" />}
        />
      </div>
    </div>
  );
}
