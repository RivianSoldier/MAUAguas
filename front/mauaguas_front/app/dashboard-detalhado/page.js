"use client";

import NavBar from "@/components/NavBar";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import DashboardCaixa from "@/components/dashboard-caixa";
import DashboardPoco from "@/components/dashboard-poco";

export default function DashboardDetalhado() {
  return (
    <div className="h-[000px] bg-[#303030]">
    <main className="flex min-h-screen flex-col bg-[#303030]">
      <NavBar activePage="dashboard-detalhado" />
      <div className="flex flex-grow">
        <div className="flex flex-col items-center justify-start pt-28 w-[22rem] bg-[#3b3b3b] gap-4 shadow-lg rounded-r-xl fixed">
          <div className="relative">
            <Input
              placeholder="Procurar..."
              className="bg-[#505050] border-none text-white w-[19rem] h-14"
            />
            <Search className="absolute right-2 top-5 h-5 w-5 text-white" />
          </div>
          <div className="flex flex-col gap-3 overflow-y-auto overflow-x-hidden pb-80 pr-2 h-screen">
            <div className="flex flex-row min-h-14 w-72 border-[#505050] border-2 rounded-lg justify-between items-center text-white cursor-pointer hover:scale-[1.03] duration-75">
              <p className="pl-3">Poço</p>
              <div className="flex items-center justify-end pr-3 rounded-r-md bg-[#89caf9] h-full w-20">
                1500 m
              </div>
            </div>
            <div className="flex flex-row min-h-14 w-72 border-[#505050] border-2 rounded-lg justify-between items-center text-white cursor-pointer hover:scale-[1.03] duration-75">
              <p className="pl-3">Poço</p>
              <div className="flex items-center justify-end pr-3 rounded-r-md bg-[#89caf9] h-full w-20">
                1500 m
              </div>
            </div>
            <div className="flex flex-row min-h-14 w-72 border-[#505050] border-2 rounded-lg justify-between items-center text-white cursor-pointer hover:scale-[1.03] duration-75">
              <p className="pl-3">Poço</p>
              <div className="flex items-center justify-end pr-3 rounded-r-md bg-[#89caf9] h-full w-20">
                1500 m
              </div>
            </div>
            <div className="flex flex-row min-h-14 w-72 border-[#505050] border-2 rounded-lg justify-between items-center text-white cursor-pointer hover:scale-[1.03] duration-75">
              <p className="pl-3">Poço</p>
              <div className="flex items-center justify-end pr-3 rounded-r-md bg-[#89caf9] h-full w-20">
                1500 m
              </div>
            </div>
            <div className="flex flex-row min-h-14 w-72 border-[#505050] border-2 rounded-lg justify-between items-center text-white cursor-pointer hover:scale-[1.03] duration-75">
              <p className="pl-3">Poço</p>
              <div className="flex items-center justify-end pr-3 rounded-r-md bg-[#89caf9] h-full w-20">
                1500 m
              </div>
            </div>
            <div className="flex flex-row min-h-14 w-72 border-[#505050] border-2 rounded-lg justify-between items-center text-white cursor-pointer hover:scale-[1.03] duration-75">
              <p className="pl-3">Poço</p>
              <div className="flex items-center justify-end pr-3 rounded-r-md bg-[#89caf9] h-full w-20">
                1500 m
              </div>
            </div>
            <div className="flex flex-row min-h-14 w-72 border-[#505050] border-2 rounded-lg justify-between items-center text-white cursor-pointer hover:scale-[1.03] duration-75">
              <p className="pl-3">Poço</p>
              <div className="flex items-center justify-end pr-3 rounded-r-md bg-[#89caf9] h-full w-20">
                1500 m
              </div>
            </div>
            <div className="flex flex-row min-h-14 w-72 border-[#505050] border-2 rounded-lg justify-between items-center text-white cursor-pointer hover:scale-[1.03] duration-75">
              <p className="pl-3">Poço</p>
              <div className="flex items-center justify-end pr-3 rounded-r-md bg-[#89caf9] h-full w-20">
                1500 m
              </div>
            </div>
            <div className="flex flex-row min-h-14 w-72 border-[#505050] border-2 rounded-lg justify-between items-center text-white cursor-pointer hover:scale-[1.03] duration-75">
              <p className="pl-3">Poço</p>
              <div className="flex items-center justify-end pr-3 rounded-r-md bg-[#89caf9] h-full w-20">
                1500 m
              </div>
            </div>
            <div className="flex flex-row min-h-14 w-72 border-[#505050] border-2 rounded-lg justify-between items-center text-white cursor-pointer hover:scale-[1.03] duration-75">
              <p className="pl-3">Poço</p>
              <div className="flex items-center justify-end pr-3 rounded-r-md bg-[#89caf9] h-full w-20">
                1500 m
              </div>
            </div>
            <div className="flex flex-row min-h-14 w-72 border-[#505050] border-2 rounded-lg justify-between items-center text-white cursor-pointer hover:scale-[1.03] duration-75">
              <p className="pl-3">Poço</p>
              <div className="flex items-center justify-end pr-3 rounded-r-md bg-[#89caf9] h-full w-20">
                1500 m
              </div>
            </div>
            <div className="flex flex-row min-h-14 w-72 border-[#505050] border-2 rounded-lg justify-between items-center text-white cursor-pointer hover:scale-[1.03] duration-75">
              <p className="pl-3">Poço</p>
              <div className="flex items-center justify-end pr-3 rounded-r-md bg-[#89caf9] h-full w-20">
                1500 m
              </div>
            </div>
            <div className="flex flex-row min-h-14 w-72 border-[#505050] border-2 rounded-lg justify-between items-center text-white cursor-pointer hover:scale-[1.03] duration-75">
              <p className="pl-3">Poço</p>
              <div className="flex items-center justify-end pr-3 rounded-r-md bg-[#89caf9] h-full w-20">
                1500 m
              </div>
            </div>
            <div className="flex flex-row min-h-14 w-72 border-[#505050] border-2 rounded-lg justify-between items-center text-white cursor-pointer hover:scale-[1.03] duration-75">
              <p className="pl-3">Poço</p>
              <div className="flex items-center justify-end pr-3 rounded-r-md bg-[#89caf9] h-full w-20">
                1500 m
              </div>
            </div>
            <div className="flex flex-row min-h-14 w-72 border-[#505050] border-2 rounded-lg justify-between items-center text-white cursor-pointer hover:scale-[1.03] duration-75">
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
