import NavBar from '@/components/NavBar';
import { LimtCard } from "@/components/ui/card-limt-admin"

export default function DashboardDetalhado() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-[#303030]">
      <NavBar activePage="controle" />
      <div className="w-full mt-32 h-full">
        <div className='flex justify-start text-2xl ml-10'>
          <p className='text-white font-bold'>Controle do Administrador</p>
        </div>
        <div className='flex flex-row flex-wrap'>
          <LimtCard title="Limite 1 - menos grave" color="#89CAF9"></LimtCard>
          <LimtCard title="Limite 2 - grave" color="#DAE466"></LimtCard>
          <LimtCard title="Limite 3 - mais grave" color="#F989B2"></LimtCard>
        </div>
      </div>
    </main>
  )
}
