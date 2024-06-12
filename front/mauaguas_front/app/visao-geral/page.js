import NavBar from "@/components/NavBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { CheckboxList } from "@/components/ui/checkbox-list";
import { ModeloVazao } from "@/components/ui/modelo-vazao-geral";
import { ModeloNivel } from "@/components/ui/modelo-nivel-geral";

import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
const link = process.env.NEXT_PUBLIC_LINK;

async function getIds() {
  const res = await fetch(`${link}/get/reservoirs_ids`);
  const ids = await res.json();
  return ids;
}

async function getReservoir(id) {
  const res = await fetch(`${link}/get/reservoir_by_id/${id}`);
  const data = await res.json();
  const usefullData = [data["name"], data["height"], data["well"]];
  return usefullData;
}
function padronizarValor(valor) {
  if (valor === 0) return 0;
  const strValor = valor.toString();
  const algarismosDiferentesDeZero = strValor.replace(/[.0]/g, '');
  const primeirosQuatro = algarismosDiferentesDeZero.substring(0, 4);
  return parseFloat(primeirosQuatro);
}

async function getReservoirsData(reservoirs_ids) {
  const reservoirsData = await Promise.all(
    reservoirs_ids.map(async (id) => {
      var reservoirData = await getReservoir(id);
      const reservoirStatus = await getReservoirStatus(id);
      reservoirData = reservoirData.concat(reservoirStatus);
      return reservoirData;
    })
  );
  return reservoirsData;
}
async function getReservoirStatus(id) {
  const res = await fetch(`${link}/get/lastest_reservoir_status_by_id/${id}`);
  const data = await res.json();
  const waterHeight = [
    data["water_height"],
    data["water_flow_out"],
    data["id"],
  ];
  return waterHeight;
}

export default async function VisaoGeral() {
  const ids = await getIds();
  const reservoirsData = await getReservoirsData(ids);
  console.log(reservoirsData)


  return (
    <main className="flex min-h-screen flex-col bg-[#303030]">
      <NavBar activePage="visao-geral" />
      <Tabs defaultValue="nivel" className="w-full mt-32 h-full">
        <div className="flex justify-between mx-10 text-2.5xl items-center">
          <p className="text-white font-bold">Dashboard Geral</p>
          <div className="flex items-center justify-around">
            <TabsList className="bg-[#3B3B3B] rounded-xl px-0 py-6">
              <TabsTrigger
                value="nivel"
                className="text-lg rounded-tl-xl rounded-bl-xl px-4 py-2.5 text-white"
              >
                Nível
              </TabsTrigger>
              <TabsTrigger
                value="vazao"
                className="text-lg rounded-tr-xl rounded-br-xl p-2.5 text-white"
              >
                Vazão
              </TabsTrigger>
            </TabsList>
          </div>
        </div>
        <div className="text-white mx-10 my-4">
          <TabsContent value="nivel">
            <p className="font-semibold text-2xl py-4">Caixas</p>
            <div
              className="gap-4 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3
              sm:grid-cols-2"
            >
              {reservoirsData
                .sort((a, b) => b[2] - a[2])
                .filter((reservoirData) => reservoirData[2] === false && reservoirData[5] !== "Caixa_bloco_H")
                .map((reservoirData, index) => (
                  <Link
                    className="p-0 m-0 h-fit"
                    href={`/dashboard-detalhado/${reservoirData[5]}`}
                    key={reservoirData[0]}
                  >
                    <div key={index}>
                      <ModeloNivel
                        className="hover:scale-[1.03] hover:ease-in-out transition duration-100"
                        altura={
                        parseFloat(reservoirData[1] -
                          Math.abs(reservoirData[3] / 100).toFixed(2)).toFixed(2)
                        }
                        capacidade={reservoirData[1]}
                        nome={reservoirData[0]}
                        tipo={reservoirData[2]}
                      />
                    </div>
                  </Link>
                ))}
            </div>
              <Separator className="h-[2px] mt-8" />
            <p className="font-semibold text-2xl py-4">Poços</p>
            <div className="gap-4 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mb-8">
              {reservoirsData
                .sort((a, b) => b[2] - a[2])
                .filter((reservoirData) => reservoirData[2] === true)
                .map((reservoirData, index) => (
                  <Link
                    className="p-0 m-0 h-fit"
                    href={`/dashboard-detalhado/${reservoirData[5]}`}
                    key={reservoirData[0]}
                  >
                    <div key={index}>
                      <ModeloNivel
                        className="hover:scale-[1.03] hover:ease-in-out transition duration-100"
                        altura={
                          reservoirData[1] -
                          parseFloat(Math.abs(reservoirData[3] / 100).toFixed(2)).toFixed(2)
                        }
                        capacidade={reservoirData[1]}
                        nome={reservoirData[0]}
                        tipo={reservoirData[2]}
                      />
                    </div>
                  </Link>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="vazao">
            <p className="font-semibold text-2xl py-4">Caixas</p>
            <div
              className="gap-4 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3
              sm:grid-cols-2"
            >
              {reservoirsData
                .sort((a, b) => b[2] - a[2])
                .filter((reservoirData) => reservoirData[2] === false)
                .map((reservoirData, index) => (
                  <Link
                    className="p-0 m-0 h-fit"
                    href={`/dashboard-detalhado/${reservoirData[5]}`}
                    key={reservoirData[0]}
                  >
                    <div key={index}>
                      <ModeloVazao
                        className="hover:scale-[1.03] hover:ease-in-out transition duration-100"
                        vazao={padronizarValor(reservoirData[4])/100}
                        maximo={60}
                        nome={reservoirData[0]}
                        tipo={reservoirData[2]}
                      />
                    </div>
                  </Link>
                ))}
            </div>
              <Separator className="h-[2px] mt-8" />
            <p className="font-semibold text-2xl py-4">Poços</p>
            <div className="gap-4 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mb-8">
              {reservoirsData
                .sort((a, b) => b[2] - a[2])
                .filter((reservoirData) => reservoirData[2] === true)
                .map((reservoirData, index) => (
                  <Link
                    className="p-0 m-0 h-fit"
                    href={`/dashboard-detalhado/${reservoirData[5]}`}
                    key={reservoirData[0]}
                  >
                    <div key={index}>
                      <ModeloVazao
                        className="hover:scale-[1.03] hover:ease-in-out transition duration-100"
                        vazao={padronizarValor(reservoirData[4])}
                        maximo={60}
                        nome={reservoirData[0]}
                        tipo={reservoirData[2]}
                      />
                    </div>
                  </Link>
                ))}
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </main>
  );
}
