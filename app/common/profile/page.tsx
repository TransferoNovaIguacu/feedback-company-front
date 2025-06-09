"use client";

import { Mission } from "@/app/company/page";
import { Botao1, Botao2 } from "@/app/components/Botao";
import { CardAvaliacao } from "@/app/components/CardAvaliacao";
import api from "@/utils/axios";
import { getTokenBalance } from "@/utils/defineUtilit";
import { fetchMyMissionsUsers } from "@/utils/fetchMissions";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [missions, setMissions] = useState<Mission[]>([]);
  const [currentUser, setCurrentUser] = useState({ email: "" });
  const [wallet, setWallet] = useState<string | null>(null);
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [tokens, setTokens] = useState<string>("0"); // mock
  const [amountToTransfer, setAmountToTransfer] = useState("");

  const getCurrentUser = () => {
    const user = localStorage.getItem("USER");
    const walletAddress = localStorage.getItem("WALLET");
    if (user) setCurrentUser(JSON.parse(user));
    if (walletAddress) setWallet(walletAddress);
  };

  const handleWalletSubmit = async () => {
    const token = localStorage.getItem("TOKEN")
    if (wallet) localStorage.setItem("WALLET", wallet);
    const response = await api.put(
      "auth/wallet/",
      {
        wallet_address: wallet,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data.message);
    setShowWalletModal(false);
  };

  const handleTransfer = async () => {
    const token = localStorage.getItem("TOKEN");
    const response = await api.post(
      "web3/api/v1/wallet/withdraw/",
      {
        amount: `${amountToTransfer}`,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response);
    setAmountToTransfer("");
    setShowWithdrawModal(false);
  };

  useEffect(() => {
    getTokenBalance(setTokens);
    getCurrentUser();
    fetchMyMissionsUsers(setMissions);
  }, []);

  return (
    <div className="flex justify-center">
      <div className="max-w-screen-lg">
        {/* Wallet Modal */}
        {showWalletModal && (
          <div
            onClick={() => setShowWalletModal(false)}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md"
            >
              <h2 className="text-xl font-bold mb-4 text-zinc-800">
                {wallet ? "Mudar Conta Metamask" : "Vincular Conta Metamask"}
              </h2>
              <input
                type="text"
                placeholder="0x..."
                value={wallet ?? ""}
                onChange={(e) => setWallet(e.target.value)}
                className="w-full border rounded-md p-2 mb-4 text-zinc-800"
              />
              <div onClick={handleWalletSubmit}>
                <Botao2 texto="Salvar Conta" />
              </div>
            </div>
          </div>
        )}

        {/* Withdraw Modal */}
        {showWithdrawModal && (
          <div
            onClick={() => setShowWithdrawModal(false)}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md text-zinc-800"
            >
              <h2 className="text-xl font-bold mb-4">Sacar Tokens</h2>
              <p className="mb-4">
                Você tem <strong>{tokens} FTK</strong> disponíveis.
              </p>
              <input
                type="number"
                min={1}
                max={tokens}
                placeholder="Quantidade a sacar"
                value={amountToTransfer}
                onChange={(e) => setAmountToTransfer(e.target.value)}
                className="w-full border rounded-md p-2 mb-4"
              />
              <div onClick={handleTransfer}>
                <Botao1 texto="Transferir" />
              </div>
            </div>
          </div>
        )}

        <section className="flex justify-between py-20">
          <div className="flex items-center gap-5">
            <div className="size-32 bg-white bg-opacity-20 rounded-full flex justify-center items-center">
              <p className="text-6xl font-semibold">FT</p>
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold text-4xl">Alex Lanção</h3>
              <p className="text-xl opacity-50">{currentUser.email}</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <div onClick={() => setShowWalletModal(true)}>
                <Botao2 texto={wallet ? "Mudar Conta" : "Vincular Carteira"} />
              </div>
            </div>
            <div>
              <div onClick={() => setShowWithdrawModal(true)}>
                <Botao1 texto="Resgatar Tokens" />
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-5">
          <h2 className="w-[67vw] text-3xl">Últimas Pesquisas</h2>
          <div>
            {missions.length > 0 ? (
              missions.map((mission) => (
                <CardAvaliacao
                  key={mission.id}
                  CardAvaliacaoInfo={mission}
                  botao={<Botao1 texto="Participar" />}
                  className="max-w-[27vw]"
                />
              ))
            ) : (
              <p>Você ainda não participa de nenhuma pesquisa</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
