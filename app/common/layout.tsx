import { NavbarCommunUser } from "../components/NavbarCommunUser";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#0E1321] h-screen w-screen">
        <NavbarCommunUser/>
        {children}
    </div>
  );
}