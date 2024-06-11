import NavBar from "@/components/NavBar";
import { LimtCard } from "@/components/ui/card-limt-admin";
import { Button } from "@/components/ui/button";
import { CardUpdate } from "@/components/ui/card-update";
const link = process.env.NEXT_PUBLIC_LINK;

async function getIds() {
  const res = await fetch(`${link}/get/reservoirs_ids`);
  const ids = await res.json();
  return ids;
}
const ids = await getIds();

export default function DashboardDetalhado() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-[#303030]">
      <NavBar activePage="controle" />
      <div className="mt-32">
        <div className="flex justify-start text-2xl mb-10 ml-10">
          <p className="text-white font-bold text-2xl">
            Controle do Administrador
          </p>
        </div>
        <div className="flex flex-wrap mx-4">
          <LimtCard title="Limite 1 - menos grave" color="#89CAF9"></LimtCard>
          <LimtCard title="Limite 2 - grave" color="#DAE466"></LimtCard>
          <LimtCard title="Limite 3 - mais grave" color="#F989B2"></LimtCard>
        </div>
        <div className="grid grid-cols-6 justify-between mx-10 mt-10 items-center gap-4">
          <div className="flex gap-4 lg:col-span-2 md:col-span-3 col-span-6 col-start-1 w-full"></div>
          <div className="lg:col-start-5 lg:col-span-2 md:col-span-2 md:col-start-5 col-span-6 col-start-1 ">
            <Button className="w-full h-14 bg-[#3270B8] hover:bg-[#2D64A5] hover:bg-opacity-50">
              Salvar alterações
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 mx-10 my-5">
          <CardUpdate></CardUpdate>
          <CardUpdate></CardUpdate>
        </div>
      </div>
    </main>
  );
}
