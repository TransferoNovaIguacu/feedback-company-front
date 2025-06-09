import AuthGuard from "@/utils/privateRoute";
import EmConstrucao from "../en-construcao/page";
import { NavbarCommunUser } from "../components/NavbarCommunUser";

export default function CommonPage() {
  return (
    <AuthGuard>
      <NavbarCommunUser/>
      <EmConstrucao />

    </AuthGuard>
  );
}
