import React from 'react';
import { motion } from 'framer-motion';

type Pergunta = {
  titulo: string;
  descricao: string;
  respostas: string[];
};

type State = {
  respostasSelecionadas: { [key: number]: string };
};

class Questionario extends React.Component<{}, State> {
  perguntas: Pergunta[];

  constructor(props: {}) {
    super(props);

    this.perguntas = [
      {
        titulo: 'Com que frequência você utiliza nosso aplicativo?',
        descricao: 'Selecione a opção que melhor descreve seu uso.',
        respostas: [
          'Diariamente',
          'Algumas vezes por semana',
          'Algumas vezes por mês',
          'Raramente',
          'Esta é minha primeira vez'
        ]
      }
    ];

    this.state = {
      respostasSelecionadas: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.renderPergunta = this.renderPergunta.bind(this);
  }

  handleChange(perguntaIndex: number, resposta: string) {
    const novasRespostas = { ...this.state.respostasSelecionadas };
    novasRespostas[perguntaIndex] = resposta;
    this.setState({ respostasSelecionadas: novasRespostas });

    // Espera 2 segundos e redireciona
    setTimeout(() => {
      window.location.href = '/'; // substitua pela URL que quiser
    }, 1000);
  }

  renderPergunta(pergunta: Pergunta, index: number) {
    return (
      <div
        key={index}
        className="bg-[#1b1e33] text-white p-6 rounded-2xl shadow-md w-full max-w-2xl mx-auto mb-8"
      >
        <div className="flex items-center mb-2">
          <span className="bg-blue-900 text-blue-400 text-sm font-semibold px-3 py-1 rounded-full mr-2">
            Pergunta {index + 1}
          </span>
          <h3 className="text-lg font-semibold">{pergunta.titulo}</h3>
        </div>
        <p className="text-gray-400 mb-6">{pergunta.descricao}</p>

        <div className="space-y-3">
          {pergunta.respostas.map((resposta, idx) => {
            const isSelected = this.state.respostasSelecionadas[index] === resposta;

            return (
              <label
                key={idx}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-colors
                  ${isSelected ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' : 'bg-[#1F1F1F] hover:bg-[#2A2A2A]'}
                `}
              >
                <input
                  type="radio"
                  className="hidden"
                  name={`pergunta-${index}`}
                  value={resposta}
                  checked={isSelected}
                  onChange={function(this: Questionario) {
                    this.handleChange(index, resposta);
                  }.bind(this)}
                />
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
                    ${isSelected ? 'border-white' : 'border-gray-400'}
                  `}
                >
                  {isSelected && (
                    <motion.div
                      layoutId={`check-${index}-${idx}`}
                      className="w-2.5 h-2.5 bg-white rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: 'spring',
                        stiffness: 500,
                        damping: 30
                      }}
                    />
                  )}
                </div>
                <span className="text-sm">{resposta}</span>
              </label>
            );
          })}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="bg-black min-h-screen py-10">
        {this.perguntas.map(this.renderPergunta)}
      </div>
    );
  }
}

export default Questionario;
