import AuthGuard from "@/utils/privateRoute";
import EmConstrucao from "../en-construcao/page";

export default function CommonPage() {
  return (
    <AuthGuard>
      <EmConstrucao />
    </AuthGuard>
  );
}
