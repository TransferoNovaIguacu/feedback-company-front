"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import InputMask from "react-input-mask";
import Image from "next/image";
import Head from "next/head";
import backgroundft from "@/public/png/backgroundft.png";
import logoo from "@/public/svg/logoo.svg";
import { Botao1 } from "@/app/components/Botao";
import {
  FormDataPayloadRegisterCompany,
  validationFormDataRegisterCompany,
} from "@/utils/verifyForms";
import api from "@/utils/axios";

type FormErrorsRegisterCompany = Partial<
  Record<keyof FormDataPayloadRegisterCompany, string>
>;

export default function RegistroEmpresa() {
  const [errors, setErrors] = useState<FormErrorsRegisterCompany>({});
  const [loading, setLoading] = useState<boolean>(false)
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true)
    e.preventDefault();
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const raw = Object.fromEntries(formData.entries());

    const data: FormDataPayloadRegisterCompany = {
      commercial_name: String(raw.name ?? "").trim(),
      legal_name: String(raw.legal_name ?? ""),
      cnpj: String(raw.cnpj ?? "").trim(),
      email: String(raw.email ?? "").trim(),
      password1: String(raw.password ?? ""),
      password2: String(raw.confirmPassword ?? ""),
    };

    const validationErrors = validationFormDataRegisterCompany(data);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false)
      return;
    }

    try {
      const response = await api.post("auth/register/company/", data);
      console.log(response);
      router.push('/auth/login')
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false)
    }
  };

  return (
    <>
      <Head>
        <title>Registrar Empresa | FeedToken</title>
      </Head>
      <div className="flex flex-col md:flex-row h-screen text-purple-950 bg-white overflow-y-hidden">
        {/* Lado esquerdo: visível só no desktop */}
        <a
          href="/"
          className="hidden md:block md:w-1/2 bg-gradient-to-t from-primary to-secondary relative cursor-pointer"
        >
          <Image
            src={backgroundft}
            alt="Ethereum background"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-5xl font-bold"></h1>
          </div>
        </a>

        {/* Lado direito: ocupa tudo no mobile, metade no desktop */}
        <div className="w-full h-full md:w-1/2 flex items-center justify-center bg-white">
          <div className="w-full max-w-md px-6 py-4">
  <div className="flex items-center mb-4">

              <Image
                src={logoo}
                alt="FeedToken logo"
                width={40}
                height={40}
                className="mr-3"
              />
              <h2 className="text-2xl font-semibold text-primary">FeedToken</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-2">
              <div>
                <label className="block text-sm font-medium text-purple-700">
                  Nome comercial
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Nome fantasia da empresa"
                  className={`mt-1 block w-full rounded-md border px-4 py-2 text-black shadow-sm focus:ring-primary focus:border-primary ${
                    errors.commercial_name
                      ? "border-red-500"
                      : "border-purple-700"
                  }`}
                  aria-invalid={!!errors.commercial_name}
                  aria-describedby={
                    errors.commercial_name ? "name-error" : undefined
                  }
                />
                {errors.commercial_name && (
                  <p id="name-error" className="text-red-500 text-sm mt-1">
                    {errors.commercial_name}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-purple-700">
                  Razão social
                </label>
                <input
                  type="text"
                  name="legal_name"
                  placeholder="Razão social da empresa"
                  className={`mt-1 block w-full rounded-md border px-4 py-2 text-black shadow-sm focus:ring-primary focus:border-primary ${
                    errors.legal_name ? "border-red-500" : "border-purple-700"
                  }`}
                  aria-invalid={!!errors.legal_name}
                  aria-describedby={
                    errors.legal_name ? "name-error" : undefined
                  }
                />
                {errors.legal_name && (
                  <p id="name-error" className="text-red-500 text-sm mt-1">
                    {errors.legal_name}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-purple-700">
                  CNPJ
                </label>
                <InputMask mask="99.999.999/9999-99" maskChar="">
                  {(inputProps: any) => (
                    <input
                      {...inputProps}
                      type="text"
                      name="cnpj"
                      placeholder="00.000.000/0001-00"
                      className={`mt-1 block w-full rounded-md border px-4 py-2 text-black shadow-sm focus:ring-primary focus:border-primary ${
                        errors.cnpj ? "border-red-500" : "border-purple-700"
                      }`}
                      aria-invalid={!!errors.cnpj}
                      aria-describedby={errors.cnpj ? "name-error" : undefined}
                    />
                  )}
                </InputMask>
                {errors.cnpj && (
                  <p id="name-error" className="text-red-500 text-sm mt-1">
                    {errors.cnpj}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-purple-700">
                  E-mail
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="empresa@email.com"
                  className={`mt-1 block w-full rounded-md border px-4 py-2 text-black shadow-sm focus:ring-primary focus:border-primary ${
                    errors.email ? "border-red-500" : "border-purple-700"
                  }`}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "name-error" : undefined}
                />
                {errors.email && (
                  <p id="name-error" className="text-red-500 text-sm mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-purple-700">
                  Senha
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                  className={`mt-1 block w-full rounded-md border px-4 py-2 text-black shadow-sm focus:ring-primary focus:border-primary ${
                    errors.password1 ? "border-red-500" : "border-purple-700"
                  }`}
                  aria-invalid={!!errors.password1}
                  aria-describedby={errors.password1 ? "name-error" : undefined}
                />
                {errors.password1 && (
                  <p id="name-error" className="text-red-500 text-sm mt-1">
                    {errors.password1}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-purple-700">
                  Confirmar senha
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                  className={`mt-1 mb-6 block w-full rounded-md border px-4 py-2 text-black shadow-sm focus:ring-primary focus:border-primary ${
                    errors.password2 ? "border-red-500" : "border-purple-700"
                  }`}
                  aria-invalid={!!errors.password2}
                  aria-describedby={errors.password2 ? "name-error" : undefined}
                />
                {errors.password2 && (
                  <p id="name-error" className="text-red-500 text-sm mt-1">
                    {errors.password2}
                  </p>
                )}
              </div>

              <Botao1 texto={loading ? "Registrando...":"Registrar"} />

              <div
                className="text-center text-sm text-primary hover:underline cursor-pointer"
                onClick={() => router.push("/auth/login")}
              >
                Já tem uma conta? Faça login
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
