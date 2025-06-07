"use client";

import Image from "next/image";
import Head from "next/head";
import backgroundft from "@/public/png/backgroundft.png";
import logoo from "@/public/svg/logoo.svg";
import { Botao1 } from "@/app/components/Botao";
import { useState } from "react";
import { FormDataPayload, validateFormData } from "@/utils/verifyForms";
import api from "@/utils/axios";
import { useRouter } from "next/navigation";


type FormErrors = Partial<Record<keyof FormDataPayload, string>>;

export default function Register() {
  const [errors, setErrors] = useState<FormErrors>({});
  const router = useRouter()

 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setErrors({});

  const formData = new FormData(e.currentTarget);
  const raw = Object.fromEntries(formData.entries());

  const data: FormDataPayload = {
    full_name: String(raw.name ?? "").trim(),
    cpf: String(raw.cpf ?? "").trim(),
    email: String(raw.email ?? "").trim(),
    password1: String(raw.password ?? ""),
    password2: String(raw.confirmPassword ?? ""),
  };

  const validationErrors = validateFormData(data);

  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  try {
    api.post("auth/register/common/", data)
    router.push("/auth/login")
  } catch (error) {
    console.error(error)
  }

 }

  return (
    <>
      <Head>
        <title>Registro | FeedToken</title>
      </Head>

      <div className="flex flex-col md:flex-row h-screen text-purple-950 bg-white">
        <div className="hidden md:block md:w-1/2 bg-gradient-to-t from-primary to-secondary relative">
          <Image
            src={backgroundft}
            alt="Ethereum background"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 flex items-center justify-center"></div>
        </div>

        <div className="w-full h-full md:w-1/2 flex items-center justify-center bg-white">
          <div className="w-full max-w-md px-6 py-12">
            <div className="flex items-center mb-8">
              <Image
                src={logoo}
                alt="FeedToken logo"
                width={40}
                height={40}
                className="mr-3"
              />
              <h2 className="text-2xl font-semibold text-primary">FeedToken</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label className="block text-sm font-medium text-primary">
                  Nome
                </label>
                <input
                  type="text"
                  name="name"
                  className={`mt-1 block w-full rounded-md border px-4 py-2 text-black shadow-sm focus:ring-primary focus:border-primary ${
                    errors.full_name ? "border-red-500" : "border-purple-700"
                  }`}
                  placeholder="Seu Nome"
                  aria-invalid={!!errors.full_name}
                  aria-describedby={errors.full_name ? "name-error" : undefined}
                />
                {errors.full_name && (
                  <p id="name-error" className="text-red-500 text-sm mt-1">
                    {errors.full_name}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-primary">
                  CPF
                </label>
                <input
                  type="text"
                  name="cpf"
                  className={`mt-1 block w-full rounded-md border px-4 py-2 text-black shadow-sm focus:ring-primary focus:border-primary ${
                    errors.cpf ? "border-red-500" : "border-purple-700"
                  }`}
                  placeholder="Seu CPF"
                  aria-invalid={!!errors.cpf}
                  aria-describedby={errors.cpf ? "cpf-error" : undefined}
                />
                {errors.cpf && (
                  <p id="cpf-error" className="text-red-500 text-sm mt-1">
                    {errors.cpf}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-primary">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  className={`mt-1 block w-full rounded-md border px-4 py-2 text-black shadow-sm focus:ring-primary focus:border-primary ${
                    errors.email ? "border-red-500" : "border-purple-700"
                  }`}
                  placeholder="seu@email.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="text-red-500 text-sm mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-primary">
                  Senha
                </label>
                <input
                  type="password"
                  name="password"
                  className={`mt-1 block w-full rounded-md border px-4 py-2 shadow-sm focus:ring-primary focus:border-primary ${
                    errors.password1 ? "border-red-500" : "border-purple-700"
                  }`}
                  placeholder="********"
                  aria-invalid={!!errors.password1}
                  aria-describedby={errors.password1 ? "password-error" : undefined}
                />
                {errors.password1 && (
                  <p id="password-error" className="text-red-500 text-sm mt-1">
                    {errors.password1}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-primary">
                  Confirmar Senha
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  className={`mt-1 block w-full rounded-md border px-4 py-2 shadow-sm focus:ring-primary focus:border-primary ${
                    errors.password2 ? "border-red-500" : "border-purple-700"
                  }`}
                  placeholder="********"
                  aria-invalid={!!errors.password2}
                  aria-describedby={
                    errors.password2 ? "confirmPassword-error" : undefined
                  }
                />
                {errors.password2 && (
                  <p
                    id="confirmPassword-error"
                    className="text-red-500 text-sm mt-1"
                  >
                    {errors.password2}
                  </p>
                )}
              </div>

              <Botao1 texto="Registrar" />

              <div className="text-center text-sm text-primary hover:underline cursor-pointer">
                Já tem uma conta? <a href="/auth/login">Entrar</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
