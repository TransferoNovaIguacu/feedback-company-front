"use client";

import Image from "next/image";
import Head from "next/head";
import backgroundft from "@/public/png/backgroundft.png";
import logoo from "@/public/svg/logoo.svg";
import { Botao1 } from "@/app/components/Botao";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function Login() {
  const route = useRouter();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    route.push("/en-construcao");
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
                  placeholder="meu@email.com"
                  className="mt-1 block w-full rounded-md border border-purple-700 shadow-sm focus:border-primary focus:ring-primary px-4 py-2 text-black"
                />
              </div>

              <div>
                <label className="block text-sm font-medium purple-700">
                  Senha
                </label>
                <input
                  type="password"
                  placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                  className="mt-1 block w-full rounded-md border border-purple-700 shadow-sm focus:border-primary focus:ring-primary px-4 py-2"
                />
              </div>

              <div className="text-right text-sm text-purple-700 hover:underline cursor-pointer">
                Esqueci a senha
              </div>

              <Botao1 texto="Entrar" />

              <div className="text-center text-sm text-primary hover:underline cursor-pointer">
                Registrar
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
