import Image from "next/image";
import Link from 'next/link';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#303030]">
      <div className="flex flex-col lg:flex-row justify-center items-center w-11/12 md:w-2/3 lg:w-[64rem] lg:h-[28.75rem] bg-[#3b3b3b] rounded-xl drop-shadow-lg">
        <div className="flex flex-col w-full lg:w-[25rem] h-52 lg:h-full bg-[#3270b8] rounded-xl pt-10 pl-10">
          <div className="rounded-xl">
            <Image src="/logo_01.svg" alt="Logo" width={70} height={70} />
          </div>
          <div className="pt-8 text-white font-bold text-3xl">Fazer login</div>
        </div>
        <div className="flex flex-col justify-center items-center w-full lg:w-[40.125rem] h-80 my-6">
          <div className="w-full">
            <div className="flex flex-col justify-center items-center gap-8 pt-4 w-full px-6 md:px-20 lg:px-0">
              <Input
                className="bg-[#505050] border-none text-white w-full lg:w-[26rem] h-[3.8rem] "
                type="email"
                placeholder="Email"
              />
              <Input
                className="bg-[#505050] border-none text-white w-full lg:w-[26rem] h-[3.8rem] "
                type="password"
                placeholder="Senha"
              />
            </div>
            <Button
              className="flex justify-start p-0 lg:pl-[6.7rem] text-[#3270B8] lg:w-full m-0 px-6 md:px-20"
              variant="link"
            >
              Esqueci minha senha
            </Button>
          </div>
          <div className="flex flex-row w-full mx-4 justify-end items-end lg:justify-end lg:items-center lg:w-[26rem] mt-8 px-6 md:px-20 lg:px-0">
            <Link href="/visao-geral">
              <Button className=" bg-[#3270B8] text-white flex hover:bg-[#2D64A5] hover:bg-opacity-50 rounded-md transition duration-300 cursor-pointer" variant="primary">
                Entrar
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
