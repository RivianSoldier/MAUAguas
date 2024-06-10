import Chart from "./ui/chart";
import { ModeloNivel } from "./ui/modelo-nivel-geral";
import { ModeloVazao } from "./ui/modelo-vazao-geral";

export default function DashboardCaixa({
  nome,
  formattedTime,
  altura,
  capacidade,
  data,
}) {
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
          <Chart data={data} />
        </div>
      </div>
    </div>
  );
}
