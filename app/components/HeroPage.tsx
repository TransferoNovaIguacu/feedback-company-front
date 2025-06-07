
export default function HeroPage() {
    return (
        <section className="h-2/3 flex items-center justify-center px-6 py-12 bg-[#0e1125] text-white">
            <div className="max-w-7xl w-full flex flex-col md:flex-row md:justify-between gap-8">
                {/* Sessão esquerda */}
                <div className="w-full flex flex-col justify-center">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                        Avalie e <span className="bg-gradient-to-r from-[#3f80f6] to-[#895df6] bg-clip-text text-transparent">Ganhe Tokens</span> em Troca
                    </h1>

                    <p className="text-gray-300 mb-6">
                        Conectamos empresas que precisam de feedback com <br /> avaliadores que recebem recompensas por suas opiniões <br /> sinceras.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="/auth/register"
                            className="bg-gradient-to-r from-[#3f80f6] to-[#895df6] hover:opacity-90 text-white px-6 py-3 rounded-xl font-semibold text-center"
                        >
                            Começar como Avaliador
                        </a>

                        <a
                            href="/auth/register/company"
                            className="bg-[#3a3d4f] hover:bg-[#2a2d3e] text-white px-6 py-3 rounded-xl font-semibold text-center"
                        >
                            Sou uma Empresa
                        </a>
                    </div>

                </div>

                {/* Card de Tokens */}
                <div className="md:w-2/5 w-full">
                    <div className="bg-[#1b1e33] rounded-2xl p-6 shadow-lg space-y-4">
                        {/* Header */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="bg-gradient-to-r from-[#3f80f6] to-[#895df6] w-11 h-11 rounded-full flex items-center justify-center">
                                    <img className="w-10" src="svg/store.svg" alt="" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Seus tokens</p>
                                    <p className="text-lg font-bold">1,250 FTK</p>
                                </div>
                            </div>
                            <span className="bg-gray-500 bg-opacity-40 px-3 py-1 rounded-xl text-sm font-medium flex items-center space-x-1">
                                <span className="text-green-400">+12.5%</span>
                                <span className="text-white text-opacity-85">hoje</span>
                            </span>

                        </div>

                        {/* Avaliações */}
                        <div className="space-y-2 text-sm">
                            <div className="bg-[#2a2d4f] p-3 rounded-xl flex justify-between items-center">
                                <p>
                                    <span className="opacity-60">Avaliação pendente</span><br />
                                    <span className="font-semibold">Restaurante Sabor & Arte</span>
                                </p>
                                <span className="bg-blue-600 bg-opacity-15 text-blue-300 font-bold px-3 py-1 rounded-xl text-xs">
                                    +50 FTK
                                </span>
                            </div>

                            <div className="bg-[#2a2d4f] p-3 rounded-xl flex justify-between items-center">
                                <p>
                                    <span className="opacity-60">Avaliação pendente</span><br />
                                    <span className="font-semibold">App TechSolutions</span>
                                </p>
                                <span className="bg-[#523379] bg-opacity-55 text-[#d6aaff] font-bold px-3 py-1 rounded-md text-xs">
                                    +75 FTK
                                </span>
                            </div>

                            <div className="bg-[#2a2d4f] p-3 rounded-xl flex justify-between items-center">
                                <p>
                                    <span className="opacity-60">Avaliação concluída</span><br />
                                    <span className="font-semibold">Loja Virtual MegaShop</span>
                                </p>
                                <span className="bg-green-900 text-green-400 font-bold px-3 py-1 rounded-md text-xs">
                                    Recebido
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
