import Image from "next/image";
import Link from "next/link";

export default function NavBar({ activePage }) {
  return (
    <header className="bg-[#3270B8] h-20 p-4 w-full fixed top-0">
      <div className="max-w-full mx-auto h-full flex justify-between items-center">
        <div className="rounded-xl">
          <Image src="/logo_01.svg" alt="Logo" width={55} height={55} />
        </div>
        <nav className="flex items-center h-full">
          <NavItem href="/visao-geral" active={activePage === "visao-geral"}>
            Visão Geral
          </NavItem>
          <NavItem
            href="/dashboard-detalhado"
            active={activePage === "dashboard-detalhado"}
          >
            Dashboard Detalhado
          </NavItem>
          <NavItem href="/" active={activePage === "sair"}>
            Sair
          </NavItem>
          <NavItem href="/controle" active={activePage === "controle"}>
            <Image src="/settings.svg" alt="Settings" width={24} height={24} />
          </NavItem>
        </nav>
      </div>
    </header>
  );
}

function NavItem({ href, active, children }) {
  return (
    <Link href={href}>
      <p
        className={`text-white px-5 py-7 rounded-md transition duration-300  cursor-pointer ${
          active
            ? "font-bold underline decoration-2 underline-offset-[6px]"
            : "hover:bg-[#285993] hover:underline underline-offset-[6px] hover:bg-opacity-50"
        }`}
      >
        {children}
      </p>
    </Link>
  );
}
