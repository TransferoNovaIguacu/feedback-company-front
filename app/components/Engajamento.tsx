"use client"

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

export default function Engajamento() {
  const dados = [
    { valor: 125, sufixo: "K+", descricao: "Avaliadores ativos" },
    { valor: 350, sufixo: "+", descricao: "Empresas parceiras" },
    { valor: 45, sufixo: "K+", descricao: "Avaliações realizadas" },
    { valor: 2.5, sufixo: "M", descricao: "Tokens distribuídos" },
  ];

  const empresas = [
    { nome: "Senac", icon: "/svg/senac-logo-branca.svg" },
    { nome: "Transfero", icon: "/svg/transfero_white.svg" },
    { nome: "Apuki", icon: "/png/apuki.png" },
  ];

  const [ref, inView] = useInView({ threshold: 0.3 });
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (inView) {
      // Gera um novo key a cada vez que a seção entra na tela
      setAnimationKey(prev => prev + 1);
    }
  }, [inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="bg-[#111429] text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Métricas */}
        <div ref={ref} key={animationKey} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {dados.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#1b1e33] rounded-xl p-6 text-center border border-[#2a2e45]"
            >
              <h3 className="text-2xl font-extrabold text-[#7b8fff]">
                <CountUp
                  key={animationKey + "-" + index}
                  end={item.valor}
                  duration={2}
                  suffix={item.sufixo}
                  decimals={item.sufixo === "M" ? 1 : 0}
                />
              </h3>
              <p className="text-gray-300 mt-2">{item.descricao}</p>
            </motion.div>
          ))}
        </div>

        {/* Título e descrição */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">Empresas Parceiras</h2>
          <p className="text-gray-400">
            Estas empresas já confiam em nossa plataforma para obter feedback valioso <br></br> de usuários reais.
          </p>
        </div>

        <motion.div
  className="flex justify-center flex-wrap gap-6"
  variants={containerVariants}
  initial="hidden"
  animate="visible"
  key={"empresas-" + animationKey}
>
  {empresas.map((empresa, index) => (
    <motion.div
      key={index}
      variants={cardVariants}
      className="bg-[#1b1e33] rounded-xl w-72 h-28 flex items-center justify-center overflow-hidden"
    >
      <img
        src={empresa.icon}
        alt={empresa.nome}
        className="w-52 h-full object-contain"
      />
    </motion.div>
  ))}
</motion.div>


      </div>
    </section>
  );
}
