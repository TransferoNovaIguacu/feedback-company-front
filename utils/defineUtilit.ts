const getRatingStyle = (rating: string) => {
  switch (rating) {
    case "Muito útil": return "bg-green-100 text-green-700";
    case "Útil": return "bg-blue-100 text-blue-700";
    case "Não Útil": return "bg-red-100 text-red-700";
    default: return "bg-gray-100 text-gray-700";
  }
};

export default getRatingStyle 