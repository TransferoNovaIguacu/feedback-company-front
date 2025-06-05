'use client';

import React, { useEffect, useState } from 'react';
import { Wallet } from 'lucide-react';

interface TokenBalanceProps {
  tokens: number;
}

const formatTokens = (value: number): string => {
  if (value >= 1000) return (value / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  return value.toString();
};

const TokenBalance: React.FC<TokenBalanceProps> = ({ tokens }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <div className="bg-[#0E1321] text-white px-4 py-3 rounded-full flex items-center space-x-3 shadow-md w-fit">
      <div>
        <p className="text-sm text-gray-400">Your Balance</p>
        <p className="text-xl font-semibold">{formatTokens(tokens)} Tokens</p>
      </div>
      <div className="bg-[#1F2535] p-2 rounded-full">
        <Wallet className="text-blue-400" size={24} />
      </div>
    </div>
  );
};

export default TokenBalance;
