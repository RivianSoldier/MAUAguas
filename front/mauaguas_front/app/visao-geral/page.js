import Image from "next/image";
import Link from 'next/link';

export default function VisaoGeral() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-[#303030]">
            <header className="bg-[#3270B8] h-20 p-4 w-full fixed top-0">
                <div className="flex justify-between items-center h-full">
                    <div className="rounded-xl">
                        <Image src="/logo_01.svg" alt="Logo" width={55} height={55} />
                    </div>
                    <nav className="flex items-center h-full">
                        <Link href="/visao-geral">
                            <p className="text-white hover:bg-[#285993] hover:bg-opacity-50 px-5 py-7 rounded-md transition duration-300 mr-4 cursor-pointer">Visão Geral</p>
                        </Link>
                        <Link href="/dashboard-detalhado">
                            <p className="text-white hover:bg-[#285993] hover:bg-opacity-50 px-5 py-7 rounded-md transition duration-300 mr-4 cursor-pointer">Dashboard Detalhado</p>
                        </Link>
                        <Link href="/">
                            <p className="text-white hover:bg-[#285993] hover:bg-opacity-50 px-5 py-7 rounded-md transition duration-300 cursor-pointer">Sair</p>
                        </Link>
                    </nav>
                </div>
            </header>
        </main>
    )
}
