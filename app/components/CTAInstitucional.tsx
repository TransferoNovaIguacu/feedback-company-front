// Importa os dois componentes de botão personalizados
import { Botao1, Botao2 } from "./Botao";

// Define e exporta o componente funcional CTA (Call To Action)
export default function CTA() {
    return (
        // Container principal do CTA com layout em coluna e um gradiente de fundo roxo-azulado
        // `h-screen` faz ele ocupar a altura total da tela, mas `h-2/3` foi colocado depois — ele sobrescreve `h-screen`, ou seja, ocupa 2/3 da altura da tela
        <div className="flex flex-col bg-gradient-to-t from-indigo-950 to-indigo-950 h-fit">

            {/* Centraliza o conteúdo vertical e horizontalmente com margin auto e centraliza o texto */}
            <div className="m-auto py-20 text-white text-center">

                {/* Título principal */}
                <h1 className="text-4xl font-bold text-center mt-8">
                    Pronto para começar?
                </h1>

                {/* Parágrafo explicativo abaixo do título com tamanhos adaptáveis, cor cinza clara, margem inferior e superior */}
                <p className="text-lg md:text-xl leading-relaxed mb-8 text-gray-300 mt-5">
                    Junte-se à nossa comunidade de avaliadores e comece a ganhar tokens hoje mesmo, ou solicite avaliações para o seu negócio.
                </p>

                {/* Container dos botões — em coluna no mobile, lado a lado no desktop (usando `md:flex-row`) */}
                {/* `gap-5` adiciona espaçamento entre os botões */}
                <div className="flex flex-col md:flex-row justify-center gap-5 py-3 px-1 mb-9">

                    {/* Define que o botão só ocupa a largura do conteúdo interno */}
                    <a href="/auth/register" className="w-fit">
                        <Botao1 texto={"Cadastre-se como Avaliador."} />
                    </a>

                    {/* Segundo botão com o mesmo ajuste de largura */}
                    <a href="/en-construcao" className="w-fit">
                        <Botao2 texto={"Sou uma empresa."} />
                    </a>

                </div>
            </div>
        </div>
    )
}
