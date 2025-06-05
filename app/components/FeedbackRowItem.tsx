import getRatingStyle from "@/utils/defineUtilit";
import { MoreHorizontal, ThumbsDown, ThumbsUp } from "lucide-react";

interface FeedbackRowProps {
  item: any;
  formatCustomDate: (timestamp: number) => string;
  toggleLike: (id: number, type: "up" | "down") => void;
  liked: { [key: number]: "up" | "down" | null };
  openDropdownId: number | null;
  setOpenDropdownId: React.Dispatch<React.SetStateAction<number | null>>;
  registerDropdownRef: (id: number, ref: HTMLDivElement | null) => void;
}

export default function FeedbackRow({
  item,
  formatCustomDate,
  toggleLike,
  liked,
  openDropdownId,
  setOpenDropdownId,
  registerDropdownRef,
}: FeedbackRowProps) {

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };
  
  return (
    <tr className="border-b text-sm text-black">
      <td className="p-2 flex items-center gap-2">
        <div className="rounded-full w-8 h-8 bg-purple-200 text-purple-800 flex items-center justify-center font-bold text-sm">
          {item.initials}
        </div>
        <div>
          <div className="font-semibold text-black">{item.user}</div>
          <div className="text-xs text-gray-600">
            Nível {item.Nível} Avaliador
          </div>
        </div>
      </td>
      <td className="p-2">{truncateText(item.feedback, 100)}</td>
      <td className="p-2 text-sm text-black opacity-60">
        {formatCustomDate(item.date)}
      </td>
      <td className="p-2">
        <span
          className={`text-xs px-2 py-1 rounded ${getRatingStyle(item.rating)}`}
        >
          {item.rating}
        </span>
      </td>
      <td className="p-3 flex items-center gap-2">
        <ThumbsUp
          size={18}
          className={`cursor-pointer ${
            liked[item.id] === "up" ? "text-purple-600" : "text-gray-400"
          }`}
          onClick={() => toggleLike(item.id, "up")}
        />
        <ThumbsDown
          size={18}
          className={`cursor-pointer ${
            liked[item.id] === "down" ? "text-red-600" : "text-gray-400"
          }`}
          onClick={() => toggleLike(item.id, "down")}
        />

        <div
          className="relative"
          ref={(ref) => registerDropdownRef(item.id, ref)}
        >
          <MoreHorizontal
            size={18}
            className="text-gray-400 cursor-pointer"
            onClick={() =>
              setOpenDropdownId(openDropdownId === item.id ? null : item.id)
            }
          />

          {openDropdownId === item.id && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
              <div className="py-1">
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                  Visualizar
                </button>
              </div>
            </div>
          )}
        </div>
      </td>
    </tr>
  );
}
