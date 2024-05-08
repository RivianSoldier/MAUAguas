import NavBar from "@/components/NavBar";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { CheckboxList } from "@/components/ui/checkbox-list";
import { LimtCard } from "@/components/ui/card-limt-admin";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CardUpdate } from "@/components/ui/card-update";
import { Search } from "lucide-react";

export default function DashboardDetalhado() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-[#303030] min-w-[320px]">
      <NavBar activePage="controle" />
      <div className="w-full mt-32 h-full">
        <div className='flex justify-start text-2xl ml-10'>
          <p className='text-white font-bold'>
            Controle do Administrador
          </p>
        </div>
        <div className='grid grid-cols-4 gap-6'>
          <LimtCard title="Limite 1 - menos grave" color="#89CAF9"></LimtCard>
          <LimtCard title="Limite 2 - grave" color="#DAE466"></LimtCard>
          <LimtCard title="Limite 3 - mais grave" color="#F989B2"></LimtCard>
        </div>
        <div className="flex grid grid-cols-6 justify-between mx-10 items-center">
          <div className="flex lg:col-span-2 md:col-span-3 col-span-4 col-start-2 gap-4 w-full mt-10">
            <div className="relative w-full">
              <Input
                placeholder="Procurar..."
                className="bg-[#505050] border-none text-white h-12 w-full"
              />
              <Search className="absolute right-2 top-3.5 h-5 w-5 text-white" />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="min-w-[60px] py-6 bg-[#3B3B3B] flex hover:bg-[#616161] hover:bg-opacity-50 rounded-xl transition duration-300 cursor-pointer"
                  variant="primary"
                >
                  <Image
                    src="/options.svg"
                    alt="Filters"
                    width={25}
                    height={25}
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 text-white bg-[#3B3B3B] border-none">
                <p className="m-2 font-bold">Filtrar por</p>
                <Separator className="bg-[#616161]" />
                <DropdownMenuLabel>Tipo</DropdownMenuLabel>
                <CheckboxList
                  type={"tipo"}
                  names={["Selecionar Tudo", "Caixas D'água", "Poço"]}
                />
                <Separator className="bg-[#616161]" />
                <DropdownMenuLabel>Limite</DropdownMenuLabel>
                <CheckboxList
                  type={"limite"}
                  names={[
                    "Selecionar Tudo",
                    "Padrão",
                    "Menos Grave",
                    "Grave",
                    "Mais Grave",
                  ]}
                />
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="lg:col-start-5 lg:col-span-2 md:col-span-2 md:col-start-5 col-span-4 col-start-2">
            <Button className="w-full h-14 bg-[#3270B8] hover:bg-[#2D64A5] hover:bg-opacity-50 mt-10">
              Salvar alterações
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 mx-10 my-5 gap-8">
          <CardUpdate></CardUpdate>
          <CardUpdate></CardUpdate>
        </div>
      </div>
    </main>
  );
}
