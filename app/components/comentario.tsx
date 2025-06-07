'use client';

import React, { useState } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

function ComentarioBox() {
  const [titulo, setTitulo] = useState('');
  const [comentario, setComentario] = useState('');
  const [toast, setToast] = useState<{ type: 'success' | 'warning'; message: string } | null>(null);
  const maxChars = 500;
  const router = useRouter();

  function handleSubmit() {
    if (titulo.trim().length === 0) {
      setToast({ type: 'warning', message: 'Digite um título antes de enviar' });
      setTimeout(() => setToast(null), 5000);
      return;
    }

    if (comentario.trim().length === 0) {
      setToast({ type: 'warning', message: 'Digite um comentário antes de enviar' });
      setTimeout(() => setToast(null), 5000);
      return;
    }

    setToast({ type: 'success', message: 'Comentário enviado com sucesso' });
    setTitulo('');
    setComentario('');

    setTimeout(() => {
      setToast(null);
      router.push('/');
    }, 2000);
  }

  return (
    <>
      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-lg shadow-lg flex items-center gap-2
              ${toast.type === 'success' ? 'bg-green-600 text-white' : 'bg-yellow-500 text-black'}`}
          >
            {toast.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
            <span className="text-sm font-medium">{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Formulário */}
      <div className="bg-[#1E1E2F] text-white p-5 rounded-xl border border-gray-700 relative w-full max-w-2xl mx-auto sm:p-6">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Seu depoimento</h2>

        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Título"
          className="w-full mb-3 p-4 rounded-lg bg-[#161622] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
        />
        <textarea
          value={comentario}
          onChange={(e) => {
            if (e.target.value.length <= maxChars) {
              setComentario(e.target.value);
            }
          }}
          placeholder="Compartilhe sua experiência com o produto..."
          className="w-full h-32 p-4 rounded-lg bg-[#161622] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-sm sm:text-base"
        />
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-3 gap-2 sm:gap-0">
          <span className="text-sm text-gray-400">{comentario.length}/{maxChars}</span>
          <button
            onClick={handleSubmit}
            className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition text-sm sm:text-base"
          >
            Enviar
          </button>
        </div>
      </div>
    </>
  );
}

export default ComentarioBox;
