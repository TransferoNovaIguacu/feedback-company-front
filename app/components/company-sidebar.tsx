import React from "react";

type CompanyInfo = {
  name: string;
  type: string;
  initials: string;
};

type CompanyProfileProps = {
  company: CompanyInfo;
  settingsUrl: string; // URL do link para Settings
};

const CompanyProfile: React.FC<CompanyProfileProps> = ({ company, settingsUrl }) => {
  return (
    <div className="bg-purple-700 rounded-xl p-3 flex flex-col items-center text-white">
      <div className="bg-white rounded-full h-10 w-10 flex items-center justify-center mb-2">
        <span className="text-purple-800 font-bold">{company.initials}</span>
      </div>
      <div className="text-center text-sm">
        <div className="font-semibold">{company.name}</div>
        <div className="text-xs text-purple-300">{company.type}</div>
      </div>
      <a
        href={settingsUrl}
        className="mt-3 w-full text-sm bg-purple-600 rounded-md py-1 text-center hover:bg-purple-500 inline-block"
      >
        Settings
      </a>
    </div>
  );
};

export default CompanyProfile;
