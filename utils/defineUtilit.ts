import { Dispatch, SetStateAction } from "react";
import api from "./axios";

const getRatingStyle = (rating: string) => {
  switch (rating) {
    case "Muito útil":
      return "bg-green-100 text-green-700";
    case "Útil":
      return "bg-blue-100 text-blue-700";
    case "Não Útil":
      return "bg-red-100 text-red-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

export default getRatingStyle;

export const getTokenBalance = async (setBalance: Dispatch<SetStateAction<string>>) => {
  try {
    const token = localStorage.getItem("TOKEN");

    if (!token) throw new Error();

    const response = await api.get("web3/api/v1/wallet/balance/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setBalance(response.data.balance.toFixed(2));
  } catch (error) {
    console.log(error);
  }
};
