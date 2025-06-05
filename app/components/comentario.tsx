'use client';

import React, { useState } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ComentarioBox = () => {
  const [comentario, setComentario] = useState('');
  const [toast, setToast] = useState<{ type: 'success' | 'warning'; message: string } | null>(null);
  const maxChars = 500;

  const handleSubmit = () => {
    if (comentario.trim().length === 0) {
      setToast({ type: 'warning', message: 'Digite um comentário antes de enviar' });
      setTimeout(() => setToast(null), 5000);
      return;
    }

    setToast({ type: 'success', message: 'Comentário enviado com sucesso' });
    setComentario('');
    setTimeout(() => setToast(null), 5000);
  };

  return (
    <>
      {/* Toast de feedback no topo */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-lg shadow-lg flex items-center gap-2
              ${toast.type === 'success' ? 'bg-green-600 text-white' : 'bg-yellow-500 text-black'}`}
          >
            {toast.type === 'success' ? (
              <CheckCircle size={20} />
            ) : (
              <AlertCircle size={20} />
            )}
            <span className="text-sm font-medium">{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Caixa de comentário */}
      <div className="bg-[#1E1E2F] text-white p-5 rounded-xl border border-gray-700 relative max-w-xl w-full">
        <h2 className="text-lg font-semibold mb-3">Seu depoimento</h2>
        <textarea
          value={comentario}
          onChange={(e) => {
            if (e.target.value.length <= maxChars) {
              setComentario(e.target.value);
            }
          }}
          placeholder="Compartilhe sua experiência com o produto..."
          className="w-full h-32 p-4 rounded-lg bg-[#161622] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />
        <div className="flex justify-between items-center mt-2">
          <span className="text-sm text-gray-400">{comentario.length}/{maxChars}</span>
          <button
            onClick={handleSubmit}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition"
          >
            Enviar
          </button>
        </div>
      </div>
    </>
  );
};

export default ComentarioBox;
