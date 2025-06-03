import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Engajamento() {
  const dados = [
    { valor: 12500, sufixo: "K+", descricao: "Avaliadores ativos" },
    { valor: 350, sufixo: "+", descricao: "Empresas parceiras" },
    { valor: 45000, sufixo: "K+", descricao: "Avaliações realizadas" },
    { valor: 2.5, sufixo: "M", descricao: "Tokens distribuídos" },
  ];

  const empresas = [
  { nome: "Senac", icon: "/png/senac-logo.png" },
  { nome: "Transfero", icon: "/svg/transfero.svg" },
  { nome: "Apuki", icon: "/svg/partners/apuki.svg" },
];


  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section className="bg-gradient-to-b from-[#0f1129] via-[#0c0e24] to-[#050618] text-white py-20 px-4">



      <div className="max-w-7xl mx-auto">

        {/* Métricas */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {dados.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 2, delay: index * 0.2 }}
              className="bg-[#1b1e33] rounded-xl p-6 text-center border border-[#2a2e45]"
            >
              <h3 className="text-sm sm:text-2xl md:text-3xl font-extrabold mb-3 bg-gradient-to-r from-[#3f80f6] to-[#895df6] bg-clip-text text-transparent">

                {inView ? (
                  <CountUp
                    end={item.valor}
                    duration={2}
                    suffix={item.sufixo}
                    decimals={item.sufixo === "M" ? 1 : 0}
                  />
                ) : (
                  "0"
                )}
              </h3>
              <p className="text-gray-300 mt-2">{item.descricao}</p>
            </motion.div>
          ))}
        </div>

        {/* Título e descrição */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">Empresas Parceiras</h2>
          <p className="text-gray-400">
            Estas empresas já confiam em nossa plataforma para obter feedback valioso de <br/> usuários reais.
          </p>
        </div>

        {/* Empresas patrocinadoras com ícone e animação */}
<div className="flex justify-center flex-wrap gap-6">
  {empresas.map((empresa, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2, delay: index * 0.2 }}
      className="bg-[#1b1e33] py-6 px-8 rounded-xl w-56 h-20 flex items-center justify-center"
    >
      <img
        src={empresa.icon}
        alt={empresa.nome}
        className="max-h-12 w-auto object-contain"
      />
    </motion.div>
  ))}
</div>

      </div>
    </section>
  );
}
