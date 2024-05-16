import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";

export default function SidebarNav({ activePage }) {
  return (
    <Sheet>
      <SheetTrigger>
        <Image src="/menu.svg" alt="Menu" width={30} height={30} />
      </SheetTrigger>
      <SheetContent className={"bg-[#3b3b3b] border-none p-0"}>
        <SheetHeader>
          <SheetTitle className={"flex bg-[#3270B8] h-20 pl-4"}></SheetTitle>
          <SheetDescription className={'flex flex-col items-start w-full'}>
            <NavItem href="/visao-geral" active={activePage === "visao-geral"}>
              Visão Geral
            </NavItem>
            <NavItem
              href="/dashboard-detalhado"
              active={activePage === "dashboard-detalhado"}
            >
              Dashboard Detalhado
            </NavItem>
            <NavItem href="/controle" active={activePage === "controle"}>
              Controle
            </NavItem>
            <NavItem href="/" active={activePage === "sair"}>
              Sair
            </NavItem>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

function NavItem({ href, active, children }) {
  return (
    <Link className="w-full" href={href}>
      <p
        className={`text-white text-left px-5 py-7 rounded-md transition duration-300  cursor-pointer ${
          active
            ? "font-bold underline decoration-2 underline-offset-[6px]"
            : "hover:bg-[#303030] hover:underline hover:decoration-2 underline-offset-[6px] hover:bg-opacity-50"
        }`}
      >
        {children}
      </p>
    </Link>
  );
}
