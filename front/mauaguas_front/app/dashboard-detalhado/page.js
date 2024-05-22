"use client";

import NavBar from "@/components/NavBar";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Chart from "@/components/ui/chart";
import { ModeloNivel } from "@/components/ui/modelo-nivel-geral";
import { ModeloVazao } from "@/components/ui/modelo-vazao-geral";

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
        <div className="flex flex-col pb-4 w-full text-white mx-4 ml-[23rem]">
          <p className="mt-28">
            Dashboard em detalhes da
            <span className="font-bold"> Caixa D'água 4</span>
          </p>
          <div className="flex items-center justify-center bg-[#3b3b3b] rounded-lg h-14 font-semibold mt-4">
            19:46 OS DADOS FORAM ATUALIZADOS !
          </div>
          <div className="grid grid-cols-4 gap-3 mt-3">
            <div className="grid grid-cols-2 gap-3 col-span-4 min-[1190px]:col-span-1">
              <div className="col-span-1 min-[1190px]:col-span-2">
                <ModeloNivel
                  altura={50}
                  capacidade={100}
                  hidden={true}
                />
              </div>
              <div className="col-span-1 min-[1190px]:col-span-2">
                <ModeloVazao vazao={50} maximo={100} hidden={true} />
              </div>
            </div>

            <div className="w-full col-span-4 min-[1190px]:col-span-3 flex row-span-2 items-center justify-center h-[510px]">
              <Chart />
            </div>
          </div>
        </div>
      </div>
    </main>
    </div>
  );
}
