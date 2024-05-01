import Image from "next/image";
import Link from 'next/link';

export default function NavBar() {
    return (
        <header className="bg-[#3270B8] h-20 p-4 w-full fixed top-0">
            <div className="max-w-7xl mx-auto h-full flex justify-between items-center">
                <div className="rounded-xl">
                    <Image src="/logo_01.svg" alt="Logo" width={55} height={55} />
                </div>
                <nav className="flex items-center h-full">
                    <NavItem href="/visao-geral">Visão Geral</NavItem>
                    <NavItem href="/dashboard-detalhado">Dashboard Detalhado</NavItem>
                    <NavItem href="/">Sair</NavItem>
                </nav>
            </div>
        </header>
    )
}

function NavItem({ href, children }) {
    return (
        <Link href={href}>
            <p className="text-white hover:bg-[#285993] hover:bg-opacity-50 px-5 py-7 rounded-md transition duration-300 mr-4 cursor-pointer">{children}</p>
        </Link>
    )
}
