"use client";
import NavBar from '@/components/NavBar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import Image from "next/image";
import { Separator } from "@/components/ui/separator"
import { CheckboxList } from "@/components/ui/checkbox-list"
import { PocoNivel } from "@/components/ui/poco-nivel";
import { CaixaNivel } from "@/components/ui/caixa-nivel";

import * as React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeloVazao } from '@/components/ui/modelo-vazao-geral';

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
                                    <CheckboxList type={"tipo"} names={["Selecionar Tudo", "Caixas D'água", "Poço"]} />
                                <Separator className='bg-[#616161]'/>
                                <DropdownMenuLabel>Limite</DropdownMenuLabel>
                                    <CheckboxList type={"limite"} names={["Selecionar Tudo", "Padrão", "Menos Grave", "Grave", "Mais Grave"]} />
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <TabsList className='bg-[#3B3B3B] rounded-xl px-0 py-6'>
                            <TabsTrigger value="nivel" className='text-lg rounded-tl-xl rounded-bl-xl px-4 py-2.5 text-white'>Nível</TabsTrigger>
                            <TabsTrigger value="vazao" className='text-lg rounded-tr-xl rounded-br-xl p-2.5 text-white'>Vazão</TabsTrigger>
                        </TabsList>
                    </div>
                </div>
                <div className='text-white mx-10 my-4'>
                    <TabsContent value="nivel">
                        <div className="gap-4 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
                            <PocoNivel altura={1500} capacidade={2500} nome={"Poço"}/>
                            <CaixaNivel altura={1000} capacidade={1500} nome={"Caixa 1"}></CaixaNivel>
                            <CaixaNivel altura={500} capacidade={1500} nome={"Caixa 2"}></CaixaNivel>
                            <CaixaNivel altura={1500} capacidade={1500} nome={"Caixa 3"}></CaixaNivel>
                            <CaixaNivel altura={300} capacidade={1500} nome={"Caixa 4"}></CaixaNivel>
                            <CaixaNivel altura={500} capacidade={1500} nome={"Caixa 5"}></CaixaNivel>
                            <CaixaNivel altura={500} capacidade={1500} nome={"Caixa 6"}></CaixaNivel>
                            <CaixaNivel altura={500} capacidade={1500} nome={"Caixa 7"}></CaixaNivel>
                            <CaixaNivel altura={500} capacidade={1500} nome={"Caixa 8"}></CaixaNivel>
                            <CaixaNivel altura={100} capacidade={1500} nome={"Caixa 9"}></CaixaNivel>
                        </div>
                    </TabsContent>
                    <TabsContent value="vazao">
                    <div className="gap-4 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
                        <ModeloVazao nome="Poço" vazao={1000} maximo={1500} tipo={1}></ModeloVazao>
                        <ModeloVazao nome="Caixa 1" vazao={1500} maximo={1500} tipo={2}></ModeloVazao>
                        <ModeloVazao nome="Caixa2aaaaaaaaaaaaaaaaaaaaaaaaaaaa" vazao={1000} maximo={1500} tipo={2}></ModeloVazao>
                        <ModeloVazao nome="Caixa 3" vazao={500} maximo={1500} tipo={2}></ModeloVazao>
                        <ModeloVazao nome="Caixa 4" vazao={300} maximo={1500} tipo={2}></ModeloVazao>
                        <ModeloVazao nome="Caixa 3" vazao={500} maximo={1500} tipo={2}></ModeloVazao>
                        <ModeloVazao nome="Caixa 3" vazao={500} maximo={1500} tipo={2}></ModeloVazao>
                        <ModeloVazao nome="Caixa 3eeeeeeeeeeeeeeeeee" vazao={500} maximo={1500} tipo={2}></ModeloVazao>
                        <ModeloVazao nome="Caixa 3" vazao={500} maximo={1500} tipo={2}></ModeloVazao>
                        <ModeloVazao nome="Caixa 3" vazao={500} maximo={1500} tipo={2}></ModeloVazao>
                        <ModeloVazao nome="Caixa 5" vazao={0} maximo={1500} tipo={2}></ModeloVazao>
                    </div>
                    </TabsContent>
                </div>
            </Tabs>
        </main>
    );
}
