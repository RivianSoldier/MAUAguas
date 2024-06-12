"use client";

import Chart from "./ui/chart";
import { ModeloNivel } from "./ui/modelo-nivel-geral";
import { ModeloVazao } from "./ui/modelo-vazao-geral";
import { useState, useEffect } from "react";

export default function DashboardCaixa({
  nome,
  initialFormattedTime,
  altura,
  capacidade,
  data,
  slug,
}) {
  const link = process.env.NEXT_PUBLIC_LINK;

  const [formattedTime, setFormattedTime] = useState(initialFormattedTime);
  const [reservoirData, setReservoirData] = useState(data);
  const [status, setStatus] = useState([]);
  const [reservoirStatusChart, setReservoirStatusChart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching data...");

      const fetchReservoirStatus = async () => {
        const res = await fetch(
          `${link}/get/lastest_reservoir_status_by_id/${slug}`
        );
        const data = await res.json();
        const status = [
          data["water_height"],
          data["water_flow_out"],
          data["water_flow_in"],
          data["time_stamp"],
          data["time"],
          data["bomb_hours"],
        ];
        setStatus(status);

        const time = status[5];
        const date = new Date(time);
        const hour = date.getHours();
        const minutes = date.getMinutes();
        setFormattedTime(`${hour}:${minutes < 10 ? "0" + minutes : minutes}`);
      };

      const fetchReservoirChart = async () => {
        const res = await fetch(`${link}/get/reservoir_status_by_id/${slug}`);
        const dataChart = await res.json();
        const usefulData = dataChart.map((item) => {
          const date = new Date(item.time_stamp);
          const hour = date.getUTCHours().toString().padStart(2, "0");
          const minute = date.getUTCMinutes().toString().padStart(2, "0");
          return {
            Tempo: `${hour}:${minute}`,
            Nível: altura - Math.abs(item.water_height / 100).toFixed(2),
            Vazão: parseFloat(item.water_flow_out.toFixed(2)),
          };
        });
        setReservoirStatusChart(data.slice(0, 12).reverse());
      };

      await fetchReservoirStatus();
      await fetchReservoirChart();
    };

    fetchData(); 

    const interval = setInterval(fetchData, 10000); 

    return () => clearInterval(interval);
  }, [slug]);

  return (
    <div className="flex flex-col pb-4 w-full text-white mx-4 md:ml-[23rem]">
      <p className="mt-28">
        Dashboard em detalhes de
        <span className="font-bold text-lg"> {nome} </span>
      </p>
      <div className="flex items-center justify-center bg-[#3b3b3b] rounded-lg h-14 font-semibold mt-4">
        {formattedTime} OS DADOS FORAM ATUALIZADOS !
      </div>
      <div className="grid grid-cols-4 gap-3 mt-3">
        <div className="grid grid-cols-2 gap-3 col-span-4 xl:col-span-1">
          <div className="col-span-4 xl:col-span-2 sm:col-span-1">
            <ModeloNivel
              altura={altura}
              capacidade={capacidade}
              hidden={true}
            />
          </div>
          <div className="col-span-4 xl:col-span-2 sm:col-span-1">
            <ModeloVazao vazao={50} maximo={100} hidden={true} />
          </div>
        </div>
        <div className="w-full col-span-4 xl:col-span-3 flex row-span-2 items-center justify-center h-[510px]">
          <Chart data={reservoirData} />
        </div>
      </div>
    </div>
  );
}
