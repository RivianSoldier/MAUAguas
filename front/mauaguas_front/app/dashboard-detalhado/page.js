"use client";

import { ChevronRight } from 'lucide-react';
import NavBar from "@/components/NavBar";
import { Search } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import DashboardCaixa from "@/components/dashboard-caixa";
import DashboardPoco from "@/components/dashboard-poco";
import Image from "next/image";

export default function DashboardDetalhado() {
  return (
    <div className="h-[000px] bg-[#303030]">
      <main className="flex min-h-screen flex-col bg-[#303030]">
        <NavBar activePage="dashboard-detalhado" />
        <div className="flex flex-grow">
          <Sheet>
            <SheetTrigger className="fixed h-screen z-50 md:hidden">
              <ChevronRight className='text-white h-36 w-12 bg-[#464646] rounded-r-3xl drop-shadow-lg' />
            </SheetTrigger>
            <SheetContent side="left" className="pt-20 border-0 flex flex-col items-center justify-start bg-[#3b3b3b] gap-4 shadow-lg fixed">
                <div className="relative">
                  <Input
                    placeholder="Procurar..."
                    className="bg-[#505050] border-none text-white w-80 h-14"
                  />
                  <Search className="absolute right-2 top-5 h-5 w-5 text-white" />
                </div>
                <div className="flex px-2 flex-col gap-3 overflow-y-auto overflow-x-hidden pb-80 pr-2 h-screen">
                  <div className="flex flex-row min-h-14 w-full border-[#505050] border-2 rounded-lg justify-between items-center text-white cursor-pointer hover:scale-[1.03] duration-75">
                    <p className="pl-3">Poço</p>
                    <div className="flex items-center justify-end pr-3 rounded-r-md bg-[#89caf9] h-full w-20">
                      1500 m
                    </div>
                  </div>
                  <div className="flex flex-row min-h-14 w-80 border-[#505050] border-2 rounded-lg justify-between items-center text-white cursor-pointer hover:scale-[1.03] duration-75">
                    <p className="pl-3">Poço</p>
                    <div className="flex items-center justify-end pr-3 rounded-r-md bg-[#89caf9] h-full w-20">
                      1500 m
                    </div>
                  </div>
                  <div className="flex flex-row min-h-14 w-80 border-[#505050] border-2 rounded-lg justify-between items-center text-white cursor-pointer hover:scale-[1.03] duration-75">
                    <p className="pl-3">Poço</p>
                    <div className="flex items-center justify-end pr-3 rounded-r-md bg-[#89caf9] h-full w-20">
                      1500 m
                    </div>
                  </div>
                  <div className="flex flex-row min-h-14 w-80 border-[#505050] border-2 rounded-lg justify-between items-center text-white cursor-pointer hover:scale-[1.03] duration-75">
                    <p className="pl-3">Poço</p>
                    <div className="flex items-center justify-end pr-3 rounded-r-md bg-[#89caf9] h-full w-20">
                      1500 m
                    </div>
                  </div>
                  <div className="flex flex-row min-h-14 w-80 border-[#505050] border-2 rounded-lg justify-between items-center text-white cursor-pointer hover:scale-[1.03] duration-75">
                    <p className="pl-3">Poço</p>
                    <div className="flex items-center justify-end pr-3 rounded-r-md bg-[#89caf9] h-full w-20">
                      1500 m
                    </div>
                  </div>
                  <div className="flex flex-row min-h-14 w-80 border-[#505050] border-2 rounded-lg justify-between items-center text-white cursor-pointer hover:scale-[1.03] duration-75">
                    <p className="pl-3">Poço</p>
                    <div className="flex items-center justify-end pr-3 rounded-r-md bg-[#89caf9] h-full w-20">
                      1500 m
                    </div>
                  </div>
                  <div className="flex flex-row min-h-14 w-80 border-[#505050] border-2 rounded-lg justify-between items-center text-white cursor-pointer hover:scale-[1.03] duration-75">
                    <p className="pl-3">Poço</p>
                    <div className="flex items-center justify-end pr-3 rounded-r-md bg-[#89caf9] h-full w-20">
                      1500 m
                    </div>
                  </div>
                  <div className="flex flex-row min-h-14 w-80 border-[#505050] border-2 rounded-lg justify-between items-center text-white cursor-pointer hover:scale-[1.03] duration-75">
                    <p className="pl-3">Poço</p>
                    <div className="flex items-center justify-end pr-3 rounded-r-md bg-[#89caf9] h-full w-20">
                      1500 m
                    </div>
                  </div>
                  <div className="flex flex-row min-h-14 w-80 border-[#505050] border-2 rounded-lg justify-between items-center text-white cursor-pointer hover:scale-[1.03] duration-75">
                    <p className="pl-3">Poço</p>
                    <div className="flex items-center justify-end pr-3 rounded-r-md bg-[#89caf9] h-full w-20">
                      1500 m
                    </div>
                  </div>
                  <div className="flex flex-row min-h-14 w-80 border-[#505050] border-2 rounded-lg justify-between items-center text-white cursor-pointer hover:scale-[1.03] duration-75">
                    <p className="pl-3">Poço</p>
                    <div className="flex items-center justify-end pr-3 rounded-r-md bg-[#89caf9] h-full w-20">
                      1500 m
                    </div>
                  </div>
                  <div className="flex flex-row min-h-14 w-80 border-[#505050] border-2 rounded-lg justify-between items-center text-white cursor-pointer hover:scale-[1.03] duration-75">
                    <p className="pl-3">Poço</p>
                    <div className="flex items-center justify-end pr-3 rounded-r-md bg-[#89caf9] h-full w-20">
                      1500 m
                    </div>
                  </div>
                  <div className="flex flex-row min-h-14 w-80 border-[#505050] border-2 rounded-lg justify-between items-center text-white cursor-pointer hover:scale-[1.03] duration-75">
                    <p className="pl-3">Poço</p>
                    <div className="flex items-center justify-end pr-3 rounded-r-md bg-[#89caf9] h-full w-20">
                      1500 m
                    </div>
                  </div>
                </div>
            </SheetContent>
          </Sheet>
          <div className="flex flex-col items-center justify-start pt-28 w-[22rem] bg-[#3b3b3b] gap-4 shadow-lg rounded-r-xl fixed invisible md:visible">
            <div className="relative">
              <Input
                placeholder="Procurar..."
                className="bg-[#505050] border-none text-white w-[19rem] h-14 m"
              />
              <Search className="absolute right-2 top-5 h-5 w-5 text-white" />
            </div>
            <div className="flex px-2 flex-col gap-3 overflow-y-auto overflow-x-hidden pb-80 pr-2 h-screen">
              <div className="flex flex-row min-h-14 w-[19rem] border-[#505050] border-2 rounded-lg justify-between items-center text-white cursor-pointer hover:scale-[1.03] duration-75">
                <p className="pl-3">Poço</p>
                <div className="flex items-center justify-end pr-3 rounded-r-md bg-[#89caf9] h-full w-20">
                  1500 m
                </div>
              </div>
              <div className="flex flex-row min-h-14 w-[19rem] border-[#505050] border-2 rounded-lg justify-between items-center text-white cursor-pointer hover:scale-[1.03] duration-75">
                <p className="pl-3">Poço</p>
                <div className="flex items-center justify-end pr-3 rounded-r-md bg-[#89caf9] h-full w-20">
                  1500 m
                </div>
              </div>
            </div>
          </div>
          <DashboardPoco></DashboardPoco>
        </div>
      </main>
    </div>
  );
}
