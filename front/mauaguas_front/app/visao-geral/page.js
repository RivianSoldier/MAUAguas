"use client";

import NavBar from '@/components/NavBar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import Image from "next/image";
import { Separator } from "@/components/ui/separator"
import { CheckboxList } from "@/components/ui/checkbox-list"

import * as React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function VisaoGeral() {

    return (
        <main className="flex min-h-screen flex-col bg-[#303030]">
            <NavBar activePage="visao-geral" />
            <Tabs defaultValue="nivel" className="w-full mt-32 h-full">
                <div className='flex justify-between mx-10 text-2.5xl items-center'>
                    <p className='text-white font-bold'>Dashboard  Geral</p>
                    <div className='flex items-center justify-around'>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className="mr-10 py-6 bg-[#3B3B3B] flex hover:bg-[#616161] hover:bg-opacity-50 rounded-xl transition duration-300 cursor-pointer" variant="primary">
                                    <Image src="/options.svg" alt="Filters" width={25} height={25} />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56 text-white bg-[#3B3B3B] border-none">
                                <p className='m-2 font-bold'>Filtrar por</p>
                                <Separator className='bg-[#616161]'/>
                                <DropdownMenuLabel>Tipo</DropdownMenuLabel>
                                    <CheckboxList names={["Selecionar Tudo", "Caixas D'água", "Poço"]} />
                                <Separator className='bg-[#616161]'/>
                                <DropdownMenuLabel>Limite</DropdownMenuLabel>
                                    <CheckboxList names={["Selecionar Tudo", "Padrão", "Menos Grave", "Grave", "Mais Grave"]} />
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <TabsList className='bg-[#3B3B3B] rounded-xl px-0 py-6'>
                            <TabsTrigger value="nivel" className='text-lg rounded-tl-xl rounded-bl-xl px-4 py-2.5 text-white'>Nível</TabsTrigger>
                            <TabsTrigger value="vazao" className='text-lg rounded-tr-xl rounded-br-xl p-2.5 text-white'>Vazão</TabsTrigger>
                        </TabsList>
                    </div>
                </div>
                <div className='text-white mx-10'>
                    <TabsContent value="nivel">Dashboard de Nível</TabsContent>
                    <TabsContent value="vazao">Dashboard de Vazão.</TabsContent>
                </div>
            </Tabs>
        </main>
    );
}
