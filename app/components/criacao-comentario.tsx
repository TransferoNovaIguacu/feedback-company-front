import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function CriacaoComentario() {
  const [formData, setFormData] = useState({
    companyName: "",
    pageLink: "",
    description: "",
    rewardTokens: 0,
  });

  const [requests, setRequests] = useState<any[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const router = useRouter();

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.name === "rewardTokens"
          ? parseInt(e.target.value)
          : e.target.value,
    });
  }

  function isFormValid() {
    var companyName = formData.companyName,
      pageLink = formData.pageLink,
      description = formData.description,
      rewardTokens = formData.rewardTokens;

    return (
      companyName.trim() !== "" &&
      pageLink.trim() !== "" &&
      description.trim() !== "" &&
      rewardTokens > 0
    );
  }

  function handleSubmit() {
    if (!isFormValid()) {
      setShowError(true);
      setTimeout(function () {
        setShowError(false);
      }, 3000);
      return;
    }

    setRequests([...requests, formData]);
    setFormData({
      companyName: "",
      pageLink: "",
      description: "",
      rewardTokens: 0,
    });
    setShowSuccess(true);
    setTimeout(function () {
      setShowSuccess(false);
      router.push("/"); // Ajuste a rota aqui
    }, 2000);
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-8">
      <div className="bg-white rounded-xl shadow-md max-w-4xl w-full mx-6 p-8 space-y-8">
        <h2 className="text-3xl mb-14 text-black font-bold">
          Solicitar Comentários
        </h2>

        <div className="ml-7 flex items-center gap-2 text-gray-900 text-xl font-bold">
          <Image src="/svg/predio.svg" alt="Ícone Empresa" width={24} height={24} />
          <span>Para Empresas</span>
        </div>
        <div className="border-b border-gray-300 opacity-50 mb-6" />

        <div className="border-l-4 border-blue-500 bg-blue-50 text-blue-700 p-5 text-base rounded">
          <p>
            Preencha o formulário abaixo para solicitar comentários dos usuários.
            Quanto maior a recompensa em tokens, mais usuários serão atraídos para
            comentar.
          </p>
        </div>

        <div>
          <label className="block text-gray-600 text-sm font-medium mb-1">
            Nome da Empresa
          </label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Ex: Transfero"
            className="w-full text-black border border-gray-300 rounded-md p-3"
          />
        </div>

        <div>
          <label className="block text-gray-600 text-sm font-medium mb-1">
            Link da Página
          </label>
          <input
            type="text"
            name="pageLink"
            value={formData.pageLink}
            onChange={handleChange}
            placeholder="https://www.suaempresa.com/pagina"
            className="w-full text-black border border-gray-300 rounded-md p-3"
          />
        </div>

        <div>
          <label className="block text-gray-600 text-sm font-medium mb-1">
            Descrição da Solicitação
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Descreva o que você espera dos comentários..."
            className="w-full border text-black border-gray-300 rounded-md p-3 h-32 resize-none"
          />
        </div>

        <div className="max-w-[120px]">
          <label className="text-black text-sm font-medium mb-1 flex items-center gap-1">
            Recompensa em Tokens
          </label>
          <div className="relative">
            <Image
              src="/svg/token-icon.svg"
              alt="Ícone de Token"
              width={16}
              height={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
            />
            <input
              type="number"
              name="rewardTokens"
              value={formData.rewardTokens}
              onChange={handleChange}
              className="w-full border text-black border-gray-300 rounded-md p-3 pl-9"
            />
          </div>
        </div>

        {/* Container do botão e pop-up */}
        <div className="relative flex items-center justify-end gap-4 w-full">
          {(showSuccess || showError) && (
            <div
              className={`absolute flex items-start gap-2 px-4 py-3 rounded-md shadow-md text-sm w-max
              ${
                showSuccess
                  ? "bg-green-50 border border-green-300 text-green-800"
                  : "bg-red-50 border border-red-300 text-red-800"
              }`}
              style={{
                top: "100%",
                left: "50%",
                transform: "translateX(-50%)",
                marginTop: "8px",
                maxWidth: "90vw",
                width: "max-content",
                overflowWrap: "break-word",
                zIndex: 10,
              }}
            >
              <svg
                className="w-5 h-5 mt-0.5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {showSuccess ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                )}
              </svg>
              <span>
                {showSuccess
                  ? "Solicitação publicada com sucesso!"
                  : "Por favor, preencha todos os campos corretamente."}
              </span>
            </div>
          )}

          <button
            onClick={handleSubmit}
            className="bg-blue-600 flex items-center gap-2 hover:bg-blue-700 text-white rounded-md py-3 px-6 font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Publicar solicitação
          </button>
        </div>
      </div>
    </div>
  );
}
