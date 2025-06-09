"use client";

import { SetStateAction, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Botao1 } from "./Botao";
import api from "@/utils/axios";
import { Mission } from "../company/page";
import { fetchMissions } from "@/utils/fetchMissions";

type FormDataComentario = {
  title: string;
  url: string;
  description: string;
};

interface CriacaoComentarioProps{
  setMockData: React.Dispatch<SetStateAction<Mission[]>>
  mockData: Mission[]
}

type FormErrors = Partial<Record<keyof FormDataComentario, string>>;

export default function CriacaoComentario({mockData, setMockData}:CriacaoComentarioProps) {
  const [formData, setFormData] = useState<FormDataComentario>({
    title: "",
    url: "",
    description: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function validate(data: FormDataComentario): FormErrors {
    const newErrors: FormErrors = {};
    if (!data.title.trim()) newErrors.title = "Título é obrigatório.";
    if (!data.url.trim()) newErrors.url = "Link é obrigatório.";
    if (!data.description.trim())
      newErrors.description = "Descrição é obrigatória.";
    return newErrors;
  }

  const submitForm = async (data: FormDataComentario) => {
    const token = localStorage.getItem("TOKEN");
    const user = localStorage.getItem("USER")
    if(!user) throw new Error("Usuario não encontrado")
    const objectUser = JSON.parse(user)

    if (!token) throw new Error("Token não encontrado.");
    const plan = await api.get("plans/contracted-plans/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const response = await api.post(
      "missions/missions/",
      {
        mission_type: "FEEDBACK",
        title: data.title,
        description: data.description,
        company: objectUser.pk,
        url: data.url,
        contracted_plan: parseInt(plan.data[0].id),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    fetchMissions(setMockData)
    console.log(response.data);
    return response;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowSuccess(false);
    setErrors({});
    setLoading(true);

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }

    try {
      await submitForm(formData);
      setShowSuccess(true);
      setFormData({ title: "", url: "", description: "" });
    } catch (error) {
      console.error("Erro ao enviar solicitação:", error);
    } finally {
      setLoading(false);
      fetchMissions(setMockData);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-md max-w-4xl w-full mx-6 p-8 space-y-8"
    >
      <h2 className="text-3xl mb-5 text-black font-bold">
        Solicitar Comentários
      </h2>

      <div className="border-b border-gray-300 opacity-50 mb-6" />

      <div className="border-l-4 border-blue-500 bg-blue-50 text-blue-700 p-5 text-base rounded">
        <p>
          Preencha o formulário abaixo para solicitar comentários dos usuários
          sobre o seu site ou plataforma.
        </p>
      </div>

      <div>
        <label className="block text-gray-600 text-sm font-medium mb-1">
          Título
        </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Ex. Avalie performance"
          className={`w-full text-black border ${
            errors.title ? "border-red-500" : "border-gray-300"
          } rounded-md p-3`}
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title}</p>
        )}
      </div>

      <div>
        <label className="block text-gray-600 text-sm font-medium mb-1">
          Link da Página
        </label>
        <input
          type="text"
          name="url"
          value={formData.url}
          onChange={handleChange}
          placeholder="https://www.suaempresa.com/pagina"
          className={`w-full text-black border ${
            errors.url ? "border-red-500" : "border-gray-300"
          } rounded-md p-3`}
        />
        {errors.url && (
          <p className="text-red-500 text-sm mt-1">{errors.url}</p>
        )}
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
          className={`w-full text-black border ${
            errors.description ? "border-red-500" : "border-gray-300"
          } rounded-md p-3 h-32 resize-none`}
        />
        {errors.description && (
          <p className="text-red-500 text-sm mt-1">{errors.description}</p>
        )}
      </div>

      <div className="relative flex items-center justify-end gap-4 w-full">
        <Botao1 texto={loading ? "Publicando..." : "Publicar Pesquisa"} />
      </div>

      {showSuccess && (
        <p className="text-green-600 text-sm text-right">
          Solicitação enviada com sucesso!
        </p>
      )}
    </form>
  );
}
