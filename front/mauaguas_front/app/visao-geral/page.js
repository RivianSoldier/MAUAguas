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
const link = "https://9b72-2804-7f0-1d-327-e2a8-fbc8-3df8-f709.ngrok-free.app"

async function getIds() {
  const res = await fetch(
    `${link}/get/reservoirs_ids`
  );
  const ids = await res.json();
  console.log(ids)
  return ids;
}

async function getReservoir(id) {
  const res = await fetch(
    `${link}/get/reservoir_by_id/${id}`
  );
  const data = await res.json();
  const usefullData = [data["name"], data["height"], data["well"]];
  console.log(usefullData)
  return usefullData;
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
  console.log(reservoirsData);
  return reservoirsData;
}
async function getReservoirStatus(id) {
  const res = await fetch(
    `${link}/get/lastest_reservoir_status_by_id/${id}`
  );
  const data = await res.json();
  const waterHeight = [data["water_height"], data["water_flow_out"]];
  console.log(waterHeight)
  return waterHeight;
}

export default async function VisaoGeral() {
  const ids = await getIds();
  const reservoirsData = await getReservoirsData(ids);

  return (
    <main className="flex min-h-screen flex-col bg-[#303030]">
      <NavBar activePage="visao-geral" />
      <Tabs defaultValue="nivel" className="w-full mt-32 h-full">
        <div className="flex justify-between mx-10 text-2.5xl items-center">
          <p className="text-white font-bold">Dashboard Geral</p>
          <div className="flex items-center justify-around">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="mr-10 py-6 bg-[#3B3B3B] flex hover:bg-[#616161] hover:bg-opacity-50 rounded-xl transition duration-300 cursor-pointer"
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
            <div className="gap-4 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
              <ModeloNivel
                altura={1500}
                capacidade={2500}
                nome={"Poço"}
                tipo={true}
              />
              {reservoirsData.map((reservoirData, index) => (
                <div key={index}>
                  <ModeloNivel
                    altura={reservoirData[1] - Math.abs(reservoirData[3] / 100).toFixed(2)}
                    capacidade={reservoirData[1]}
                    nome={reservoirData[0]}
                    tipo={reservoirData[2]}
                  />
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="vazao">
            <div className="gap-4 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
              <ModeloVazao nome="Poço" vazao={1000} maximo={1500} tipo={true} />
              {reservoirsData.map((reservoirData, index) => (
                <div key={index}>
                  <ModeloVazao
                    vazao={reservoirData[4].toFixed(2)}
                    maximo={60}
                    nome={reservoirData[0]}
                    tipo={reservoirData[2]}
                  />
                </div>
              ))}
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </main>
  );
}
