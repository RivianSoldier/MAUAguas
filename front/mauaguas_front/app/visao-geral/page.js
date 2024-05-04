import NavBar from '@/components/NavBar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export default function VisaoGeral() {
    return (
        <main className="flex min-h-screen flex-col bg-[#303030]">
            <NavBar activePage="visao-geral"/>
            <Tabs defaultValue="nivel" className="w-full mt-32">
                <div className='flex justify-between mx-10 text-2.5xl'>
                    <p className='text-white font-bold'>Dashboard  Geral</p>
                    <div>
                        
                        <TabsList className='bg-[#3B3B3B] rounded-lg px-0 py-6'>
                            <TabsTrigger value="nivel" className='text-lg rounded-lg px-4 py-2.5'>Nível</TabsTrigger>
                            <TabsTrigger value="vazao" className='text-lg rounded-lg p-2.5'>Vazão</TabsTrigger>
                        </TabsList>
                    </div>
                </div>
                <div className='text-white mx-10'>
                    <TabsContent value="nivel">Dashboard de Nível</TabsContent>
                    <TabsContent value="vazao">Dashboard de Vazão.</TabsContent>
                </div>
            </Tabs>
        </main>
    )
}
