"use client";

import Image from "next/image";
import Head from "next/head";
import backgroundft from "@/public/png/backgroundft.png";
import logoo from "@/public/svg/logoo.svg";
import { Botao1 } from "@/app/components/Botao";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import {
  FormDataPayloadLogin,
  validationFormDataLogin,
} from "@/utils/verifyForms";
import api from "@/utils/axios";

type FormErrors = Partial<Record<keyof FormDataPayloadLogin, string>>;

export default function Login() {
  const [errors, setErrors] = useState<FormErrors>({});
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const raw = Object.fromEntries(formData.entries());

    const data: FormDataPayloadLogin = {
      email: String(raw.email ?? "").trim(),
      password: String(raw.password ?? ""),
    };

    const validationErrors = validationFormDataLogin(data);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await api.post("auth/login/", data);
      localStorage.setItem('TOKEN', response.data.access)
      localStorage.setItem('USER', JSON.stringify(response.data.user))
      router.push("/common");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Head>
        <title>Login | FeedToken</title>
      </Head>
      <div className="flex flex-col md:flex-row h-screen text-purple-950 bg-white">
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

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-purple-700">
                  Login
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="meu@email.com"
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
                <label className="block text-sm font-medium purple-700">
                  Senha
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                  className={`mt-1 block w-full rounded-md border px-4 py-2 text-black shadow-sm focus:ring-primary focus:border-primary ${
                    errors.password ? "border-red-500" : "border-purple-700"
                  }`}
                  aria-invalid={!!errors.password}
                  aria-describedby={errors.password ? "name-error" : undefined}
                />
                {errors.password && (
                  <p id="name-error" className="text-red-500 text-sm mt-1">
                    {errors.password}
                  </p>
                )}
              </div>

              {/* <div className="text-right text-sm text-purple-700 hover:underline cursor-pointer">
                Esqueci a senha
              </div> */}

              <Botao1 texto={loading ? "Entrando..." : "Entrar"} />

              <a
                href="/auth/register"
                className="text-center text-sm text-primary hover:underline cursor-pointer"
              >
                Registrar
              </a>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
